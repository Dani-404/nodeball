import './Utils/Utils'
import Logger from "../shared/Logger/Logger"
import LanguageManager from "./Language/LanguageManager";
import { SceneList } from "./Scene/SceneList";
import SceneManager from "./Scene/SceneManager";
import Config from './Config/Config';
import ResourceManager from './Ressource/ResourceManager';
import SettingsManager from './Settings/SettingsManager';
import WebsocketManager from './WebSockets/WebSocketsManager';
import RegionServerManager from './WebSockets/RegionServer/RegionServerManager';
import User from './User/User';
import GameScene from './Scene/List/GameScene';

let Application: App

class App {
    logger: Logger;
    languageManager: LanguageManager;
    sceneManager: SceneManager;
    resourceManager: ResourceManager;
    webSocketsManager: WebsocketManager;
    regionServerManager: RegionServerManager;
    settingsManager: SettingsManager;
    currentUser: null | User;
    lastCall: number;
    elapsed: number;
    elpasedThen: number;

    constructor() {
        this.logger = new Logger();
        this.languageManager = new LanguageManager();
        this.sceneManager = new SceneManager();
        this.resourceManager = new ResourceManager();
        this.webSocketsManager = new WebsocketManager();
        this.regionServerManager = new RegionServerManager();
        this.settingsManager = new SettingsManager();
        this.currentUser = null;
        this.lastCall = performance.now();
        this.elapsed = performance.now();
        this.elpasedThen = performance.now();

        window.requestAnimationFrame(this.update.bind(this));
    }

    async init(): Promise<any> {
        this.languageManager.init();
        this.settingsManager.init();
        
        this.sceneManager.initScene(SceneList.MessageScene, {
            message: Application.languageManager.getValueForKey('LOADING_MESSAGE', [Config.NAME])
        });

        let messageLoading = await this.resourceManager.init();
        Application.logger.sendLog("SUCCESS", messageLoading);

        await this.webSocketsManager.init();
    }

    update() {
        const now = performance.now();
        this.elapsed = now - this.elpasedThen;

        if(this.settingsManager.graphics.fps != 0 && this.elapsed < (1000/this.settingsManager.graphics.fps))
        {
            window.requestAnimationFrame(this.update.bind(this))
            return;
        }

        if(this.settingsManager.graphics.fps != 0)
            this.elpasedThen = now - (this.elapsed % (1000/this.settingsManager.graphics.fps));

        const delta = (now - this.lastCall)/1000;
        this.lastCall = now;

        if(this.sceneManager.scene instanceof GameScene) {
            this.sceneManager.scene.renderGame(delta);
            this.sceneManager.scene.setFps(Math.round(1/delta));
        }

        window.requestAnimationFrame(this.update.bind(this));
    }
}

Application = new App();
export default Application;
window.addEventListener("load", (event) => {
    Application.init().catch((e) => Application.logger.sendCriticalError(e.toString()));
});