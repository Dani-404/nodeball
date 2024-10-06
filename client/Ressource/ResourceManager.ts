import { Resources } from "../Config/Resources";
import { SceneList } from "../Scene/SceneList";
import Application from "../main";

type ResourcesType = {
    [key: string]: any
}

export default class ResourceManager {
    resources: ResourcesType;

    constructor() {
        this.resources = {};
    }

    async init(): Promise<string> {
        return new Promise((resolve, reject) => {
            Application.logger.sendLog("INFO", "Initiliazing resources...");
            Application.sceneManager.initScene(SceneList.MessageScene, {
                message: Application.languageManager.getValueForKey('LOADING_RESOURCES')
            });

            const listOfPromise = [];

            for(let i in Resources) {
                listOfPromise.push(this.loadResource(i, Resources[i]));
            }

            Promise.all(listOfPromise).then(() => {
                resolve("All resources have been loaded.");
            }).catch((e) => reject(e.toString()));
        })
    }

    loadResource(key: string, fileName: string): Promise<string> {
        const instance = this;

        return new Promise((resolve, reject) => {
            if(fileName.endsWith(".png") || fileName.endsWith(".jpg") || fileName.endsWith(".svg"))
            {
                const image = new Image();

                image.onload = function() {
                    instance.resources[`IMAGE_${key}`] = image;
                    resolve(`Image ${key} loaded.`)
                };

                image.onerror = function() {
                    reject(`Impossible to load image ${key}.`)
                };

                image.src = `assets/images/resources/${fileName}`;
            }
            else if(fileName.endsWith(".mp3") || fileName.endsWith(".wav")) {
                const audio = new Audio(`assets/audio/${fileName}`);

                audio.onloadeddata = function() {
                    instance.resources[`AUDIO_${key}`] = audio;
                    resolve(`Audio ${key} loaded.`)
                };

                audio.onerror = function() {
                    reject(`Impossible to load audio ${key}.`)
                };
            }
        })
    }
}