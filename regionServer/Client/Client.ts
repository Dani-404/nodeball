import { WebSocket, WebSocketServer } from "ws";
import ClientInterface from "./ClientInterface";
import Server from "../main";
import Player from "../Player/Player";

export default class Client implements ClientInterface {
    id: string;
    socket: WebSocket;
    player: null | Player;

    constructor(data: ClientInterface) {
        this.id = data.id;
        this.socket = data.socket;
        this.player = null;
    }

    initEvents(): void {
        const instance = this;

        this.socket.on('message', function message(data: any) {
            if(data == null)
                return;

            const message = JSON.parse(data.toString());

            switch(message.key) {
                case "ping": {
                    instance.sendMsg("pong", {clientId: instance.id});

                    if(message.value == null || message.value !instanceof Number)
                        return;

                    if(instance.player != null && instance.player.currentRoom != null)
                        instance.player.currentRoom.updatePlayerPing(instance.player.id, parseInt(message.value));
                    break;
                }

                case "inputs": {
                    if(
                        instance.player == null || 
                        instance.player.currentRoom == null || 
                        message.value == null ||
                        message.value.up == null || 
                        message.value.down == null || 
                        message.value.left == null || 
                        message.value.right == null || 
                        message.value.kick == null || 
                        message.value.up !instanceof Boolean || 
                        message.value.down !instanceof Boolean || 
                        message.value.left !instanceof Boolean || 
                        message.value.right !instanceof Boolean || 
                        message.value.kick !instanceof Boolean 
                    )
                        return;

                    const roomPlayer = instance.player.currentRoom.getPlayer(instance.player.id);
                    if(roomPlayer != null)
                        roomPlayer.inputs = {up: message.value.up, down: message.value.down, left: message.value.left, right: message.value.right, kick: message.value.kick};
                    
                    break;
                }

                case "pause": {
                    if(instance.player == null || instance.player.rank == "user" || instance.player.rank == "vip" || instance.player.currentRoom == null)
                        return;

                    instance.player.currentRoom.switchPause();
                    break;
                }

                case "setTeamPlayer": {
                    if(
                        instance.player == null || 
                        instance.player.currentRoom == null || 
                        message.value == null || 
                        message.value.playerId == null ||
                        message.value.team == null ||
                        message.value.playerId !instanceof Number || 
                        message.value.team !instanceof Number 
                    )
                        return;

                    instance.player.currentRoom.setPlayerTeamByUser(instance.player, message.value.playerId, message.value.team);
                    break;
                }

            }
        });

        this.socket.on('close', function close() {
            Server.clientManager.destroyClient(instance.id);
        });
    }

    sendMsg(key: string, value: any): void {
        const message = JSON.stringify({key: key, value: value});
        this.socket.send(message);
    }

    destroy(): void {
        if(this.player != null) {
            Server.playerManager.destroyPlayer(this.player.id);
            this.player = null;
        }
    }
}