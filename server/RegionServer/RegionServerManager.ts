import Client from "../Client/Client";
import Config from "../Config/Config";
import Server from "../main";
import RegionServer from "./RegionServer";

type RegionServersType = {
    [key: string]: RegionServer
}

export default class RegionServerManager {
    regionServers: RegionServersType;

    constructor() {
        this.regionServers = {};
    }

    initServer(id: string, version: string, ip: string, port: number, client: Client) {
        if(this.getServerById(id) != null)
            return client.socket.close(1000, `Region server ${id} is already used.`);

        if(version != Config.REGION_SERVER_VERSION)
            return client.socket.close(1000, `Invalid region server version.`);

        const regionServer = new RegionServer({id: id, ip: ip, port: port, client: client});
        this.regionServers[id] = regionServer;
        client.regionServer = regionServer;
        Server.logger.sendLog("INFO",  `Region server [${id}] loaded.`);
    }

    destroyServer(id: string) {
        const regionServer = this.getServerById(id);
        if(regionServer == null)
            return;

        regionServer.destroy();
        delete this.regionServers[id];
        Server.logger.sendLog("INFO",  `Region server [${id}] unloaded.`);
    }

    getServerById(id: string) {
        for(let i in this.regionServers) {
            const regionServer = this.regionServers[i];
            if(regionServer.id == id)
                return regionServer;
        }

        return null;
    }

    getAllServers(): Array<any> {
        const servers: any[] = [];
        
        for(let i in this.regionServers) {
            const server = this.regionServers[i];
            servers.push({id: server.id, ip: server.ip, port: server.port});
        }

        return servers;
    }
}