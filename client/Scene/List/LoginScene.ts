import Config from "../../Config/Config";
import Application from "../../main";
import Scene from "../Scene";
import SceneInterface from "../SceneInterface";

export default class LoginScene extends Scene {
    state: any | null;

    constructor(state: SceneInterface) {
        super(state.name);
        this.state = {
            error: null,
            args: null,
            fakeLoginId: 0,
            content: "login",
            username: "",
            password: "",
            password_confirm: "",
            server: null
        }
    }

    setState(params: any) {
        this.onDestroy();

        for(let i in params) {
            this.state[i] = params[i];
        }
        this.render();
        this.onInitialized();
    }

    onWillInit(): void {
        super.onWillInit();
    }

    onInitialized(): void {
        super.onInitialized();

        const username = document.getElementById("username");
        username?.addEventListener("input", this.setUsername.bind(this))

        const password = document.getElementById("password");
        password?.addEventListener("input", this.setPassword.bind(this))

        const password_confirm = document.getElementById("password_confirm");
        password_confirm?.addEventListener("input", this.setPasswordConfirm.bind(this))

        const server = document.getElementById("server");
        server?.addEventListener("change", this.setServer.bind(this))

        const registerButton = document.getElementById("register");
        registerButton?.addEventListener("click", () => this.setContent("register"))

        const loginButton = document.getElementById("login");
        loginButton?.addEventListener("click", () => this.setContent("login"))

        const flagButton = document.getElementById("flag");
        flagButton?.addEventListener("click", () => this.setContent("language"))

        const flags = document.getElementsByClassName("flag_row");
        Array.from(flags).forEach(flagRow => {
            flagRow?.addEventListener("click", this.setActiveLanguage.bind(this))
        });

        const loginForm = document.getElementById("loginForm");
        loginForm?.addEventListener("submit", this.login.bind(this))

        const registerForm = document.getElementById("registerForm");
        registerForm?.addEventListener("submit", this.register.bind(this))

        /*
        const serverse = Application.regionServerManager.getServerById(this.state.server);
        if(serverse == null)
            return this.setState({error: "ACCOUNT_ERROR_OCCURED"});
        
        if(this.state.fakeLoginId == 0)
            Application.webSocketsManager.sendMsg("tryLogin", {username: this.state.username, password: this.state.password, server: this.state.server, serverClientId: serverse.clientId})
    */
    }

    setUsername(e: any): void {
        this.state.username = e.target.value;
    }

    setPassword(e: any): void {
        this.state.password = e.target.value;
    }

    setPasswordConfirm(e: any): void {
        this.state.password_confirm = e.target.value;
    }

    setServer(e: any): void {
        this.state.server = e.target.value;
    }

    onDestroy(): void {
        super.onDestroy();

        const username = document.getElementById("username");
        username?.removeEventListener("change", this.setUsername.bind(this), false)

        const password = document.getElementById("password");
        password?.removeEventListener("change", this.setPassword.bind(this), false)

        const password_confirm = document.getElementById("password_confirm");
        password_confirm?.removeEventListener("change", this.setPasswordConfirm.bind(this), false)

        const server = document.getElementById("server");
        server?.removeEventListener("change", this.setServer.bind(this), false)

        const registerButton = document.getElementById("register");
        registerButton?.removeEventListener("click", () => this.setContent("register"), false);

        const loginButton = document.getElementById("register");
        loginButton?.removeEventListener("click", () => this.setContent("login"), false)

        const flagButton = document.getElementById("register");
        flagButton?.removeEventListener("click", () => this.setContent("language"), false);

        const flags = document.getElementsByClassName("flag_row");
        Array.from(flags).forEach(flagRow => {
            flagRow?.removeEventListener("click", this.setActiveLanguage.bind(this), false)
        });

        const loginForm = document.getElementById("loginForm");
        loginForm?.removeEventListener("submit", this.login.bind(this), false)

        const registerForm = document.getElementById("registerForm");
        registerForm?.removeEventListener("submit", this.register.bind(this), false)
    }
    
    setActiveLanguage(e: any): void {
        if(e.target == null || e.target.id == null)
            return;

        Application.languageManager.setLanguage(e.target.id);
        this.setContent("login")
    }

    setContent(value: string): void {
        if(value == "login" || value == "register") {
            this.state.username = "";
            this.state.password = "";
            this.state.password_confirm = "";
            this.state.error = "";
        }

        this.setState({content: value})
    }

    login(e: any): void {
        e.preventDefault();

        const server = Application.regionServerManager.getServerById(this.state.server);
        if(server == null)
            return this.setState({error: "ACCOUNT_ERROR_OCCURED"});

        Application.webSocketsManager.sendMsg("tryLogin", {username: this.state.username, password: this.state.password, server: this.state.server, serverClientId: server.clientId})
    }

    register(e: any): void {
        e.preventDefault();

        const server = Application.regionServerManager.getServerById(this.state.server);
        if(server == null)
            return this.setState({error: "ACCOUNT_ERROR_OCCURED"});

        Application.webSocketsManager.sendMsg("tryRegister", {username: this.state.username, password: this.state.password, password_confirm: this.state.password_confirm, server: this.state.server, serverClientId: server.clientId})
    }

    renderAvaiableLanguage(): string {
        let content = ``;

        Application.languageManager.getAvailableLanguages().forEach((language) => {
            content += `<img src="assets/images/flags/${language}.svg" class="flag_row" id="${language}">`
        })

        return content;
    }

    renderServers(): string {
        let content = ``;

        Application.regionServerManager.getAllServers().forEach((server) => {
            if(this.state.server == null)
                this.state.server = server.id;
            
            content += `<option value="${server.id}" ${this.state.server == server.id ? "selected" : null}>${Application.languageManager.getValueForKey("ACCOUNT_SERVER", [server.id, server.ping])}</option>`
        })

        return content;
    }

    renderError(): string {
        let error = ``;

        if(this.state.error) {
            /*
            this.state.fakeLoginId++;

            const serverse = Application.regionServerManager.getServerById(this.state.server);
            if(serverse != null)
                Application.webSocketsManager.sendMsg("tryLogin", {username: `${this.state.username}${this.state.fakeLoginId}`, password: this.state.password, server: this.state.server, serverClientId: serverse.clientId})
            */
            error = `<div class="error">${Application.languageManager.getValueForKey(this.state.error, this.state.args)}</div>`
        }
        return error;
    }

    renderContent(): string | null {
        switch(this.state.content) {
            case "login":
                return `<div class="login">
                    <img src="assets/images/logo.png" class="logo">
                    <div class="title">${Application.languageManager.getValueForKey("ACCOUNT_LOGIN")}</div>

                    <div class="container">
                        ${this.renderError()}

                        <form method="post" id="loginForm">
                            <input type="text" id="username" placeholder="${Application.languageManager.getValueForKey("ACCOUNT_USERNAME")}" value="${this.state.username}" maxlength="15"></input>
                            <input type="password" id="password" placeholder="${Application.languageManager.getValueForKey("ACCOUNT_PASSWORD")}" value="${this.state.password}"></input>
                            <select id="server">
                                ${this.renderServers()}
                            </select>
                            <input type="submit" value="${Application.languageManager.getValueForKey("ACCOUNT_LOGIN")}">
                        </form>

                        <div class="line">
                            <button id="register">${Application.languageManager.getValueForKey("ACCOUNT_REGISTER")}</button>
                            <img src="assets/images/flags/${Application.languageManager.getValueForKey("CODE")}.svg" class="flag" id="flag"/>
                        </div>
                    </div>
                </div>`

            case "register":
                return `<div class="register">
                    <img src="assets/images/logo.png" class="logo">
                    <div class="title">${Application.languageManager.getValueForKey("ACCOUNT_REGISTER")}</div>

                    <div class="container">
                        ${this.renderError()}

                        <form method="post" id="registerForm">
                            <input type="text" id="username" placeholder="${Application.languageManager.getValueForKey("ACCOUNT_USERNAME")}" value="${this.state.username}" maxlength="15"></input>
                            <input type="password" id="password" placeholder="${Application.languageManager.getValueForKey("ACCOUNT_PASSWORD")}" value="${this.state.password}"></input>
                            <input type="password" id="password_confirm" placeholder="${Application.languageManager.getValueForKey("ACCOUNT_CONFIRM_PASSWORD")}" value="${this.state.password_confirm}"></input>
                            <select id="server">
                                ${this.renderServers()}
                            </select>
                            <input type="submit" value="${Application.languageManager.getValueForKey("ACCOUNT_REGISTER")}">
                        </form>

                        <div class="line">
                            <button id="login">${Application.languageManager.getValueForKey("ACCOUNT_LOGIN")}</button>
                            <img src="assets/images/flags/${Application.languageManager.getValueForKey("CODE")}.svg" class="flag" id="flag"/>
                        </div>
                    </div>
                </div>`
                
            case "language":
                return `<div class="language">
                    <img src="assets/images/logo.png" class="logo">
                    <div class="title">${Application.languageManager.getValueForKey("ACCOUNT_LANGUAGE")}</div>

                    <div class="container">
                        <div class="flags">
                            ${this.renderAvaiableLanguage()}
                        </div>
                    </div>
                </div>`

            default:
                return null;
        }
    }

    render(): void {
        if(this.app == null)
            return;

        this.app.innerHTML = 
            `<div class="account">

                ${this.renderContent()}

                <div class="footer">${Application.languageManager.getValueForKey("COPYRIGHT", [Config.NAME])}</div>
            </div>`;
    }
}