import Config from "../../Config/Config";
import Scene from "../Scene";
import SceneInterface from "../SceneInterface";

export default class MessageScene extends Scene {
    state: any | null;

    constructor(state: SceneInterface) {
        super(state.name);
        this.state = {
            message: state.params.message
        }
    }

    setState(params: any) {
        super.setState(params);
        for(let i in params) {
            this.state[i] = params[i];
        }
        this.render();
    }

    onWillInit(): void {
        super.onWillInit();
        document.title = Config.NAME;
    }

    onInitialized(): void {
        super.onInitialized();
    }

    onDestroy(): void {
        super.onDestroy();
    }

    render(): void {
        if(this.app == null)
            return;

        this.app.innerHTML = 
            `<div class="loadingScreen">
                <img src="assets/images/logo.png">
                <div class="message">${this.state["message"]}</div>
            </div>`;
    }
}