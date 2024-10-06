import Application from "../main";

export default class Scene {
    name: string;
    app: HTMLElement | null;

    constructor(name: string) {
        this.name = name;
        this.app = document.getElementById("app");
        Application.logger.sendLog("VERBOSE", `Initiliazing scene ${this.name}.`)
    }

    setState(params: any): void {
    }

    onWillInit(): void {
        if(this.app == null)
            Application.logger.sendLog("ERROR", "Impossible to find #app HTML element.");
    }

    onInitialized(): void {}

    onDestroy(): void {
        if(this.app != null)
            this.app.innerHTML = "";
    }

    render(): void {}
}