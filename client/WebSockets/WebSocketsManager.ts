import Config from "../Config/Config";
import GameScene from "../Scene/List/GameScene";
import { SceneList } from "../Scene/SceneList";
import User from "../User/User";
import Application from "../main";
import RegionServerInterface from "./RegionServer/RegionServerInterface";

export default class WebsocketManager {
    ws: null | WebSocket;

    constructor() {
        this.ws = null;
    }

    init(): Promise<string> {
        return new Promise((resolve, reject) => {
            const instance = this;
            
            Application.sceneManager.initScene(SceneList.MessageScene, {
                message: Application.languageManager.getValueForKey('LOADING_CONNECTION_TO_MAIN_SERVER')
            });
            this.ws = new WebSocket(`ws://${Config.SERVER_HOST}:${Config.SERVER_PORT}`);
    
            this.ws.onclose = () => {
                Application.logger.sendLog("ERROR", "Connection to server losted.");
                Application.sceneManager.initScene(SceneList.MessageScene, {
                    message: Application.languageManager.getValueForKey('GENERIC_ERROR_CONNECTION_LOSTED')
                });
            }
    
            this.ws.onopen = () => {
                Application.logger.sendLog("SUCCESS", "Connected to server.");

                instance.sendMsg("fetchingServers");
                Application.sceneManager.initScene(SceneList.MessageScene, {
                    message: Application.languageManager.getValueForKey('LOADING_FETCHING_REGION_SERVERS')
                });
            }

            this.ws.onmessage = (msg: any) => {
                if(msg == null || msg.data == null)
                    return;

                const message = JSON.parse(msg.data.toString());
                switch(message.key) {
                    case "getAllServers": {
                        message.value.forEach((server: any) => Application.regionServerManager.initServer(server));

                        Application.regionServerManager.initAllServers()
                        .then((message) => {
                            Application.logger.sendLog("SUCCESS", message);

                            if(Application.regionServerManager.getAllServers().length == 0)
                                return Application.sceneManager.initScene(SceneList.MessageScene, {
                                    message: Application.languageManager.getValueForKey('GENERIC_ERROR_NO_SERVER_AVAILABLE')
                                });

                            Application.sceneManager.initScene(SceneList.LoginScene);
                        })
                        .catch((e) => {
                            Application.logger.sendLog("ERROR", e.toString());

                            Application.sceneManager.initScene(SceneList.MessageScene, {
                                message: Application.languageManager.getValueForKey('GENERIC_ERROR_SERVERS')
                            });
                        })
                        break;
                    }

                    case "errorLogin": {
                        Application.sceneManager.initScene(SceneList.LoginScene, {
                            error: message.value.key != null ? message.value.key : message.value,
                            args: message.value.args != null ? message.value.args : []
                        });

                        break;
                    }

                    case "disconnect": {
                        Application.currentUser = null;

                        Application.sceneManager.initScene(SceneList.MessageScene, {
                            message: Application.languageManager.getValueForKey(message.value.key, message.value.params)
                        });

                        break;
                    }

                    case "logged": {
                        Application.currentUser = new User(message.value);

                        Application.sceneManager.initScene(SceneList.GameScene, {
                            currentUser: Application.currentUser
                        });
                        break;
                    }

                    case "chatMessage": {
                        if(Application.currentUser == null)
                            return;

                        if(Application.sceneManager.scene instanceof GameScene)
                            Application.sceneManager.scene.newChat(message.value);

                        break;
                    }

                    case "profileData": {
                        if(Application.currentUser == null)
                            return;

                        if(Application.sceneManager.scene instanceof GameScene)
                            Application.sceneManager.scene.profileData(message.value);
                        break;
                    }

                    case "friendsData": {
                        if(Application.currentUser == null)
                            return;

                        Application.currentUser.friends = message.value;

                        if(Application.sceneManager.scene instanceof GameScene)
                            Application.sceneManager.scene.reloadFriends();
                        break;
                    }

                    case "shopData": {
                        if(Application.currentUser == null)
                            return;

                        if(Application.sceneManager.scene instanceof GameScene)
                            Application.sceneManager.scene.shopData(message.value); 
                        break;
                    }

                    case "shopItems": {
                        if(Application.currentUser == null)
                            return;

                        if(Application.sceneManager.scene instanceof GameScene)
                            Application.sceneManager.scene.shopDataItems(message.value); 
                        break;
                    }

                    case "avatarUpdate": {
                        if(Application.currentUser == null)
                            return;

                        Application.currentUser.avatar = message.value;

                        if(Application.sceneManager.scene instanceof GameScene)
                            Application.sceneManager.scene.updateAvatar(); 

                        break;
                    }

                    case "rankUpdate": {
                        if(Application.currentUser == null)
                            return;

                        Application.currentUser.rank = message.value;

                        if(Application.sceneManager.scene instanceof GameScene)
                            Application.sceneManager.scene.renderMenu(); 

                        break;
                    }

                    case "coins": {
                        if(Application.currentUser == null)
                            return;

                        Application.currentUser.coins = message.value;
                        break;
                    }

                    case "addItem": {
                        if(Application.currentUser == null)
                            return;

                        Application.currentUser.items.push(message.value);

                        if(Application.sceneManager.scene instanceof GameScene)
                            Application.sceneManager.scene.refreshShop(); 

                        break;
                    }

                    case "leaderboardData": {
                        if(Application.currentUser == null)
                            return;

                        if(Application.sceneManager.scene instanceof GameScene)
                            Application.sceneManager.scene.setLeaderboardData(message.value);  
                        break;
                    }

                    case "adminAlert": {
                        if(Application.currentUser == null)
                            return;

                        if(Application.sceneManager.scene instanceof GameScene)
                            Application.sceneManager.scene.renderAdminAlert(message.value);   
                        break;
                    }

                    case "adminData": {
                        if(Application.currentUser == null)
                            return;

                        if(Application.sceneManager.scene instanceof GameScene)
                            Application.sceneManager.scene.renderAdmin(message.value);   
                        break;
                    }
                }
            }
        });
    }

    sendMsg(key: string, value: any = null): void {
        if(this.ws == null || this.ws.readyState !== WebSocket.OPEN)
            return Application.logger.sendLog("ERROR", "Impossible to send message to server, websockets are disconnect.");

        const message = JSON.stringify({key: key, value: value});
        this.ws.send(message);
    }
}