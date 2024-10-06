import Config from "../Config/Config";
import Application from "../main";
import GameScene from "./List/GameScene";
import LoginScene from "./List/LoginScene";
import MessageScene from "./List/MessageScene";
import Scene from "./Scene";
import { SceneList, SceneType } from "./SceneList";

export default class SceneManager {
    scene: Scene | null;

    constructor() {
        this.scene = null;
    }

    initScene(scene: SceneList, params: Object = {}): void {
        if(this.scene instanceof SceneType[scene])
            return this.scene.setState(params);

        if(this.scene != null) {
            this.scene.onDestroy();
            this.scene = null;
        }

        switch(scene) {
            case SceneList.MessageScene:
            {
                this.scene = new MessageScene({
                    name: "MessageScene",
                    params: params
                });
                break;
            }

            case SceneList.LoginScene:
            {
                this.scene = new LoginScene({
                    name: "LoginScene",
                    params: params
                });
                break;
            }

            case SceneList.GameScene:
            {
                this.scene = new GameScene({
                    name: "GameScene",
                    params: params
                });
                break;
            }

            default: 
                Application.logger.sendLog("ERROR", `Impossible to load scene ${scene}.`)
                break;
        }

        if(this.scene != null) {
            this.scene.onWillInit();
            this.scene.render();
            this.scene.onInitialized();
        }
    }
}