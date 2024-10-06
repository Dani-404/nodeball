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

    newClient(socket: any, ip: string): Client {
        const client = new Client({id: Crypto.randomBytes(20).toString('hex'), ip: ip, socket: socket});
        this.clients[client.id] = client;
        client.initEvents();

        Server.logger.sendLog("VERBOSE", `New client connection [${client.id}].`);
        return client;
    }

    destroyClient(socketId: string): void {
        if(!this.clients.hasOwnProperty(socketId))
            return;

        const client = this.clients[socketId];
        client.destroy();
        Server.logger.sendLog("VERBOSE", `Client disconnect [${socketId}].`);
    }
}