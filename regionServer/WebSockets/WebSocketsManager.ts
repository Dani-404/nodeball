import { WebSocketServer } from "ws";
import Config from "../Config/Config";
import Server from "../main";

export default class WebSocketsManager {
    ws: WebSocketServer | null;

    constructor() {
        this.ws = null;
    }

    init(): Promise<string> {
        return new Promise((resolve, reject) => {
            try {
                this.ws = new WebSocketServer({port: Config.PORT});

                this.ws.on('connection', function connection(socket) {
                    Server.clientManager.newClient(socket);
                });

                resolve("WebSockets server started.");
            }
            catch(err: any) {
                reject(err.toString());
            }
        })
    }
}