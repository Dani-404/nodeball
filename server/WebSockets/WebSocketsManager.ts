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

                this.ws.on('connection', function connection(socket, req) {
                    let ip = req.socket.remoteAddress;

                    if(ip != null && ip.startsWith('::ffff:'))
                        ip = ip.substring(7);

                    if(ip == "127.0.0.1") 
                        ip = "127.0.0.1"

                    const client = Server.clientManager.newClient(socket, ip as string);

                    if(req.url == null)
                        return;

                    const urlParams = new URLSearchParams(req.url.substring(1));
                    const key = urlParams.get('key');
                    const version = urlParams.get('version');
                    const region = urlParams.get('region');
                    const port = urlParams.get('port');

                    if(ip != null && key != null && key == Config.REGION_SERVER_KEY && version != null && region != null && port != null)
                        Server.regionServerManager.initServer(region.toUpperCase(), version, ip, parseInt(port), client)
                });

                resolve("WebSockets server started.");
            }
            catch(err: any) {
                reject(err.toString());
            }
        })
    }
}