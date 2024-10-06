import Logger from "../shared/Logger/Logger";
import ClientManager from "./Client/ClientManager";
import Config from "./Config/Config";
import express from 'express';
import path from 'path';
import RegionServerManager from "./RegionServer/RegionServerManager";
import WebSocketsManager from "./WebSockets/WebSocketsManager";
import DatabaseManager from "./Database/DatabaseManager";
import PlayerManager from "./Player/PlayerManager";
import ShopManager from "./Shop/ShopManager";
import SanctionManager from "./Sanction/SanctionManager";

let Server: App;

class App {
    logger: Logger;
    wsManager: WebSocketsManager;
    regionServerManager: RegionServerManager;
    databaseManager: DatabaseManager;
    clientManager: ClientManager;
    playerManager: PlayerManager;
    shopManager: ShopManager;
    sanctionManager: SanctionManager;

    constructor() {
        this.logger = new Logger();
        this.wsManager = new WebSocketsManager();
        this.regionServerManager = new RegionServerManager();
        this.databaseManager = new DatabaseManager();
        this.clientManager = new ClientManager();
        this.playerManager = new PlayerManager();
        this.shopManager = new ShopManager();
        this.sanctionManager = new SanctionManager();
    }

    async init(): Promise<any> {
        this.logger.sendLog("INFO", "Initiliazing server...");
        let initMsg = await this.databaseManager.init();
        this.logger.sendLog("SUCCESS", initMsg);

        initMsg = await this.playerManager.init();
        this.logger.sendLog("SUCCESS", initMsg);

        initMsg = await this.shopManager.init();
        this.logger.sendLog("SUCCESS", initMsg);

        initMsg = await this.sanctionManager.init();
        this.logger.sendLog("SUCCESS", initMsg);

        await this.wsManager.init();
        const app = express();
        app.use('/', express.static(path.join(__dirname, '..', 'public')));
        app.listen(Config.HTTP_PORT);
    }
}

Server = new App();
export default Server;
Server.init()
    .then(() => Server.logger.sendLog("SUCCESS", `Server started on port ${Config.PORT}, HTTP server started on port: ${Config.HTTP_PORT}.`))
    .catch((e) => Server.logger.sendCriticalError(e.toString()))