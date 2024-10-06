import Application from "../main";
import LanguageList from "./LanguageList";

interface NavigatorLanguage  {
    userLanguage?: string;
}

export default class LanguageManager {
    defaultLanguage: typeof LanguageList[keyof typeof LanguageList];
    activeLanguage: typeof LanguageList[keyof typeof LanguageList] | null;
    
    constructor() {
        this.defaultLanguage = LanguageList.EN;
        this.activeLanguage = null;
    }

    init(): void {
        Application.logger.sendLog("INFO", "Initiliazing languages...");

        const languageStored = localStorage.getItem("language");
        if(languageStored != null)
            return this.setLanguage(languageStored);

        const userLanguage = window.navigator.language || (window.navigator as NavigatorLanguage).userLanguage;
        if(userLanguage != null)
            this.setLanguage(userLanguage.substring(0,2));
        else
            this.activeLanguage = this.defaultLanguage;
    }

    setLanguage(code: string): void {
        const languageValue = this.getLanguageByCode(code);

        if(languageValue != null)
        {
            localStorage.setItem("language", code.toUpperCase());
            this.activeLanguage = languageValue;
        }
        else
            this.activeLanguage = this.defaultLanguage;
    }

    getLanguageByCode(code: string): typeof LanguageList[keyof typeof LanguageList] | null {
        for(let i in LanguageList) {
            if(code.toUpperCase() == i)
                return LanguageList[i as keyof typeof LanguageList];
        }

        return null;
    }

    getAvailableLanguages(): Array<string> {
        const availableLanguage: Array<string> = [];

        for(let i in LanguageList) {
            availableLanguage.push(i);
        }

        return availableLanguage;
    }

    getValueForKey(key: string, params: Array<any> = []): string | null {
        if(this.activeLanguage != null && this.activeLanguage[key] != null) {
            params.forEach((param, index) => {
                if(param != null && param.toString().startsWith("%TRAD_"))
                    params[index] = this.getValueForKey(param.replace("%TRAD_", "")) as string
            });

            return this.activeLanguage[key].supplant(params);
        }
        else {
            if(this.defaultLanguage[key] != null) {
                params.forEach((param, index) => {
                    if(param != null && param.toString().startsWith("%TRAD_"))
                        params[index] = this.getValueForKey(param.replace("%TRAD_", "")) as string
                });

                return this.defaultLanguage[key].supplant(params);
            }
        }

        return "Missing key: " + key;
    }
}