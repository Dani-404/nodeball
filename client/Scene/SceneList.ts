import GameScene from "./List/GameScene";
import LoginScene from "./List/LoginScene";
import MessageScene from "./List/MessageScene";

export const enum SceneList {
    MessageScene,
    LoginScene,
    GameScene
}

export const SceneType = {
    0: MessageScene,
    1: LoginScene,
    2: GameScene
}