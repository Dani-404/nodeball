import Application from "../../main";
import RegionServer from "./RegionServer"
import RegionServerInterface from "./RegionServerInterface";

type RegionServersType = {
    [key: string]: RegionServer
}

export default class RegionServerManager {
    regionServers: RegionServersType;

    constructor() {
        this.regionServers = {}
    }

    getServerById(id: string) {
        for(let i in this.regionServers) {
            const regionServer = this.regionServers[i];
            if(regionServer.id == id)
                return regionServer;
        }

        return null;
    }

    initServer(data: RegionServerInterface) {
        if(data.ip == null || this.getServerById(data.id) != null)
            return;

        const regionServer = new RegionServer(data);
        this.regionServers[regionServer.id] = regionServer;
        Application.logger.sendLog("INFO",  `Region server [${data.id}] loaded.`);
    }

    initAllServers(): Promise<string>  {
        return new Promise((resolve, reject) => {
            const listOfPromise = [];

            for(let i in this.regionServers) {
                listOfPromise.push(this.regionServers[i].connect());
            }

            Promise.all(listOfPromise).then(() => {
                resolve("All region servers loaded.");
            }).catch((e) => reject(e.toString()));
        })
    }

    destroyServer(id: string) {
        const regionServer = this.getServerById(id);
        if(regionServer == null)
            return;

        regionServer.destroy();
        delete this.regionServers[id];
        Application.logger.sendLog("INFO",  `Region server [${id}] unloaded.`);
    }

    getAllServers(): Array<any> {
        const servers: any[] = [];
        
        for(let i in this.regionServers) {
            const server = this.regionServers[i];
            servers.push({id: server.id, ip: server.ip, port: server.port, ping: server.ping});
        }

        return servers.sort((a, b) => Number(a.ping) - Number(b.ping));
    }
}