import { RoomState } from "../../../shared/RoomState/RoomState";
import Room from "../../Room/Room";
import GameScene from "../../Scene/List/GameScene";
import { SceneList } from "../../Scene/SceneList";
import Application from "../../main";
import RegionServerInterface from "./RegionServerInterface";

export default class RegionServer implements RegionServerInterface {
    ws: null | WebSocket;
    id: string;
    ip: string;
    port: number;
    clientId: null | number;
    ping: number;
    pingDate: number;
    intervalPing: null | ReturnType<typeof setInterval>;
    getPong: boolean;

    constructor(data: RegionServerInterface) {
        this.ws = null;
        this.id = data.id;
        this.ip = data.ip;
        this.port = data.port;
        this.clientId = null;
        this.ping = 0;
        this.pingDate = 0; 
        this.intervalPing = null;
        this.getPong = true;
    }

    connect(): Promise<string> {
        return new Promise((resolve, reject) => {
            const instance = this;

            this.ws = new WebSocket(`ws://${this.ip}:${this.port}`);

            this.ws.onclose = () => {
                if(instance.intervalPing != null)
                    clearInterval(instance.intervalPing);

                Application.regionServerManager.destroyServer(instance.id);
                resolve(`Impossible to connect to server region [${instance.id}].`);
            }

            this.ws.onopen = () => {
                instance.intervalPing = setInterval(instance.sendPing.bind(instance), 1000);
            };

            this.ws.onmessage = (msg: any) => {
                if(msg == null || msg.data == null)
                    return;

                const message = JSON.parse(msg.data.toString());
                switch(message.key) {
                    case "pong": {
                        instance.clientId = message.value.clientId;

                        const now = Date.now();
                        instance.ping = Date.now() - instance.pingDate;
                        instance.getPong = true;
                        resolve(`Region server [${instance.id}] loaded.`);
                        break;
                    }

                    case "roomInit": {
                        if(Application.currentUser == null)
                            return;

                        Application.currentUser.currentRoom = new Room(message.value);
                        if(Application.sceneManager.scene instanceof GameScene)
                            Application.sceneManager.scene.initRoom(Application.currentUser.currentRoom);

                        break;
                    }

                    case "playerJoin": {
                        if(Application.currentUser == null || Application.currentUser.currentRoom == null)
                            return;

                        Application.currentUser.currentRoom.playerJoin(message.value);

                        if(Application.sceneManager.scene instanceof GameScene)
                            Application.sceneManager.scene.playerJoin(message.value, Application.currentUser.currentRoom.currentPlayers.length);

                        if(Application.settingsManager.audio.general && Application.settingsManager.audio.game) {
                            const audio = Application.resourceManager.resources["AUDIO_JOIN"].cloneNode();
                            audio.play();
                        }
                        break;
                    }

                    case "playerLeave": {
                        if(Application.currentUser == null || Application.currentUser.currentRoom == null)
                            return;

                        Application.currentUser.currentRoom.playerLeave(message.value);
                        if(Application.sceneManager.scene instanceof GameScene)
                            Application.sceneManager.scene.playerLeave(message.value, Application.currentUser.currentRoom.currentPlayers.length);

                        if(Application.settingsManager.audio.general && Application.settingsManager.audio.game) {
                            const audio = Application.resourceManager.resources["AUDIO_LEAVE"].cloneNode();
                            audio.play();
                        }
                        break;
                    }

                    case "mapData": {
                        if(Application.currentUser == null || Application.currentUser.currentRoom == null)
                            return;

                        Application.currentUser.currentRoom.stadium = message.value;
                        break;
                    }

                    case "worldState": {
                        if(Application.currentUser == null || Application.currentUser.currentRoom == null)
                            return;

                        Application.currentUser.currentRoom.update(message.value);

                        if(Application.sceneManager.scene instanceof GameScene)
                            Application.sceneManager.scene.update(Application.currentUser.currentRoom);

                        break;
                    }

                    case "addHistory": {
                        if(Application.currentUser == null || Application.currentUser.currentRoom == null)
                            return;

                        Application.currentUser.currentRoom.history.push(message.value);

                        if(Application.sceneManager.scene instanceof GameScene)
                            Application.sceneManager.scene.addHistory(message.value);
                        break;
                    }

                    case "gamePause": {
                        if(Application.currentUser == null || Application.currentUser.currentRoom == null)
                            return;
                        
                        if(message.value == false) {
                            if(Application.sceneManager.scene instanceof GameScene)
                                Application.sceneManager.scene.state.unpauseInterval = (3000 - this.ping);
                        }

                        break;
                    }

                    case "sound": {
                        if(Application.currentUser == null || Application.currentUser.currentRoom == null)
                            return;

                        if(!Application.settingsManager.audio.general || !Application.settingsManager.audio.game)
                            return;

                        switch(message.value) {
                            case "kick": {
                                const audio = Application.resourceManager.resources["AUDIO_KICK"].cloneNode();
                                audio.play();
                                break;
                            }

                            case "goal": {
                                Application.resourceManager.resources["AUDIO_GOAL"].play();

                                Application.resourceManager.resources["AUDIO_CROWD"].volume = 1;
                                Application.resourceManager.resources["AUDIO_CROWD"].play();

                                for(let i = 20; i < 40; i++) {
                                    setTimeout(() => {
                                        Application.resourceManager.resources["AUDIO_CROWD"].volume = ((40 - i)/40) * 2;
                                    }, i * 100);
                                }

                                setTimeout(() => {
                                    Application.resourceManager.resources["AUDIO_CROWD"].pause();
                                    Application.resourceManager.resources["AUDIO_CROWD"].currentTime = 0;
                                }, 4000)
                                break;
                            }
                        }
                        break;
                    }

                    case "reorderPlayer": {
                        if(Application.currentUser == null || Application.currentUser.currentRoom == null)
                            return;

                        Application.currentUser.currentRoom.reorderPlayer(message.value);

                        if(Application.sceneManager.scene instanceof GameScene)
                            Application.sceneManager.scene.refreshPickList();
                        break;
                    }

                    case "pickMode": {
                        if(Application.currentUser == null || Application.currentUser.currentRoom == null)
                            return;

                        Application.currentUser.currentRoom.pickMode = message.value;

                        if(Application.currentUser.currentRoom.pickMode == Application.currentUser.id && Application.settingsManager.audio.general && Application.settingsManager.audio.notif) {
                            const audio = Application.resourceManager.resources["AUDIO_NOTIF"].cloneNode();
                            audio.play();
                            break;
                        }

                        if(Application.sceneManager.scene instanceof GameScene) {
                            Application.sceneManager.scene.refreshPickList();

                            if(message.value != null)
                                Application.sceneManager.scene.showMenu();
                        }
                        break;
                    }

                    case "hideMenu": {
                        if(Application.currentUser == null)
                            return;
                        
                        if(Application.sceneManager.scene instanceof GameScene)
                            Application.sceneManager.scene.hideMenu()

                        break;
                    }

                    case "chatMessage": {
                        if(Application.currentUser == null)
                            return;

                        if(Application.sceneManager.scene instanceof GameScene)
                            Application.sceneManager.scene.newChat(message.value);

                        break;
                    }
                }
            };
        })
    }

    sendPing() {
        if(this.getPong == false)
            return;

        this.getPong = false;
        this.pingDate = Date.now();
        this.sendMsg("ping", this.ping);
    }

    sendMsg(key: string, value: any = null): void {
        if(this.ws == null || this.ws.readyState !== WebSocket.OPEN)
            return Application.logger.sendLog("ERROR", "Impossible to send message to region server, websockets are disconnect.");

        const message = JSON.stringify({key: key, value: value});
        this.ws.send(message);
    }

    destroy(): void {}
}