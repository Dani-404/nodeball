import Logger from "../shared/Logger/Logger";
import ClientManager from "./Client/ClientManager";
import Config from "./Config/Config";
import PlayerManager from "./Player/PlayerManager";
import RoomManager from "./Room/RoomManager";
import MainServer from "./WebSockets/MainServer";
import WebSocketsManager from "./WebSockets/WebSocketsManager";

let Server: App;

class App {
    logger: Logger;
    wsManager: WebSocketsManager;
    mainServer: MainServer;
    clientManager: ClientManager;
    playerManager: PlayerManager;
    roomManager: RoomManager;

    constructor() {
        this.logger = new Logger();
        this.wsManager = new WebSocketsManager();
        this.mainServer = new MainServer();
        this.clientManager = new ClientManager();
        this.playerManager = new PlayerManager();
        this.roomManager = new RoomManager();
    }

    async init(): Promise<any> {
        await this.wsManager.init();
        this.mainServer.init();
    }
}

Server = new App();
export default Server;
Server.init()
    .then(() => Server.logger.sendLog("SUCCESS", `Region server [${Config.REGION}] started on port ${Config.PORT}.`))
    .catch((e) => Server.logger.sendCriticalError(e.toString()))