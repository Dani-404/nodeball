import { WebSocket } from "ws";
import Config from "../Config/Config";
import Server from "../main";

export default class MainServer {
    socket: null | WebSocket;
    intervalReconnect: null | typeof setInterval;

    constructor() {
        this.socket = null;
        this.intervalReconnect = null;
    }

    init() {
        const instance = this;

        this.socket = new WebSocket(`ws://${Config.MAIN_SERVER_HOST}:${Config.MAIN_SERVER_PORT}/key=${Config.API_KEY}&&version=${Config.VERSION}&&region=${Config.REGION}&&port=${Config.PORT}`);

        this.socket.onopen = function() {
            Server.logger.sendLog("SUCCESS", `Connected to main server.`)
        }

        this.socket.onmessage = function(message) {
            if(message == null || message.data == null)
                return;

            const msg = JSON.parse(message.data.toString());

            switch(msg.key) {
                case "tryLogin": {
                    Server.clientManager.tryLogin(msg.value);
                    break;
                }

                case "joinRoom": {
                    if(msg.value.playerId == null)
                        return;

                    const player = Server.playerManager.getPlayerById(msg.value.playerId);
                    if(player == null)
                        return;

                    if(msg.value.roomId != null)
                        Server.roomManager.initRoom(msg.value.roomId.toString().substring(0, 20), player);
                    else
                        Server.roomManager.initRoom("1", player);
                    break;
                }

                case "messageChat": {
                    const client = Server.clientManager.getClientById(msg.value.clientId);
                    if(client == null || client.player == null || client.player.currentRoom == null)
                        return;

                    client.player.currentRoom.newChat(client.player, msg.value.type, msg.value.message);
                    break;
                }

                case "avatarUpdate": {
                    const player = Server.playerManager.getPlayerById(msg.value.playerId);
                    if(player == null)
                        return;

                    player.updateAvatar(msg.value.avatar);
                    break;
                }

                case "rankUpdate": {
                    const player = Server.playerManager.getPlayerById(msg.value.playerId);
                    if(player == null)
                        return;

                    player.updateRank(msg.value.rank);
                    break;
                }

                case "announcement": {
                    const room = Server.roomManager.getRoom(msg.value.roomId);
                    if(room == null)
                        return;

                    room.broadcast("chatMessage", {type: "announcement", message: msg.value.message, params: msg.value.params, officialTrad: true});
                    break;
                }

                case "forceDisconnect": {
                    Server.playerManager.destroyPlayer(msg.value);
                    break;
                }
            }
        }

        this.socket.onerror = function(e) {}

        this.socket.onclose = function(e) {
            Server.logger.sendLog("ERROR", `Connection to main server losted (${e.reason}), trying to reconnect...`)
            Server.playerManager.destroyAllPlayers();

            setTimeout(function() {
                instance.init();
            }, 5000);
        }
    }

    sendMsg(key: string, value: any): void {
        if(this.socket == null || this.socket.readyState != WebSocket.OPEN)
            return;

        const message = JSON.stringify({key: key, value: value});
        this.socket.send(message);
    }
}