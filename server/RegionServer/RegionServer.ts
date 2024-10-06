import Client from "../Client/Client";
import Server from "../main";
import RegionServerInterface from "./RegionServerInterface";

export default class RegionServer implements RegionServerInterface {
    id: string;
    ip: string;
    port: number;
    client: Client;

    constructor(data: RegionServerInterface) {
        this.id = data.id;
        this.ip = data.ip;
        this.port = data.port;
        this.client = data.client;
    }

    destroy(): void {
        for(let i in Server.playerManager.players) {
            const player = Server.playerManager.players[i];
            if(player.regionPlayer != null && player.regionPlayer.region == this.id)
                player.destroy("GENERIC_ERROR_CONNECTION_LOSTED");
        }
    }
}