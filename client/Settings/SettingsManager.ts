type GraphicsType = {
    zoom: number;
    fps: number;
}

type AudioType = {
    general: boolean;
    chat: boolean;
    game: boolean;
    notif: boolean;
}

type InputsType = {
    up: string[],
    down: string[],
    left: string[],
    right: string[],
    kick: string[],
    toggle_chat: string[]
}

export default class SettingsManager {
    graphics: GraphicsType;
    audio: AudioType;
    inputs: InputsType;

    constructor() {
        this.graphics = {
            zoom: 1.25,
            fps: 0
        }
        this.audio = {
            general: true,
            chat: true,
            game: true,
            notif: true
        }
        this.inputs = {
            up: ["ArrowUp"],
            down: ["ArrowDown"],
            left: ["ArrowLeft"],
            right: ["ArrowRight"],
            kick: ["KeyX", "Space"],
            toggle_chat: ["Enter", "NumpadEnter", "Tab"],
        }
    }

    init(): void {
        const graphicsStorage = localStorage.getItem("settings_graphics");
        if(graphicsStorage != null && JSON.parse(graphicsStorage))
            this.graphics = JSON.parse(graphicsStorage);

        const audioStorage = localStorage.getItem("settings_audio");
        if(audioStorage != null && JSON.parse(audioStorage))
            this.audio = JSON.parse(audioStorage);

        const inputs = localStorage.getItem("settings_inputs");
        if(inputs != null && JSON.parse(inputs))
            this.inputs = JSON.parse(inputs);
    }

    saveSettings(type: string): void {
        switch(type) {
            case "graphics": {
                localStorage.setItem("settings_graphics", JSON.stringify(this.graphics));
                break;
            }

            case "audio": {
                localStorage.setItem("settings_audio", JSON.stringify(this.audio));
                break;
            }

            case "inputs": {
                localStorage.setItem("settings_inputs", JSON.stringify(this.inputs));
                break;
            }
        }
    }

    removeKey(type: string, value: string) {
        if((this.inputs as any)[type] == null || !(this.inputs as any)[type].includes(value))
            return;

        (this.inputs as any)[type] = (this.inputs as any)[type].filter(function(key: string) {
            return key != value;
        });

        this.saveSettings("inputs");
    }

    setSettings(type: string, value: string, val: any) {
        switch(type) {
            case "graphics": {
                if((this.graphics as any)[value] == null || val !instanceof Number)
                    return;

                (this.graphics as any)[value] = val;
                this.saveSettings(type);
                break;
            }

            case "audio": {
                if((this.audio as any)[value] == null || val !instanceof Boolean)
                    return;

                (this.audio as any)[value] = val;
                this.saveSettings(type);
                break;
            }

            case "inputs": {
                if((this.inputs as any)[value] == null || val !instanceof String)
                    return;

                let contains = (
                    this.inputs.up.includes(val) ||
                    this.inputs.down.includes(val) ||
                    this.inputs.left.includes(val) ||
                    this.inputs.right.includes(val) ||
                    this.inputs.kick.includes(val) ||
                    this.inputs.toggle_chat.includes(val)
                )

                if(contains || val.startsWith("Digit") || val == "KeyP")
                    return;
                
                (this.inputs as any)[value].push(val);
                this.saveSettings(type);
                break;
            }
        }
    }
}