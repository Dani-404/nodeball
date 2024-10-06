import Config from "../Config/Config";
import Player from "../Player/Player";
import Server from "../main";
import Client from "./Client";
import Crypto from 'crypto'

type ClientsType = {
    [key: string]: Client
}

export default class ClientManager {
    clients: ClientsType;

    constructor() {
        this.clients = {};
    }

    newClient(socket: any): void {
        const client = new Client({id: Crypto.randomBytes(20).toString('hex'), socket: socket});
        this.clients[client.id] = client;
        client.initEvents();

        Server.logger.sendLog("VERBOSE", `New client connection [${client.id}].`);
    }

    getClientById(clientId: string): Client | null {
        for(let i in this.clients) {
            const client = this.clients[i];
            if(client.id == clientId)
                return client;
        }

        return null;
    }

    tryLogin(data: any): void {
        if(data.clientId == null || data.serverClientId == null || data.id == null || data.username == null || data.avatar == null)
            return;

        const client = this.getClientById(data.serverClientId);
        if(client == null || client.player != null)
            return;

        const player = Server.playerManager.newPlayer({id: data.id, client: client, mainClientId: data.clientId, username: data.username, rank: data.rank, avatar: data.avatar});
        client.player = player;
        Server.mainServer.sendMsg("successLogin", {id: player.id, clientId: client.id, region: Config.REGION, currentRoom: player.currentRoom});
    }

    destroyClient(socketId: string): void {
        if(!this.clients.hasOwnProperty(socketId))
            return;

        const client = this.clients[socketId];
        client.destroy();
        delete this.clients[socketId];
        Server.logger.sendLog("VERBOSE", `Client disconnect [${socketId}].`);
    }
}