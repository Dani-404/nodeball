import { Base } from "../../../shared/Base/Base";
import Color from "../../../shared/Color/Color";
import { getElo } from "../../../shared/Elo/Elo";
import { getLevel } from "../../../shared/Level/Level";
import RoomPlayer from "../../../shared/RoomPlayer/RoomPlayer";
import { RoomState } from "../../../shared/RoomState/RoomState";
import Score from "../../../shared/Score/Score";
import Team from "../../../shared/Team/Team";
import Config from "../../Config/Config";
import Room from "../../Room/Room";
import User from "../../User/User";
import Application from "../../main";
import Scene from "../Scene";
import SceneInterface from "../SceneInterface";

export default class GameScene extends Scene {
    state: any | null;

    constructor(state: SceneInterface) {
        super(state.name);

        this.state = {
            currentUser: state.params.currentUser,
            canvas: null,
            ctx: null,
            zIndex: 0,
            fps: 0,
            canvas_rect: [-150, -75, 150, 75],
            cameraFollow: {x: 0, y: 0},
            unpauseInterval: 0,
            inputs: {
                left: false,
                right: false,
                up: false,
                down: false,
                kick: false
            },
            lastChangeFps: null,
            settings_category: "graphics",
            settings_record_input: null,
            focusUser: null
        }
    }

    setFps(val: number) {
        const fps = document.getElementById("fps");
        if(fps == null)
            return;

        const now = window.performance.now();
        this.state.fps = val;
        
        if(this.state.lastChangeFps != null && this.state.lastChangeFps + 1000 > now)
            return

        this.state.lastChangeFps = now;
        fps.textContent = val.toString();
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
    }

    onInitialized(): void {
        super.onInitialized();

        this.state.canvas = document.getElementById("game");
        this.state.ctx = this.state.canvas.getContext("2d");

        Array.from(document.querySelectorAll('#settings .menu li')).forEach((element) => {
            element.addEventListener("click", this.setSettingsCategory.bind(this));
        });

        Array.from(document.querySelectorAll('#admin_menu li')).forEach((element) => {
            element.addEventListener("click", this.setAdminCategory.bind(this));
        });

        Array.from(document.querySelectorAll('#settings input, #settings select')).forEach((element) => {
            element.addEventListener("change", this.setSettings.bind(this));
        });

        const leaderboardFilter = document.getElementById("leaderboardFilter");

        if(leaderboardFilter != null)
            leaderboardFilter.addEventListener("change", this.requestLeaderboard.bind(this));

        const requestProfile = document.getElementById("request_profile");
        if(requestProfile != null)
            requestProfile.addEventListener("click", this.switchProfile.bind(this));

        Array.from(document.getElementsByClassName("general_menu")).forEach((el) => {
            Array.from(el.getElementsByTagName("div")).forEach((element) => {
                element.addEventListener("click", this.switchMenu.bind(this));
            });
        })

        Array.from(document.getElementsByClassName("pick_list_team")).forEach((el) => {
            el.addEventListener("dragover", (e) => e.preventDefault());
            el.addEventListener("drop", this.drop.bind(this));
        });

        const user_menu = document.getElementById("user_menu");
        if(user_menu != null) {
            const li = user_menu.getElementsByTagName("li");
            Array.from(li).forEach((element) => {
                element.addEventListener("click", this.userMenuItem.bind(this));
            })
        }

        Array.from(document.getElementsByClassName("close")).forEach((el) => {
            el.addEventListener("click", () => {
                if(el.parentNode != null && el.parentNode.parentNode != null && el.parentNode.parentNode.parentElement != null)
                    (el.parentNode.parentNode.parentNode as HTMLElement).style.display = "none";
            })
        })

        document.addEventListener('keydown', this.keyDownHandler.bind(this), false);
        document.addEventListener('keyup', this.KeyUpHandler.bind(this), false);

        const chatForm = document.getElementById("chatForm");
        chatForm?.addEventListener("submit", this.sendChat.bind(this));

        this.renderMenu();
    }

    renderMenu(): void {
        Array.from(document.getElementsByClassName("general_menu")).forEach((el) => {
            Array.from(el.getElementsByTagName("div")).forEach((element) => {
                if(element.getAttribute("type") == "admin" && ["user", "vip"].includes((Application.currentUser as User).rank))
                    element.style.display = "none";
                else
                    element.style.display = "block";
            });
        })
    }

    profileData(data: any): void {
        const profile = document.getElementById("profile");
        if(profile == null)
            return;

        Array.from(profile.querySelectorAll("img, span")).forEach((el) => {
            const profile_data = el.getAttribute("profile_data");
            if(profile_data == null)
                return;

            if(profile_data == "username")
            {
                el.removeAttribute("class");
                el.classList.add(data.rank);
            }

            if(profile_data == "avatar")
                el.setAttribute("src", Application.resourceManager.resources["IMAGE_AVATAR_" + data.avatar].src);

            if(profile_data == "online")
            {                
                if(data.online)
                    el.classList.add("online");
                else
                    el.classList.remove("online");
                    
            } else if(data[profile_data] != null)
                el.textContent = data[profile_data];
            else if(data.stats[profile_data] != null)
            {
                if(profile_data == "elo")
                    el.textContent = `${Application.languageManager.getValueForKey(getElo(data.stats.elo).name)} ${getElo(data.stats.elo).value} (${data.stats.elo})`;
                else if(profile_data == "level_xp") {
                    el.textContent = getLevel(data.stats.level_xp).toString();
                }
                else {
                    el.textContent = data.stats[profile_data];
                    ["win_rate", "pass_accuracy", "cs_percentage"].includes(profile_data) ? el.textContent += "%" : null
                }
            }
        })

        this.state.zIndex++;
        profile.style.zIndex = this.state.zIndex;
        profile.style.display = "block";
    }

    switchMenu(e: any): void {
        this.state.zIndex++;

        switch(e.srcElement.getAttribute("type")) {
            case "shop": {
                this.switchShop();
                break;
            }

            case "friends": {
                this.switchFriends();
                break;
            }

            case "settings": {
                this.switchSettings();
                break;
            }

            case "menu": {
                this.switcMenu();
                break;
            }

            case "leaderboard": {
                this.switchLeaderboard();
                break;
            }

            case "admin": {
                this.switchAdmin();
                break;
            }

            case "team": {
                this.newChat({type: "announcement", message: "GAME_GENERAL_NOT_AVAILABLE", color: Color.ROOM_ANNOUNCEMENT, sound: 1, officialTrad: true});
                break;
            }
        }
    }

    setSettings(e: any) {
        if(e.srcElement.checked != null)
            return Application.settingsManager.setSettings(e.srcElement.getAttribute("settings_category"), e.srcElement.getAttribute("settings_val"), e.srcElement.checked);
        
        Application.settingsManager.setSettings(e.srcElement.getAttribute("settings_category"), e.srcElement.getAttribute("settings_val"), e.srcElement.value);
    }

    setSettingsCategory(e: any): void {
        this.state.settings_category = e.srcElement.getAttribute("category");

        Array.from(document.querySelectorAll('#settings .menu li')).forEach((element) => {
            if(element.getAttribute("category") == this.state.settings_category && !element.classList.contains("selected"))
                element.classList.add("selected");
            else
                element.classList.remove("selected")
        });

        this.reloadSettings();
    }

    removeKey(type: string, key: string): void {
        Application.settingsManager.removeKey(type, key);
        this.reloadSettings();
    }

    addHistory(data: any): void {
        const history = document.getElementById("history");
        if(history == null)
            return;

        const div = document.createElement("div");
        div.classList.add("row");

        const icon = document.createElement("img");
        div.appendChild(icon);

        const info = document.createElement("div");

        const time = document.createElement("span");
        time.classList.add("time");
        time.textContent =this.fmtMSS(Math.floor(data.value.time))
        info.appendChild(time);

        const message = document.createElement("div");
        info.appendChild(message);

        div.appendChild(info);

        switch(data.key) {
            case "matchStarted": {
                history.innerHTML = "";
                icon.src = "assets/images/icons/whistle.png";
                message.textContent = Application.languageManager.getValueForKey("HISTORY_MATCH_STARTED");
                break;
            }

            case "shot": {
                icon.src = "assets/images/icons/shot.png";
                message.innerHTML = Application.languageManager.getValueForKey("HISTORY_SHOT", [data.value.team.name, data.value.username]) as string;
                break;
            }

            case "save": {
                icon.src = "assets/images/icons/save.png";
                message.innerHTML = Application.languageManager.getValueForKey("HISTORY_SAVE", [data.value.team.name, data.value.username]) as string;
                break;
            }

            case "goal": {
                icon.src = "assets/images/icons/ball.png";

                const notif = document.getElementById("notif");
                if(notif != null) {
                    if(data.value.team.id != data.value.score_team.id)
                        notif.innerHTML = `${Application.languageManager.getValueForKey("GAME_GENERAL_OWN_GOAL", [data.value.team.name, data.value.username])}`;
                    else
                        notif.innerHTML = `${Application.languageManager.getValueForKey("GAME_GENERAL_GOAL", [data.value.team.name, data.value.username])}`;
                }

                if(data.value.team.id != data.value.score_team.id)
                    message.innerHTML = Application.languageManager.getValueForKey("HISTORY_OWN_GOAL", [data.value.team.name, data.value.username]) as string;
                else if(data.value.assist_id != null)
                    message.innerHTML = Application.languageManager.getValueForKey("HISTORY_GOAL_ASSISTED", [data.value.team.name, data.value.username, data.value.assist_username]) as string;
                else
                    message.innerHTML = Application.languageManager.getValueForKey("HISTORY_GOAL", [data.value.team.name, data.value.username]) as string;
                break;
            }

            case "endGame": {
                icon.src = "assets/images/icons/whistle.png";
                if(data.value.score.red > data.value.score.blue)
                    message.innerHTML = Application.languageManager.getValueForKey("HISTORY_END_RED", [data.value.score.red, data.value.score.blue, data.value.possession.red, data.value.possession.blue]) as string;
                else
                    message.innerHTML = Application.languageManager.getValueForKey("HISTORY_END_BLUE", [data.value.score.red, data.value.score.blue, data.value.possession.red, data.value.possession.blue]) as string;
                break;
            }
        }

        history.prepend(div);
    }

    recordKey(type: string): void {
        const recordKey = document.getElementById("recordKey");
        if(recordKey == null)
            return;

        this.state.settings_record_input = type;
        this.state.inputs.up = false;
        this.state.inputs.down = false;
        this.state.inputs.left = false;
        this.state.inputs.right = false;
        this.state.inputs.kick = false;
        recordKey.style.display = "flex";
    }

    reloadSettings(): void {
        const settings = document.getElementById("settings"),
            recordKey = document.getElementById("recordKey");

        if(settings == null)
            return;

        if(recordKey != null)
            recordKey.style.display = "none";

        Array.from(settings.getElementsByClassName("category")).forEach((category) => {
            const category_name = category.getAttribute("category_name");
            if(category_name != null) {
                if(category_name == this.state.settings_category)
                    (category as HTMLElement).style.display = "block";
                else
                    (category as HTMLElement).style.display = "none";
            }

            Array.from(category.querySelectorAll("input, select, .inputs_value")).forEach((element: any) => {
                const settings_category = element.getAttribute("settings_category"),
                    settings_val = element.getAttribute("settings_val");

                if(settings_category != null && settings_val != null) {
                    switch(settings_category) {
                        case "graphics": {
                            if((Application.settingsManager.graphics as any)[settings_val] != null) {
                                if(element.checked != null)
                                    element.checked = (Application.settingsManager.graphics as any)[settings_val];
                                else
                                    element.value = (Application.settingsManager.graphics as any)[settings_val];
                            }
                            break;
                        }

                        case "audio": {
                            if((Application.settingsManager.audio as any)[settings_val] != null) {
                                if(element.checked != null)
                                    element.checked = (Application.settingsManager.audio as any)[settings_val];
                                else
                                    element.value = (Application.settingsManager.audio as any)[settings_val];
                            }
                            break;
                        }

                        case "inputs": {
                            element.innerHTML = "";
                            if((Application.settingsManager.inputs as any)[settings_val] == null)
                                return;
                            
                            (Application.settingsManager.inputs as any)[settings_val].forEach((key: any) => {
                                const inputElement = document.createElement("div");
                                inputElement.classList.add("gameInput");
                                inputElement.textContent = key.toString().replace("Key", "");
                                    
                                const deleteInput = document.createElement("img");
                                deleteInput.src = "assets/images/icons/cross.svg";
                                deleteInput.addEventListener("click", () => this.removeKey(settings_val, key));
                                inputElement.appendChild(deleteInput);
                                element.appendChild(inputElement);
                            })

                            const inputElement = document.createElement("div");
                            inputElement.classList.add("gameInput");
                                    
                            const addInput = document.createElement("img");
                            addInput.classList.add("add");
                            addInput.src = "assets/images/icons/add.svg";
                            addInput.addEventListener("click", () => this.recordKey(settings_val));
                            inputElement.appendChild(addInput);
                            element.appendChild(inputElement);
                            break;
                        }
                    }
                }
            });
        })
    }

    switchProfile(): void {
        if(Application.currentUser == null)
            return;

        const profile = document.getElementById("profile");
        if(profile == null)
            return;

        if(profile.style.display == "block")
        {
            profile.style.display = "none";
            return;
        }

        Application.webSocketsManager.sendMsg("requestProfile", (Application.currentUser as User).username)
    }

    requestLeaderboard(e: any): void {
        this.fetchLeaderboard(e.srcElement.value);
    }

    fetchLeaderboard(key: string) {
        const leaderboardContent = document.getElementById("leaderboardContent");
        if(leaderboardContent == null)
            return;

        leaderboardContent.innerHTML = `<div class="loader"></div>`;
        Application.webSocketsManager.sendMsg("fetchLeaderboard", key)
    }

    setLeaderboardData(data: any): void {
        const leaderboardContent = document.getElementById("leaderboardContent");
        if(leaderboardContent == null)
            return;

        leaderboardContent.innerHTML = ``;

        data.players.forEach((player: any, index: number) => {
            const div = document.createElement("div");
            div.classList.add("row");

            const avatar = document.createElement("img");
            avatar.src = Application.resourceManager.resources["IMAGE_AVATAR_" + player.avatar].src;
            div.appendChild(avatar);

            const username = document.createElement("div");
            username.classList.add("username");
            username.textContent = player.username;
            div.appendChild(username);

            const rank = document.createElement("div");
            rank.classList.add("rank");
            rank.textContent = "#" + (index + 1).toString();
            div.appendChild(rank);

            const value = document.createElement("div");
            value.classList.add("value");
            if(["win_rate", "pass_accuracy", "cs_percentage"].includes(data.key))
                value.textContent = player.value + "%"
            else if(data.key == "level_xp")
                value.textContent = getLevel(player.value).toString();
            else if(data.key == "elo")
                value.textContent = `${Application.languageManager.getValueForKey(getElo(player.value).name)} ${getElo(player.value).value} (${player.value})`;
            else
                value.textContent = player.value;

            div.appendChild(value);

            leaderboardContent.appendChild(div);
        })
    }

    hideMenu(): void {
        if(((Application.currentUser as User).currentRoom as Room).state != RoomState.KICK_OFF_RESET) {
            setTimeout(this.hideMenu.bind(this), 10);
            return;
        }

        const pick_list = document.getElementById("pick_list");
        if(pick_list == null)
            return;

        if(pick_list.style.display == "none")
            return;

        pick_list.style.display = "none";
    }

    showMenu(): void {
        const pick_list = document.getElementById("pick_list");
        if(pick_list == null)
            return;

        if(pick_list.style.display == "block")
            return;

        pick_list.style.display = "block";
    }

    switcMenu(): void {
        const pick_list = document.getElementById("pick_list");
        if(((Application.currentUser as User).currentRoom as Room).state == RoomState.GAME_ENDED || pick_list == null)
            return;

        if(pick_list.style.display == "block")
        {
            pick_list.style.display = "none";
            return;
        }

        pick_list.style.zIndex = this.state.zIndex;
        pick_list.style.display = "block";
    }

    renderAdmin(data: any): void {
        const adminContent = document.getElementById("admin_content");

        if(adminContent == null)
            return;

        switch(data.category) {
            case "team": {
                adminContent.innerHTML = "";

                data.team.forEach((user: any) => {
                    const element = document.createElement("div");
                    element.classList.add("row");

                    const avatar = document.createElement("img");
                    avatar.src = Application.resourceManager.resources["IMAGE_AVATAR_" + user.avatar].src
                    avatar.classList.add("avatar");
                    element.appendChild(avatar);

                    const username = document.createElement("div");
                    username.classList.add("username");
                    username.textContent = user.username;
                    element.appendChild(username);

                    const rank = document.createElement("div");
                    rank.classList.add("value");
                    rank.classList.add(user.rank);
                    rank.textContent = Application.languageManager.getValueForKey(`GAME_RANK_${user.rank.toUpperCase()}`) as string;
                    element.appendChild(rank);

                    adminContent.appendChild(element);
                })
                break;
            }

            case "reports": {
                adminContent.innerHTML = `<div class="row info"><div style="width: 30%">${Application.languageManager.getValueForKey("GAME_GENERAL_PLAYER")}</div><div style="width: 30%"">${Application.languageManager.getValueForKey("GAME_GENERAL_BY_PLAYER")}</div><div style="width: 30%">${Application.languageManager.getValueForKey("GAME_GENERAL_DATE")}</div><div class="value">${Application.languageManager.getValueForKey("GAME_GENERAL_ACTION")}</div></div>`;

                data.reports.forEach((report: any) => {
                    const element = document.createElement("div");
                    element.classList.add("row");

                    const username = document.createElement("div");
                    username.style.width = "30%";
                    username.textContent = report.username;
                    element.appendChild(username);

                    const reported_username = document.createElement("div");
                    reported_username.style.width = "30%";
                    reported_username.textContent = report.reported_username;
                    element.appendChild(reported_username);

                    const date = document.createElement("div");
                    date.style.width = "30%";
                    date.textContent = report.date;
                    element.appendChild(date);

                    const action = document.createElement("div");
                    action.classList.add("value");

                    const chatLog = document.createElement("img");
                    chatLog.classList.add("icon");
                    chatLog.src = "assets/images/icons/chat.svg";
                    action.appendChild(chatLog);

                    chatLog.addEventListener("click", () => {
                        this.fetchAdminCategory("chatlogs", report.reported_username);
                    })

                    const deleteCross = document.createElement("img");
                    deleteCross.classList.add("icon");
                    deleteCross.src = "assets/images/icons/cross.svg";
                    action.appendChild(deleteCross);

                    deleteCross.addEventListener("click", () => {
                        Application.webSocketsManager.sendMsg("deleteReport", report.id);
                    })

                    element.appendChild(action);

                    adminContent.appendChild(element);
                })
                break;
            }

            case "sanctions": {
                adminContent.innerHTML = `<div class="row info"><div style="width: 25%">${Application.languageManager.getValueForKey("GAME_GENERAL_PLAYER")}</div><div style="width: 25%"">${Application.languageManager.getValueForKey("GAME_GENERAL_BY_PLAYER")}</div><div style="width: 10%">${Application.languageManager.getValueForKey("GAME_GENERAL_TYPE")}</div><div style="width: 30%">${Application.languageManager.getValueForKey("GAME_GENERAL_EXPIRE")}</div><div class="value">${Application.languageManager.getValueForKey("GAME_GENERAL_ACTION")}</div></div>`;

                data.sanctions.forEach((sanction: any) => {
                    const element = document.createElement("div");
                    element.classList.add("row");

                    const username = document.createElement("div");
                    username.style.width = "25%";
                    username.textContent = sanction.username;
                    element.appendChild(username);

                    const by_username = document.createElement("div");
                    by_username.style.width = "25%";
                    by_username.textContent = sanction.by_player;
                    element.appendChild(by_username);

                    const type = document.createElement("div");
                    type.style.width = "10%";
                    type.textContent = Application.languageManager.getValueForKey(`GAME_ADMIN_SANCTION_${sanction.type.toUpperCase()}`);
                    element.appendChild(type);

                    const date = document.createElement("div");
                    date.style.width = "30%";
                    date.textContent = sanction.end_date;
                    element.appendChild(date);

                    const action = document.createElement("div");
                    action.classList.add("value");

                    const chatLog = document.createElement("img");
                    chatLog.classList.add("icon");
                    chatLog.src = "assets/images/icons/chat.svg";
                    action.appendChild(chatLog);

                    chatLog.addEventListener("click", () => {
                        this.fetchAdminCategory("chatlogs", sanction.username);
                    })

                    const deleteCross = document.createElement("img");
                    deleteCross.classList.add("icon");
                    deleteCross.src = "assets/images/icons/cross.svg";
                    action.appendChild(deleteCross);

                    deleteCross.addEventListener("click", () => {
                        Application.webSocketsManager.sendMsg("deleteSanction", sanction.id);
                    })

                    element.appendChild(action);

                    adminContent.appendChild(element);
                })
                break;
            }

            case "chatlogs": {
                adminContent.innerHTML = ``;

                data.logs.forEach((log: string) => {
                    const element = document.createElement("div");
                    element.classList.add("row");

                    const message = document.createElement("div");
                    message.textContent = log;
                    element.appendChild(message);

                    adminContent.appendChild(element);
                })
                break;
            }
        }
    }

    renderAdminAlert(data: any): void {
        const admin_alert = document.getElementById("admin_alert");
        if(admin_alert == null)
            return;

        if(data.error)
            admin_alert.classList.add("error");
        else 
            admin_alert.classList.remove("error");

        admin_alert.textContent = Application.languageManager.getValueForKey(data.message, data.args) as string;
        admin_alert.style.display = "block";
    }

    setRank(e: any): void {
        e.preventDefault();

        const username = document.getElementById("rankUsername") as HTMLInputElement,
            rank = document.getElementById("rankValue") as HTMLSelectElement;

        Application.webSocketsManager.sendMsg("adminRank", {username: username.value, rank: rank.value});
    }

    newSanction(e: any): void {
        e.preventDefault();

        const username = document.getElementById("sanctionUsername") as HTMLInputElement,
            type = document.getElementById("sanctionType") as HTMLSelectElement,
            time = document.getElementById("sanctionTime") as HTMLInputElement,
            reason = document.getElementById("sanctionReason") as HTMLInputElement;

        Application.webSocketsManager.sendMsg("adminSanction", {username: username.value, type: type.value, time: time.value, reason: reason.value});
    }

    fetchAdminCategory(type: string, args: any) {
        const adminTitle = document.getElementById("admin_title"),
            adminContent = document.getElementById("admin_content");

        if(adminTitle == null || adminContent == null)
            return;

        adminTitle.innerText = Application.languageManager.getValueForKey(`GAME_ADMIN_${type.toUpperCase()}`) as string;
        adminContent.innerHTML = `<div class="loader"></div>`;

        switch(type) {
            case "team": {
                Application.webSocketsManager.sendMsg("fetchAdmin", {key: "team"});
                break;
            }

            case "reports": {
                Application.webSocketsManager.sendMsg("fetchAdmin", {key: "reports"});
                break;
            }

            case "chatlogs": {
                Application.webSocketsManager.sendMsg("fetchAdmin", {key: "chatlogs", username: args});
                break;
            }

            case "sanctions": {
                Application.webSocketsManager.sendMsg("fetchAdmin", {key: "sanctions"});
                break;
            }

            case "new_sanction": {
                adminContent.innerHTML = `<div id="admin_alert"></div><form id="adminSanctionForm"><input type="text" id="sanctionUsername" placeholder="${Application.languageManager.getValueForKey("ACCOUNT_USERNAME")}"/><select id="sanctionType"><option value="mute">${Application.languageManager.getValueForKey("GAME_ADMIN_SANCTION_MUTE")}</option><option value="ban">${Application.languageManager.getValueForKey("GAME_ADMIN_SANCTION_BAN")}</option></select><input type="text" id="sanctionTime" placeholder="${Application.languageManager.getValueForKey("GAME_ADMIN_SANCTION_TIME")}"/><input type="text" id="sanctionReason" placeholder="${Application.languageManager.getValueForKey("GAME_ADMIN_SANCTION_REASON")}" maxlength="150"/><input type="submit" value="${Application.languageManager.getValueForKey("GAME_GENERAL_VALIDATE")}"></form>`;

                if(args != null && args.username != null)
                {
                    const usernameInput = document.getElementById("sanctionUsername") as HTMLInputElement;
                    if(usernameInput != null)
                        usernameInput.value = args.username;
                }

                if(args != null && args.type != null)
                {
                    const typeSelect = document.getElementById("sanctionType") as HTMLSelectElement;
                    if(typeSelect != null)
                        typeSelect.value = args.type;
                }

                const form = document.getElementById("adminSanctionForm");
                if(form != null)
                    form.addEventListener("submit", this.newSanction);

                break;
            }

            case "rank": {
                adminContent.innerHTML = `<div id="admin_alert"></div><form id="adminRankForm"><input type="text" id="rankUsername" placeholder="${Application.languageManager.getValueForKey("ACCOUNT_USERNAME")}"/><select id="rankValue"></select><input type="submit" value="${Application.languageManager.getValueForKey("GAME_GENERAL_VALIDATE")}"></form>`;

                const rankValue = document.getElementById("rankValue");
                ["owner", "manager", "admin", "mod", "vip", "user"].forEach((rank) => {
                    const option = document.createElement("option");
                    option.value = rank;
                    option.textContent = Application.languageManager.getValueForKey(`GAME_RANK_${rank.toUpperCase()}`) as string;
                    rankValue?.appendChild(option);
                });

                const form = document.getElementById("adminRankForm");
                if(form != null)
                    form.addEventListener("submit", this.setRank);
                break;
            }
        }
    }

    setAdminCategory(e: any): void {
        this.switchAdmin(e.srcElement.getAttribute("type"));
    }

    switchAdmin(type: string | null = null, args: any = null): void {
        if(Application.currentUser == null || ["user", "vip"].includes(Application.currentUser.rank))
            return;

        const admin = document.getElementById("admin"),
            admin_menu = document.getElementById("admin_menu");

        if(admin == null || admin_menu == null)
            return;

        if(!type && admin.style.display == "block")
        {
            admin.style.display = "none";
            return;
        }
        
        if(type == null)
            type = "team";
        
        Array.from(admin_menu.getElementsByTagName("li")).forEach((el) => {
            if(el.getAttribute("type") == "rank" && !["owner", "manager"].includes((Application.currentUser as User).rank))
                el.style.display = "none";

            if(el.getAttribute("type") == type)
                el.classList.add("active");
            else
                el.classList.remove("active");
        });

        this.fetchAdminCategory(type, args);
        admin.style.zIndex = this.state.zIndex;
        admin.style.display = "block";
    }

    switchLeaderboard(): void {
        if(Application.currentUser == null)
            return;

        const leaderboard = document.getElementById("leaderboard"),
            leaderboardFilter = document.getElementById("leaderboardFilter") as HTMLSelectElement

        if(leaderboard == null || leaderboardFilter == null)
            return;

        if(leaderboard.style.display == "block")
        {
            leaderboard.style.display = "none";
            return;
        }

        if(leaderboardFilter.value.length == 0)
        {
            const availablesStats = ["elo", "level_xp", "games_played", "games_won", "games_lost", "win_rate", "best_streak", "shots", "shots_per_match", "goals", "goals_per_match", "hat_tricks", "assists", "assists_per_match", "saves", "saves_per_match", "pass_accuracy", "pass_per_match", "played_gk", "cs", "cs_percentage"];
            availablesStats.forEach((stat) => {
                const option = document.createElement("option");
                option.value = stat;
                option.textContent = Application.languageManager.getValueForKey(`GAME_STATS_${stat.toUpperCase()}`);
                leaderboardFilter.appendChild(option);
            })

            this.fetchLeaderboard(availablesStats[0]);
        }
        else
            this.fetchLeaderboard(leaderboardFilter.value);

        leaderboard.style.zIndex = this.state.zIndex;
        leaderboard.style.display = "block";
    }

    switchSettings(): void {
        if(Application.currentUser == null)
            return;

        const settings = document.getElementById("settings");

        if(settings == null)
            return;

        if(settings.style.display == "block")
        {
            settings.style.display = "none";
            return;
        }

        this.reloadSettings();
        settings.style.zIndex = this.state.zIndex;
        settings.style.display = "block";
    }

    reloadFriends(): void {
        const friendsList = document.getElementById("friendsList");
        if(Application.currentUser == null || Application.currentUser.friends == null || friendsList == null)
            return;

        friendsList.innerHTML = "";
        
        let count = 0;
        Application.currentUser.friends.forEach((friend) => {
            count++;

            const div = document.createElement("div");
            div.classList.add("row");

            if(friend.online)
                div.classList.add("online");

            const user = document.createElement("div");
            user.classList.add("user");
            user.innerText = friend.username;

            if(friend.serverRegion != null)
            {
                const image = document.createElement("img");
                image.src = `assets/images/flags/region/${this.getRegionFlag(friend.serverRegion.region)}.svg`;
                user.prepend(image);
            }

            div.appendChild(user);

            const action = document.createElement("div");
            action.classList.add("action");

            if(friend.online) {
                const whisper = document.createElement("img");
                whisper.src = "assets/images/icons/chat.svg";
                whisper.addEventListener("click", () => this.whisper(friend.username));
                action.appendChild(whisper);
            }

            if(friend.serverRegion != null && friend.serverRegion.region == Application.currentUser?.currentServer && friend.serverRegion.currentRoom != null)
            {
                const join = document.createElement("img");
                join.setAttribute("room", friend.serverRegion.currentRoom);
                join.src = "assets/images/icons/chev_right.svg";
                action.appendChild(join);
            }

            const deleteFriend = document.createElement("img");
            deleteFriend.src = "assets/images/icons/cross.svg";
            deleteFriend.addEventListener("click", () => Application.webSocketsManager.sendMsg("deleteFriend", friend.id));
            action.appendChild(deleteFriend);
            div.appendChild(action);

            friendsList.appendChild(div);
        });

        if(count == 0)
            friendsList.innerText = Application.languageManager.getValueForKey("GAME_FRIENDS_NONE") as string
    }

    switchFriends(): void {
        if(Application.currentUser == null)
            return;

        const friends = document.getElementById("friends");

        if(friends == null)
            return;

        if(friends.style.display == "block")
        {
            friends.style.display = "none";
            return;
        }

        this.reloadFriends();
        friends.style.zIndex = this.state.zIndex;
        friends.style.display = "block";
    }

    switchShop(): void {
        const shop = document.getElementById("shop");
        if(shop == null)
            return;

        if(shop.style.display == "block")
        {
            shop.style.display = "none";
            return;
        }

        shop.style.zIndex = this.state.zIndex;
        Application.webSocketsManager.sendMsg("fetchShop");
    }

    fetchItemForCategory(e: any): void {
        Application.webSocketsManager.sendMsg("fetchItems", e.srcElement.value);

        const shopItems = document.getElementById("shopItems");
        if(shopItems == null)
            return;
        
        shopItems.innerHTML = ""
    }

    shopData(shopData: any): void {
        const shop = document.getElementById("shop"),
            shopCoinVal = document.getElementById("shopCoinVal"),
            shopCategorys = document.getElementById("shopCategorys");

        if(shop == null || shopCoinVal == null || shopCategorys == null)
            return;

        if(Application.currentUser != null)
            shopCoinVal.textContent = Application.currentUser.coins.toString();

        shopCategorys.innerHTML = "";

        shopData.categorys.forEach((category: any, index: number) => {
            const div = document.createElement("div");

            const input = document.createElement("input");
            input.type = "radio";
            input.name = "SHOP_CATEGORY";
            input.id = category.name;
            input.value = category.name;
            input.addEventListener("click", this.fetchItemForCategory.bind(this));

            if(index == 0)
                input.checked = true;

            div.appendChild(input);

            const label = document.createElement("label");
            label.setAttribute("for", category.name);
            label.textContent = Application.languageManager.getValueForKey("GAME_" + category.name);
            div.appendChild(label);

            shopCategorys.appendChild(div);
        });

        this.shopDataItems(shopData.items);

        shop.style.display = "block";
    }

    refreshShop(): void {
        const shop = document.getElementById("shop"),
            shopCoinVal = document.getElementById("shopCoinVal"),
            shopItems = document.getElementById("shopItems");

        if(shopCoinVal == null || shopItems == null || shop == null || shop.style.display == "none")
            return;

        if(Application.currentUser != null)
            shopCoinVal.textContent = Application.currentUser.coins.toString();

        Array.from(shopItems.getElementsByTagName("div")).filter((element) => element.classList.contains("row")).forEach((element, index) => {
            element.className = 'row';

            const item_id = element.getAttribute("item_id"),
                price = element.getAttribute("price");

            const span = element.getElementsByTagName("span")[0]
            if(item_id == null || price == null || span == null)
                return;

            if(Application.currentUser?.avatar == parseInt(item_id))
            {
                element.classList.add("equiped");
                span.textContent = Application.languageManager.getValueForKey("GAME_SHOP_EQUIPED")
            }
            else if(Application.currentUser?.items.includes(parseInt(item_id))) {
                span.textContent = Application.languageManager.getValueForKey("GAME_SHOP_EQUIP")
            }
            else {
                if(Application.currentUser != null && Application.currentUser.coins < parseInt(price))
                    element.classList.add("cant_buy");
            }
        })
    }

    shopDataItems(items: Array<any>): void {
        const shopItems = document.getElementById("shopItems");
        if(shopItems == null)
            return;

        shopItems.innerHTML = "";

        items.forEach((item: any) => {
            const div = document.createElement("div");
            div.classList.add("row");
            div.setAttribute("item_id", item.id);
            div.setAttribute("price", item.price);

            const image = Application.resourceManager.resources["IMAGE_AVATAR_" + item.id];
            if(image == null)
                return;

            const imageElement = document.createElement("img");
            imageElement.classList.add("item");
            imageElement.src = image.src;
            div.appendChild(imageElement);

            const action = document.createElement("div");
            action.classList.add("action");
            action.addEventListener("click", () => Application.webSocketsManager.sendMsg("toggleItem", item.id));

            const span = document.createElement("span");

            if(Application.currentUser?.avatar == item.id)
            {
                div.classList.add("equiped");
                span.textContent = Application.languageManager.getValueForKey("GAME_SHOP_EQUIPED")
            }
            else if(Application.currentUser?.items.includes(item.id)) {
                span.textContent = Application.languageManager.getValueForKey("GAME_SHOP_EQUIP")
            }
            else {
                if(Application.currentUser != null && Application.currentUser.coins < item.price)
                    div.classList.add("cant_buy");

                span.innerHTML = '<img src="assets/images/icons/coin.png"> ' + item.price
            }
            action.appendChild(span);

            div.appendChild(action);

            shopItems.appendChild(div);
        });
    }

    sendChat(e: any): void {
        e.preventDefault();

        const chatCategory = document.getElementById("msgType") as HTMLSelectElement,
            chatMsg = document.getElementById("chatMsg") as HTMLInputElement;
        
        if(chatCategory == null || chatCategory.value.length == 0 || chatMsg == null || chatMsg.value.length == 0)
            return;

        Application.webSocketsManager.sendMsg("newChat", {type: chatCategory.value, message: chatMsg.value});
        chatMsg.value = "";
    }

    keyDownHandler(e: any): void {
        const inputChat = document.getElementById("chatMsg");
        if(inputChat == null)
            return;
        
        if(this.state.settings_record_input && inputChat != document.activeElement) {
            Application.settingsManager.setSettings("inputs", this.state.settings_record_input, e.code);
            this.state.settings_record_input = null;
            this.reloadSettings();
            return;
        }

        if(e.code.startsWith("Digit") && inputChat != document.activeElement) {
            const zoom = [1, 1.25, 1.5, 1.75, 2, 2.25, 2.5];
            const zoomLevel = parseInt(e.code.replace("Digit", ""));

            if(zoom[zoomLevel - 1] != null) {
                Application.settingsManager.setSettings("graphics", "zoom", zoom[zoomLevel - 1]);
                this.reloadSettings();
            }
            return;
        }

        if(e.code == "KeyP" && inputChat != document.activeElement) {
            const server = Application.regionServerManager.getServerById((Application.currentUser as User).currentServer);
            if(server != null)
               server.sendMsg("pause");

            return;
        }

        if(Application.settingsManager.inputs.right.includes(e.code))
            this.state.inputs.right = true;

        if(Application.settingsManager.inputs.left.includes(e.code))
            this.state.inputs.left = true;

        if(Application.settingsManager.inputs.up.includes(e.code))
            this.state.inputs.up = true;

        if(Application.settingsManager.inputs.down.includes(e.code))
            this.state.inputs.down = true;

        if(Application.settingsManager.inputs.kick.includes(e.code))
            this.state.inputs.kick = true;

        if(inputChat === document.activeElement) {
            this.state.inputs.up = false;
            this.state.inputs.down = false;
            this.state.inputs.left = false;
            this.state.inputs.right = false;
            this.state.inputs.kick = false;
        }

        if(Application.settingsManager.inputs.toggle_chat.includes(e.code)) {
            if((inputChat === document.activeElement))
                setTimeout(() => this.state.canvas.focus(), 1);
            else {
                setTimeout(() => inputChat.focus(), 1);
            }
        }
    }

    KeyUpHandler(e: any): void {
        if(Application.settingsManager.inputs.right.includes(e.code))
            this.state.inputs.right = false;

        if(Application.settingsManager.inputs.left.includes(e.code))
            this.state.inputs.left = false;

        if(Application.settingsManager.inputs.up.includes(e.code))
            this.state.inputs.up = false;

        if(Application.settingsManager.inputs.down.includes(e.code))
            this.state.inputs.down = false;

        if(Application.settingsManager.inputs.kick.includes(e.code))
            this.state.inputs.kick = false;
    }

    onDestroy(): void {
        super.onDestroy();

        const chatForm = document.getElementById("chatForm");
        chatForm?.removeEventListener("chatForm", this.sendChat.bind(this), false);

        document.removeEventListener('keydown', this.keyDownHandler.bind(this), false);
        document.removeEventListener('keyup', this.KeyUpHandler.bind(this), false);
    }

    fmtMSS(s: number): string {
        return(s-(s%=60))/60+(9<s?':':':0')+s
    }

    updateAvatar(): void {
        this.refreshShop();

        const avatar = document.getElementById("avatar") as HTMLImageElement;
        if(avatar == null)
            return;

        avatar.src = Application.resourceManager.resources["IMAGE_AVATAR_" + Application.currentUser?.avatar].src
    }

    initRoom(room: Room): void {
        const roomName = document.getElementById("roomName");
        if(roomName != null)
            roomName.textContent = room.id;

        const playersCount = document.getElementById("playersCount");
        if(playersCount != null)
            playersCount.textContent = room.currentPlayers.length.toString();

        this.updateScoreData(room.score);

        const list_users = document.getElementById("list_users");

        if(list_users != null)
            list_users.innerHTML = "";

        room.currentPlayers.forEach((player) => {
            const li = document.createElement("li");
            li.dataset.userId = player.id.toString();
            li.setAttribute("username", player.username);
            li.innerHTML = `${player.username} <span>${player.ping.toString()}</span>`;

            if(player.team.id == Team.RED.id)
                li.classList.add("red");
            else if(player.team.id == Team.BLUE.id)
                li.classList.add("blue");

            if(list_users != null)
                list_users.appendChild(li);

            li.addEventListener("click", this.showUserMenu.bind(this));
        })

        room.history.forEach((history) => this.addHistory(history));

        this.refreshPickList();
    }

    update(room: Room): void {
        this.updateScoreData(room.score);

        const list_users = document.getElementById("list_users");
        if(list_users != null) {
            room.currentPlayers.forEach((player) => {
                list_users.querySelectorAll("li").forEach(element => {
                    if(element.dataset.userId == player.id.toString())
                    {                        
                        if(player.team.id == Team.RED.id) {
                            if(element.classList.contains("blue"))
                                element.classList.remove("blue");

                            if(!element.classList.contains("red"))
                                element.classList.add("red");
                        }
                        else if(player.team.id == Team.BLUE.id) {
                            if(element.classList.contains("red"))
                                element.classList.remove("red");

                            if(!element.classList.contains("blue"))
                                element.classList.add("blue");
                        }
                        else if(element.classList.contains("red") || element.classList.contains("blue"))
                            element.classList.remove(...["red", "blue"]);

                        const ping = element.getElementsByTagName("span")[0];
                        if(ping != null && ping.textContent != player.ping.toString())
                            ping.textContent = player.ping.toString()
                    }
                })
            });
        }
    }

    setCameraFollow(): void {
        let centerX, centerY;

        const playerDisc = Application.currentUser?.currentRoom?.stadium.discs.filter((disc:any) => disc.player == (Application.currentUser as User).id)[0],
            ball = Application.currentUser?.currentRoom?.stadium.discs[0];

        if(ball == null) {
            this.state.camera_follow = {x: 0, y:0};
            return;
        }
        
        const bottomContainerHeight = 160;
        centerX = Application.currentUser?.currentRoom?.stadium.discs[0].x;
        centerY = (Application.currentUser?.currentRoom?.stadium.discs[0].y + bottomContainerHeight);

        if (playerDisc != null) {
            centerX = 0.5 * (centerX + playerDisc.x);
            centerY = 0.5 * (centerY + playerDisc.y);
            const midX = 0.5 * this.state.canvas.width,
                midY = 0.5 * this.state.canvas.height;

            const infX = playerDisc.x - midX + 50,
                infY = playerDisc.y - midY + 50,
                supX = playerDisc.x + midX - 50,
                supY = playerDisc.y + midY - 50;

            centerX = centerX > supX ? supX : centerX < infX ? infX : centerX;
            centerY = centerY > supY ? supY : centerY < infY ? infY : centerY;
        }

        let frames = 60 * (1/this.state.fps);
        if(frames > 1) frames = 1;
        const smoothingRatio = 0.04;
        frames *= smoothingRatio;

        this.state.cameraFollow.x += (centerX - this.state.cameraFollow.x) * frames;
        this.state.cameraFollow.y += (centerY - this.state.cameraFollow.y) * frames;

        const room = ((Application.currentUser as User).currentRoom as Room);

        const margin = 125,
            canvasHeight = this.state.canvas.height - bottomContainerHeight,
            stadiumWidth = room.stadium.width + margin,
            stadiumHeight = room.stadium.height + margin;

        if (this.state.canvas.width > 2 * stadiumWidth) {
            this.state.cameraFollow.x = 0;
        }
        else if (this.state.cameraFollow.x + 0.5 * this.state.canvas.width > stadiumWidth) {
            this.state.cameraFollow.x = stadiumWidth - 0.5 * this.state.canvas.width;
        }
        else if (this.state.cameraFollow.x - 0.5 * this.state.canvas.width < -stadiumWidth) {
            this.state.cameraFollow.x = -stadiumWidth + 0.5 * this.state.canvas.width;
        }
    
        if (canvasHeight > 2 * stadiumHeight) {
            this.state.cameraFollow.y = 0;
        }
        else if (this.state.cameraFollow.y + 0.5 * canvasHeight > stadiumHeight) {
            this.state.cameraFollow.y =  stadiumHeight - 0.5 * canvasHeight;
        }
        else if (this.state.cameraFollow.y - 0.5 * canvasHeight < -stadiumHeight) {
            this.state.cameraFollow.y = -stadiumHeight + 0.5 * canvasHeight;
        }
    }

    renderNotif(dt: number): void {
        if(Application.currentUser == null || Application.currentUser.currentRoom == null)
            return;

        const notif = document.getElementById("notif");
        if(notif == null)
            return;

        switch(Application.currentUser.currentRoom.state) {
            case RoomState.PAUSE: {
                this.state.canvas.classList.add("pause");
                notif.innerHTML = `${Application.languageManager.getValueForKey("GAME_GENERAL_PAUSE")}`;

                if(notif.style.display == "none")
                    notif.style.display = "block";
                break;
            }

            case RoomState.UNPAUSE: {
                // TODO PLAYER JOIN ON UNPAUSE
                this.state.unpauseInterval -= (dt * 1000);
                this.state.canvas.classList.add("pause");
                notif.innerHTML = `${Application.languageManager.getValueForKey("GAME_GENERAL_PAUSE")} <div id='pause' style='width: ${this.state.unpauseInterval * 100/3000}%'></div>`;

                if(notif.style.display == "none")
                    notif.style.display = "block";
                break;
            }

            case RoomState.GOAL_SCORE: {
                if(notif.style.display == "none")
                    notif.style.display = "block";
                break;
            }

            default: {
                if(this.state.canvas.classList.length > 0)
                    this.state.canvas.classList = "";

                if(notif.style.display == "block")
                    notif.style.display = "none";

                notif.innerHTML = "";
                break;
            }
        }
    }

    renderGame(dt: number): void {
        if(this.state.canvas == null || this.state.ctx == null || Application.currentUser == null || Application.currentUser.currentRoom == null || Application.currentUser.currentRoom.stadium == null)
            return;

        if(Application.currentUser.currentRoom.state == RoomState.GAME_ENDED)
        {
            this.state.ctx.setTransform(1, 0, 0, 1, 0, 0);
            this.state.ctx.clearRect(0, 0, this.state.canvas_rect[2] - this.state.canvas_rect[0], this.state.canvas_rect[3] - this.state.canvas_rect[1]);
            this.renderNotif(dt);
            this.showMenu();
            return;
        }

        const server = Application.regionServerManager.getServerById(Application.currentUser.currentServer);
        if(server != null)
           server.sendMsg("inputs", this.state.inputs)

        this.resize_canvas();
        this.renderNotif(dt);

        this.state.ctx.setTransform(1, 0, 0, 1, 0, 0);
        this.state.ctx.clearRect(0, 0, this.state.canvas_rect[2] - this.state.canvas_rect[0], this.state.canvas_rect[3] - this.state.canvas_rect[1]);
        this.setCameraFollow();

        this.state.ctx.translate(-this.state.canvas_rect[0], -this.state.canvas_rect[1]);
        this.state.ctx.scale(window.devicePixelRatio * Application.settingsManager.graphics.zoom, window.devicePixelRatio * Application.settingsManager.graphics.zoom);
        this.state.ctx.translate(-this.state.cameraFollow.x, -this.state.cameraFollow.y);

        this.renderbg(Application.currentUser.currentRoom.stadium, this.state.ctx);

        Application.currentUser.currentRoom.stadium.segments.forEach((segment: any) => {
            if (segment.vis) {
                this.state.ctx.beginPath();
                this.state.ctx.lineWidth = 3;
                this.state.ctx.strokeStyle = this.color_to_style(
                    segment.color,
                    Base.segment_color
                );
                var segV0 = segment.v0;
                var segV1 = segment.v1;
                if (segment.curveF === undefined) {
                    this.state.ctx.moveTo(segV0[0], segV0[1]);
                    this.state.ctx.lineTo(segV1[0], segV1[1]);
                } else {
                    var segCC = segment.circleCenter;
                    var pos_x = segV0[0] - segCC[0];
                    var pos_y = segV0[1] - segCC[1];
                    this.state.ctx.arc(
                        segCC[0],
                        segCC[1],
                        Math.sqrt(pos_x * pos_x + pos_y * pos_y),
                        Math.atan2(pos_y, pos_x),
                        Math.atan2(segV1[1] - segCC[1], segV1[0] - segCC[0])
                    );
                }
                this.state.ctx.stroke();
            }
        });

        const now = performance.now();
        const renderTimestamp = now - (1000.0 / Config.SERVER_UPDATE_INTERVAL);

        Application.currentUser.currentRoom.stadium.discs.forEach((disc: any, i: any) => {
            const buffer = Application.currentUser?.currentRoom?.discHistory[i];

            if(buffer != null) {
                while(buffer.length >= 2 && buffer[1].timestamp <= renderTimestamp)
                    buffer.shift();

                if(buffer.length >= 2 && buffer[0].timestamp <= renderTimestamp && renderTimestamp <= buffer[1].timestamp) {
                    disc.x = this.interpolate(
                        buffer[0].shareableData.x,
                        buffer[1].shareableData.x,
                        buffer[0].timestamp,
                        buffer[1].timestamp,
                        renderTimestamp
                    );

                    disc.y = this.interpolate(
                        buffer[0].shareableData.y,
                        buffer[1].shareableData.y,
                        buffer[0].timestamp,
                        buffer[1].timestamp,
                        renderTimestamp
                    );
                }
            }
        });

        const myDisc = Application.currentUser.currentRoom.stadium.discs.filter((disc: any) => disc.player == (Application.currentUser as User).id)
        if(myDisc[0]  != null)
            this.drawPlayerDiscExtLine(myDisc[0])

        Application.currentUser.currentRoom.stadium.discs.forEach((disc: any, i: any) => {
            this.state.ctx.beginPath();
            this.state.ctx.arc(disc.x, disc.y, disc.radius, 0, Math.PI * 2, true);

            if(disc.player != null && disc.player != 0 && disc.player != (Application.currentUser as User).id) {
                const player = ((Application.currentUser as User).currentRoom as Room).currentPlayers.filter((p) => p.id == disc.player)[0];

                if(player != null)
                    this.drawUsername(player.username, disc, player.team.id);
            }

            if(disc.kick)
                this.state.ctx.strokeStyle = 'rgb(255,255,255)';
            else
                this.state.ctx.strokeStyle = 'rgb(0,0,0)';

            this.state.ctx.lineWidth = 2;
            if(disc.avatar != null && disc.avatar != 0) {
                this.state.ctx.save()
                this.state.ctx.clip();
                this.state.ctx.drawImage(Application.resourceManager.resources["IMAGE_AVATAR_" + disc.avatar], disc.x - disc.radius, disc.y - disc.radius, disc.radius * 2, disc.radius * 2);
                this.state.ctx.restore();
            } else {
                this.state.ctx.fillStyle = this.color_to_style(
                    disc.color,
                    Base.discPhysics.color
                );
                this.state.ctx.fill();
            }
            this.state.ctx.stroke();
        });
    }

    drawUsername(username: string, disc: any, team: number) {
        this.state.ctx.font = '12px sans-serif';

        const text = this.state.ctx.measureText(username);
        this.state.ctx.fillStyle = 'black';
        this.state.ctx.strokeText(username, disc.x - (text.width/2), disc.y + disc.radius + 15);

        if(team == Team.RED.id)
            this.state.ctx.fillStyle = '#bd3838';
        else if(team == Team.BLUE.id)
            this.state.ctx.fillStyle = '#bd3838';
        else
            this.state.ctx.fillStyle = "white";

        this.state.ctx.globalAlpha = 0.8;
        this.state.ctx.fillText(username, disc.x - (text.width/2), disc.y + disc.radius + 15);
        this.state.ctx.globalAlpha = 1;
    }

    drawPlayerDiscExtLine(disc: any) {
        this.state.ctx.beginPath();
        this.state.ctx.lineWidth = 3;
        this.state.ctx.strokeStyle = 'white';
        this.state.ctx.globalAlpha = 0.3;
        this.state.ctx.arc(disc.x, disc.y, disc.radius + 10, 0, 2 * Math.PI, false);
        this.state.ctx.stroke();
        this.state.ctx.globalAlpha = 1;
    }

    interpolate(p0: number, p1: number, t0: number, t1: number, renderTimestamp: number): number {
        const deltaMovement = (p1 - p0);
        return p0 + deltaMovement * (renderTimestamp - t0) / (t1 - t0);
    }

    resize_canvas() {
        var rect = [-Application.currentUser?.currentRoom?.stadium.width, -Application.currentUser?.currentRoom?.stadium.height, Application.currentUser?.currentRoom?.stadium.width, Application.currentUser?.currentRoom?.stadium.height];
    
        var consider = function (pt: any, r: any) {
            var x = pt[0];
            var y = pt[1];
            if (x - r < rect[0]) rect[0] = x - r;
            if (y - r < rect[1]) rect[1] = y - r;
            if (x + r > rect[2]) rect[2] = x + r;
            if (y + r > rect[3]) rect[3] = y + r;
        };
    
        this.for_all_shapes(Application.currentUser?.currentRoom?.stadium, function (shape: any) {
            var o = shape.object;
            switch (shape.type) {
                case 'vertexes':
                    consider([o.x, o.y], 0);
                    break;
                case 'goals':
                    consider(o.p0, 0);
                    consider(o.p1, 0);
                    break;
                case 'discs':
                    consider([o.x, o.y], o.radius);
                    break;
            }
        });
    
        var canvas_div_size = [this.state.canvas.clientWidth, this.state.canvas.clientHeight];
    
        rect = [
            Math.round(Math.min(rect[0] - 0, -canvas_div_size[0] / 2)),
            Math.round(Math.min(rect[1] - 0, -canvas_div_size[1] / 2)),
            Math.round(Math.max(rect[2] + 0, canvas_div_size[0] / 2)),
            Math.round(Math.max(rect[3] + 0, canvas_div_size[1] / 2)),
        ];
    
        this.state.canvas_rect = rect;
        this.state.canvas.width = document.body.offsetWidth;
        this.state.canvas.height = document.body.offsetHeight;
    }

    for_all_shapes(st: any, types: any, f: any = null) {
        if (!f) {
            f = types;
            types = ['vertexes', 'segments', 'goals', 'discs', 'planes'];
        }
        types.forEach((name: any) => {
            var group = st[name];
            if (group) {
                group.forEach((obj: any, i: any) => {
                    return f(this.Shape(name, obj, i));
                });
            }
        });
    }

    Shape(type:any, object:any, i:any) {
        return { type: type, object: object, index: i };
    }

    renderbg(stadium: any, ctx: CanvasRenderingContext2D) {
        var bg = stadium.bg;
        ctx.save();
    
        if (bg.type == 'grass' || bg.type == 'hockey') {
            if(bg.type == 'grass')
                this.state.canvas.style.backgroundColor = Base["grass"].bg_color
            else
                this.state.canvas.style.backgroundColor = Base["hockey"].bg_color
    
            ctx.beginPath();
    
            ctx.moveTo(-bg.width + bg.cornerRadius, -bg.height);
            // TODO: Left border is wrong
            ctx.arcTo(
                bg.width,
                -bg.height,
                bg.width,
                -bg.height + bg.cornerRadius,
                bg.cornerRadius
            );
            ctx.arcTo(
                bg.width,
                bg.height,
                bg.width - bg.cornerRadius,
                bg.height,
                bg.cornerRadius
            );
            ctx.arcTo(
                -bg.width,
                bg.height,
                -bg.width,
                bg.height - bg.cornerRadius,
                bg.cornerRadius
            );
            ctx.arcTo(
                -bg.width,
                -bg.height,
                -bg.width + bg.cornerRadius,
                -bg.height,
                bg.cornerRadius
            );
    
            ctx.save();
            ctx.clip();
            ctx.translate(40, 40);
            ctx.fillStyle = this.state.ctx.createPattern(Application.resourceManager.resources[`IMAGE_TILE_${bg.type.toUpperCase()}`], null);;
            ctx.fillRect(
                -stadium.width - 50,
                -stadium.height - 50,
                2 * stadium.width - 40,
                2 * stadium.height - 20
            );
            ctx.restore();
    
            ctx.moveTo(0, -bg.height);
            ctx.lineTo(0, bg.height);
            ctx.moveTo(bg.kickOffRadius, 0);
            ctx.arc(0, 0, bg.kickOffRadius, 0, Math.PI * 2, true);
    
            ctx.lineWidth = 3;
            ctx.strokeStyle = Base["grass"].border_color;
            ctx.stroke();
        } else if (bg.type == '' && bg.color != undefined) {
            ctx.fillStyle = this.color_to_style(bg.color);
            ctx.fillRect(-stadium.width, -stadium.height, 2 * stadium.width, 2 * stadium.height);
            this.state.canvas.style.background = this.color_to_style(bg.color);
        } else
            this.state.canvas.style.backgroundColor = Base["grass"].bg_color
    
        ctx.restore();
    }

    color_to_style(color: any, def: any = null) {
        if (!color) {
            return def ? def : 'rgb(0,0,0)';
        } else if (color.substr) {
            return '#' + color;
        } else {
            return 'rgb(' + color[0] + ',' + color[1] + ',' + color[2] + ')';
        }
    }

    updateScoreData(score: Score): void {
        const scoreRed = document.getElementById("scoreRed");
        if(scoreRed != null)
            scoreRed.textContent = score.red.toString();

        const scoreBlue = document.getElementById("scoreBlue");
        if(scoreBlue != null)
            scoreBlue.textContent = score.blue.toString();

        const time = document.getElementById("time"),
            overtime = document.getElementById("overtime");

        if(time != null && overtime != null) {
            const room = ((Application.currentUser as User).currentRoom as Room);

            if(room.score.timeLimit > 0 && Math.floor(score.time) + 30 > room.score.timeLimit * 60)
                time.classList.add("warning");
            else
                time.classList.remove("warning");

            if(room.score.timeLimit > 0 && Math.floor(score.time) > room.score.timeLimit * 60)
                overtime.style.display = "block";
            else
                overtime.style.display = "none"
            
            time.textContent = this.fmtMSS(Math.floor(score.time));
        }
    }

    drop(ev: any): void {
        ev.preventDefault();
        const data = ev.dataTransfer.getData("text");
        const target = ev.target;

        const server = Application.regionServerManager.getServerById((Application.currentUser as User).currentServer);
        if(server == null)
            return;

        switch(ev.target.getAttribute("id")) {
            case "pick_list_red": {
                server.sendMsg("setTeamPlayer", {playerId: parseInt(data), team: Team.RED.id});
                break;
            }
            
            case "pick_list_blue": {
                server.sendMsg("setTeamPlayer", {playerId: parseInt(data), team: Team.BLUE.id});
                break;
            }

            default: {
                server.sendMsg("setTeamPlayer", {playerId: parseInt(data), team: Team.SPECTATORS.id});
                break;
            }
        }
    }

    startDrag(ev: any): void {
        ev.dataTransfer.setData("text", ev.target.getAttribute("player_id"));
    }

    refreshPickList(): void {
        const pick_list = document.getElementById("pick_list"),
            pick_list_red = document.getElementById("pick_list_red"),
            pick_list_blue = document.getElementById("pick_list_blue"),
            pick_list_spectators = document.getElementById("pick_list_spectators");

        if(pick_list == null || pick_list_red == null || pick_list_blue == null || pick_list_spectators == null)
            return;

        pick_list_red.innerHTML = "";
        pick_list_blue.innerHTML = "";
        pick_list_spectators.innerHTML = "";

        Application.currentUser?.currentRoom?.currentPlayers.forEach((player) => {
            const div = document.createElement("div");
            div.setAttribute("player_id", player.id.toString());
            div.draggable = true;
            div.classList.add("row");

            const avatar = document.createElement("img");
            avatar.src = Application.resourceManager.resources["IMAGE_AVATAR_" + player.avatar].src;
            div.appendChild(avatar);

            const username = document.createElement("div");
            username.classList.add("username");
            if(Application.currentUser?.currentRoom?.pickMode == player.id)
                username.classList.add("picker");

            username.textContent = player.username;
            div.appendChild(username);

            const ping = document.createElement("div");
            ping.classList.add("ping");
            ping.textContent = player.ping.toString();
            div.appendChild(ping);
            div.addEventListener("dragstart", this.startDrag.bind(this));

            if(player.team.id == Team.RED.id)
                pick_list_red.appendChild(div);
            else if(player.team.id == Team.BLUE.id)
                pick_list_blue.appendChild(div);
            else
                pick_list_spectators.appendChild(div);
        })
    }

    playerJoin(player: RoomPlayer, playerLength: number) {
        const playersCount = document.getElementById("playersCount");
        if(playersCount != null)
            playersCount.textContent = playerLength.toString();

        const list_users = document.getElementById("list_users");
        const li = document.createElement("li");
        li.dataset.userId = player.id.toString();
        li.setAttribute("username", player.username);
        li.innerHTML = `${player.username} <span>${player.ping}</span>`;
        li.addEventListener("click", this.showUserMenu.bind(this));

        if(player.team == Team.RED)
            li.classList.add("red");
        else if(player.team == Team.BLUE)
            li.classList.add("blue");

        if(list_users != null)
            list_users.appendChild(li);

        this.refreshPickList();
    }

    playerLeave(playerId: number, playerLength: number) {
        const playersCount = document.getElementById("playersCount");
        if(playersCount != null)
            playersCount.textContent = playerLength.toString();

        const list_users = document.getElementById("list_users");

        if(list_users != null) {
            list_users.querySelectorAll("li").forEach(element => {
                if(element.dataset.userId == playerId.toString())
                    list_users.removeChild(element);
            });
        }

        this.refreshPickList();
    }
    
    newChat(data: any):void {
        const chatContainer = document.getElementById("chatContent");
        let scrollToBottom = false;

        if(chatContainer != null && Math.abs(chatContainer.scrollHeight - chatContainer.scrollTop - chatContainer.clientHeight) < 1)
            scrollToBottom = true;

        switch (data.type)
        {
            case "announcement":
            {
                const element = document.createElement("div");
                element.classList.add("announcement")
                element.textContent = data.officialTrad ? Application.languageManager.getValueForKey(data.message, data.params ? data.params : []) : data.message;

                if(data.color != null)
                    element.style.color = data.color;

                if(data.bold)
                    element.style.fontWeight = "bold";

                chatContainer?.appendChild(element);

                switch (data.sound) {
                    case 1: 
                        Application.settingsManager.audio.general && Application.settingsManager.audio.chat ? Application.resourceManager.resources["AUDIO_HIGHLIGHT"].play() : null;
                        break;

                    default:
                        Application.settingsManager.audio.general && Application.settingsManager.audio.chat ? Application.resourceManager.resources["AUDIO_CHAT"].play() : null;
                        break;
                }
                break;
            }

            case "pm_to": 
            case "pm_from": 
            {
                const element = document.createElement("div");
                element.textContent = data.message;

                const span = document.createElement("span");
                span.setAttribute("username", data.username);
                span.classList.add(data.type);

                if(data.type == "pm_to")
                    span.textContent = `[< ${Application.languageManager.getValueForKey("GAME_CHAT_PM_TO", [data.username])}] `;
                else
                    span.textContent = `[> ${Application.languageManager.getValueForKey("GAME_CHAT_PM_FROM", [data.username])}] `;
                span.addEventListener("click", this.showUserMenu.bind(this));
                element.prepend(span);
                chatContainer?.appendChild(element);
                Application.settingsManager.audio.general && Application.settingsManager.audio.chat ? Application.resourceManager.resources["AUDIO_HIGHLIGHT"].play() : null;
                break;
            }

            default: {
                const element = document.createElement("div");
                element.textContent = data.message;

                const span = document.createElement("span");

                if(data.team != null) {
                    switch(data.team) {
                        case Team.RED.id:
                            span.style.color = Team.RED.color
                            break;

                        case Team.BLUE.id:
                            span.style.color = Team.BLUE.color
                            break;

                        case Team.SPECTATORS.id:
                            span.style.color = Team.SPECTATORS.color
                            break;
                    }

                    span.textContent = `[${Application.languageManager.getValueForKey("GAME_GENERAL_TEAM")}] ${data.username}: `;
                } else {
                    span.classList.add(data.rank);
                    span.textContent = data.username + ": ";
                }
                span.setAttribute("username", data.username);

                span.addEventListener("click", this.showUserMenu.bind(this));

                element.prepend(span);

                chatContainer?.appendChild(element);
                Application.settingsManager.audio.general && Application.settingsManager.audio.chat ? Application.resourceManager.resources["AUDIO_CHAT"].play() : null;
                break;
            }
        }

        if(chatContainer != null)
        {
            if(scrollToBottom)
                chatContainer.scrollTop = chatContainer.scrollHeight;

            if(chatContainer.childElementCount > 20)
                chatContainer.removeChild(chatContainer.getElementsByTagName('div')[0]);
        }
    }

    whisper(username: string) {
        const chatCategory = document.getElementById("msgType") as HTMLSelectElement,
        chatMsg = document.getElementById("chatMsg") as HTMLInputElement;

        if(chatCategory == null || chatMsg == null)
            return;

        let optionVal = null;
        Array.from(chatCategory.getElementsByTagName("option")).forEach((element) => {
            if(element.value == username)
                optionVal = element;
        });

        if(optionVal == null)
        {
            const option = document.createElement("option");
            option.value = username;
            option.innerHTML = username;
            chatCategory.append(option);
        }

        chatCategory.value = username;
        chatMsg.focus();
    }

    userMenuItem(e: any): void {
        switch(e.srcElement.getAttribute("type")) {
            case "whisper": {
                this.whisper(this.state.focusUser);
                break;
            }

            case "profile": {
                Application.webSocketsManager.sendMsg("requestProfile", this.state.focusUser)
                break;
            }

            case "friend": {
                Application.webSocketsManager.sendMsg("addFriend", this.state.focusUser);
                break;
            }

            case "report": {
                Application.webSocketsManager.sendMsg("report", this.state.focusUser);
                break;
            }

            case "mute": {
                this.switchAdmin("new_sanction", {type: "mute", username: this.state.focusUser});
                break;
            }

            case "ban": {
                this.switchAdmin("new_sanction", {type: "ban", username: this.state.focusUser});
                break;
            }
        }
    }

    hideUserMenu():void {
        document.removeEventListener('click', this.state.userMenuFunction);
        const user_menu = document.getElementById("user_menu");
        if(user_menu == null)
            return;

        user_menu.style.display = "none";
    }

    showUserMenu(e: any): void {
        if(e.srcElement.getAttribute("username") == Application.currentUser?.username)
            return;

        this.state.focusUser = e.srcElement.getAttribute("username");

        const user_menu = document.getElementById("user_menu");
        if(user_menu == null)
            return;

        Array.from(user_menu.getElementsByTagName("li")).forEach((element) => {
            if(element.getAttribute("type") == "friend" && Application.currentUser?.getFriendbyUsername(this.state.focusUser) != null)
                element.style.display = "none";
            else
                element.style.display = "block";

            if(["mute", "ban"].includes(element.getAttribute("type") as string)) {
                if(["user", "vip"].includes((Application.currentUser as User).rank))
                    element.style.display = "none";
                else
                    element.style.display = "block";
            }
        })

        user_menu.style.display = "block";
        user_menu.style.left = (e.pageX - 75) + "px";
        user_menu.style.top = (e.pageY - user_menu.clientHeight - 20) + "px";

        this.state.userMenuFunction = this.hideUserMenu.bind(this);
        setTimeout(() => document.addEventListener('click', this.state.userMenuFunction, false), 10);
    }

    getRegionFlag(region: any): string {
        switch(region.toLowerCase()) {
            case "eu":
                return "EU";

            default:
                return "UNDEFINED"
        }
    }

    render(): void {
        if(this.app == null)
            return;

        this.app.innerHTML = 
            `<div class="gameScreen">
                <canvas id="game" tabindex="1"></canvas>

                <div class="header">
                    <div class="roomScore">
                        <div class="circle red"></div> <span id="scoreRed"></span> <span class="space">-</span> <span id="scoreBlue"></span> <div class="circle blue"></div>
                    </div>

                    <div class="time"><img src="assets/images/icons/clock.png"> <span id="time"></span> <span id="overtime">${Application.languageManager.getValueForKey("GAME_GENERAL_OVERTIME")}</span></div>
                    <div class="players"><img src="assets/images/icons/players.png"> <span id="playersCount"></span></div>
                    <div class="roomName"><img src="assets/images/flags/region/${this.getRegionFlag(this.state.currentUser.currentServer)}.svg"/><span id="roomName"></span></div>
                </div>

                <div class="stats">
                    <div class="row"><span id="fps">0</span> fps</div>
                </div>

                <div class="relative_container">
                    <div id="notif"></div>

                    <div class="modal" id="pick_list">
                        <div class="pick_list_flex">
                            <div class="container red">
                                <div class="title">
                                    <div class="title_content">${Application.languageManager.getValueForKey("GAME_TEAM_RED")}</div>
                                </div>

                                <div class="content pick_list_team" id="pick_list_red"></div>
                            </div>

                            <div class="container spectators">
                                <div class="title">
                                    <div class="title_content">${Application.languageManager.getValueForKey("GAME_TEAM_SPECTATORS")}</div>
                                </div>

                                <div class="content pick_list_team" id="pick_list_spectators"></div>
                            </div>

                            <div class="container blue">
                                <div class="title">
                                    <div class="title_content">${Application.languageManager.getValueForKey("GAME_TEAM_BLUE")}</div>
                                </div>

                                <div class="content pick_list_team" id="pick_list_blue"></div>
                            </div>
                        </div>
                    </div>

                    <div class="modal" id="admin">
                        <div class="container">
                            <div class="title">
                                <div class="title_content"><img src="assets/images/icons/settings.svg"> ${Application.languageManager.getValueForKey("GAME_ADMIN")}</div>
                            </div>

                            <ul id="admin_menu">
                                <li type="team">${Application.languageManager.getValueForKey("GAME_ADMIN_TEAM")}</li>
                                <li type="reports">${Application.languageManager.getValueForKey("GAME_ADMIN_REPORTS")}</li>
                                <li type="sanctions">${Application.languageManager.getValueForKey("GAME_ADMIN_SANCTIONS")}</li>
                                <li type="new_sanction">${Application.languageManager.getValueForKey("GAME_ADMIN_NEW_SANCTION")}</li>
                                <li type="rank">${Application.languageManager.getValueForKey("GAME_ADMIN_RANK")}</li>
                            </ul>

                            <div class="content">
                                <div class="category_title"><span id="admin_title"></span></div>

                                <div id="admin_content"></div>
                            </div>

                            <div class="bottom"><button class="close">${Application.languageManager.getValueForKey("GAME_GENERAL_CLOSE")}</button></div>
                        </div>
                    </div>

                    <div class="modal" id="leaderboard">
                        <div class="container">
                            <div class="title">
                                <div class="title_content"><img src="assets/images/icons/settings.svg"> ${Application.languageManager.getValueForKey("GAME_LEADERBOARD")}</div>
                            </div>

                            <div class="content">
                                <div class="filter">
                                    ${Application.languageManager.getValueForKey("GAME_LEADERBOARD_FILTER")}

                                    <select id="leaderboardFilter"></select>
                                </div>

                                <div id="leaderboardContent"></div>
                            </div>

                            <div class="bottom"><button class="close">${Application.languageManager.getValueForKey("GAME_GENERAL_CLOSE")}</button></div>
                        </div>
                    </div>

                    <div class="modal" id="profile">
                        <div class="container">
                            <div class="title">
                                <div class="avatar"><img profile_data="avatar"></div>
                                <div class="title_content">
                                    <span class="state" profile_data="online"></span>
                                    <span profile_data="username"></span>
                                </div>
                            </div>

                            <div class="content">
                                <div class="category">
                                    <div>${Application.languageManager.getValueForKey("GAME_STATS_REGISTERED")}: <span profile_data="registered"></span></div>
                                    <div>${Application.languageManager.getValueForKey("GAME_STATS_LEVEL_XP")}: <span profile_data="level_xp"></span></div>
                                    <div>${Application.languageManager.getValueForKey("GAME_STATS_ELO")}: <span profile_data="elo"></span></div>
                                </div>

                                <div class="category">
                                    <div class="category_title">${Application.languageManager.getValueForKey("GAME_STATS_GAMES")}</div>
                                    <div>${Application.languageManager.getValueForKey("GAME_STATS_GAMES_PLAYED")}: <span profile_data="games_played"></span></div>
                                    <div>${Application.languageManager.getValueForKey("GAME_STATS_GAMES_WON")}: <span profile_data="games_won"></span></div>
                                    <div>${Application.languageManager.getValueForKey("GAME_STATS_GAMES_LOST")}: <span profile_data="games_lost"></span></div>
                                    <div>${Application.languageManager.getValueForKey("GAME_STATS_WIN_RATE")}: <span profile_data="win_rate"></span></div>
                                    <div>${Application.languageManager.getValueForKey("GAME_STATS_BEST_STREAK")}: <span profile_data="best_streak"></span></div>
                                </div>

                                <div class="category">
                                    <div class="category_title">${Application.languageManager.getValueForKey("GAME_STATS_GENERAL")}</div>
                                    <div>${Application.languageManager.getValueForKey("GAME_STATS_SHOTS")}: <span profile_data="shots"></span></div>
                                    <div>${Application.languageManager.getValueForKey("GAME_STATS_SHOTS_PER_MATCH")}: <span profile_data="shots_per_match"></span></div>
                                    <div>${Application.languageManager.getValueForKey("GAME_STATS_GOALS")}: <span profile_data="goals"></span></div>
                                    <div>${Application.languageManager.getValueForKey("GAME_STATS_GOALS_PER_MATCH")}: <span profile_data="goals_per_match"></span></div>
                                    <div>${Application.languageManager.getValueForKey("GAME_STATS_HAT_TRICKS")}: <span profile_data="hat_tricks"></span></div>
                                    <div>${Application.languageManager.getValueForKey("GAME_STATS_ASSISTS")}: <span profile_data="assists"></span></div>
                                    <div>${Application.languageManager.getValueForKey("GAME_STATS_ASSISTS_PER_MATCH")}: <span profile_data="assists_per_match"></span></div>
                                    <div>${Application.languageManager.getValueForKey("GAME_STATS_SAVES")}: <span profile_data="saves"></span></div>
                                    <div>${Application.languageManager.getValueForKey("GAME_STATS_SAVES_PER_MATCH")}: <span profile_data="saves_per_match"></span></div>
                                    <div>${Application.languageManager.getValueForKey("GAME_STATS_PASS_ACCURACY")}: <span profile_data="pass_accuracy"></span></div>
                                    <div>${Application.languageManager.getValueForKey("GAME_STATS_PASS_PER_MATCH")}: <span profile_data="pass_per_match"></span></div>
                                </div>

                                <div class="category">
                                    <div class="category_title">${Application.languageManager.getValueForKey("GAME_STATS_GOALKEEPER")}</div>
                                    <div>${Application.languageManager.getValueForKey("GAME_STATS_PLAYED_GK")}: <span profile_data="played_gk"></span></div>
                                    <div>${Application.languageManager.getValueForKey("GAME_STATS_CS")}: <span profile_data="cs"></span></div>
                                    <div>${Application.languageManager.getValueForKey("GAME_STATS_CS_PERCENTAGE")}: <span profile_data="cs_percentage"></span></div>
                                </div>

                                <div class="category">
                                    <div class="category_title">${Application.languageManager.getValueForKey("GAME_STATS_BADGES")}</div>
                                    <div>${Application.languageManager.getValueForKey("GAME_GENERAL_NOT_AVAILABLE")}</div>
                                </div>
                            </div>

                            <div class="bottom"><button class="close">${Application.languageManager.getValueForKey("GAME_GENERAL_CLOSE")}</button></div>
                        </div>
                    </div>

                    <div class="modal" id="settings">
                        <div class="container">
                            <div class="title">
                                <div class="title_content"><img src="assets/images/icons/settings.svg"> ${Application.languageManager.getValueForKey("GAME_SETTINGS")}</div>
                            </div>

                            <div class="content">
                                <ul class="menu">
                                    <li category="graphics" class="selected">${Application.languageManager.getValueForKey("GAME_MENU_GRAPHICS")}</li>
                                    <li category="audio">${Application.languageManager.getValueForKey("GAME_MENU_AUDIO")}</li>
                                    <li category="inputs">${Application.languageManager.getValueForKey("GAME_MENU_INPUTS")}</li>
                                </ul>

                                <div class="category" category_name="graphics">
                                    <div class="row">
                                        <span>${Application.languageManager.getValueForKey("GAME_MENU_GRAPHICS_ZOOM")}</span>
                                        <select type="settings" settings_category="graphics" settings_val="zoom">
                                            <option value="1">${Application.languageManager.getValueForKey("GAME_MENU_GRAPHICS_ZOOM")} 1x</option>
                                            <option value="1.25">${Application.languageManager.getValueForKey("GAME_MENU_GRAPHICS_ZOOM")} 1.25x</option>
                                            <option value="1.5">${Application.languageManager.getValueForKey("GAME_MENU_GRAPHICS_ZOOM")} 1.5x</option>
                                            <option value="1.75">${Application.languageManager.getValueForKey("GAME_MENU_GRAPHICS_ZOOM")} 1.75x</option>
                                            <option value="2">${Application.languageManager.getValueForKey("GAME_MENU_GRAPHICS_ZOOM")} 2x</option>
                                            <option value="2.25">${Application.languageManager.getValueForKey("GAME_MENU_GRAPHICS_ZOOM")} 2.25x</option>
                                            <option value="2.5">${Application.languageManager.getValueForKey("GAME_MENU_GRAPHICS_ZOOM")} 2.5x</option>
                                        </select>
                                    </div>

                                    <div class="row">
                                        <span>${Application.languageManager.getValueForKey("GAME_MENU_GRAPHICS_FPS")}</span>
                                        <select type="settings" settings_category="graphics" settings_val="fps">
                                            <option value="0">${Application.languageManager.getValueForKey("GAME_MENU_GRAPHICS_FPS_NO_LIMIT")}</option>
                                            <option value="60">60</option>
                                            <option value="30">30</option>
                                            <option value="20">20</option>
                                            <option value="10">10</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="category" category_name="audio">
                                    <div class="row">
                                        <span>${Application.languageManager.getValueForKey("GAME_MENU_AUDIO_GENERAL")}</span>
                                        
                                        <div class="toggle-rect">
                                            <input type="checkbox" id="settings_audio_general" settings_category="audio" settings_val="general">
                                            <label for="settings_audio_general"></label>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <span>${Application.languageManager.getValueForKey("GAME_MENU_AUDIO_CHAT")}</span>
                                        
                                        <div class="toggle-rect">
                                            <input type="checkbox" id="settings_audio_chat" settings_category="audio" settings_val="chat">
                                            <label for="settings_audio_chat"></label>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <span>${Application.languageManager.getValueForKey("GAME_MENU_AUDIO_GAME")}</span>
                                        
                                        <div class="toggle-rect">
                                            <input type="checkbox" id="settings_audio_game" settings_category="audio" settings_val="game">
                                            <label for="settings_audio_game"></label>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <span>${Application.languageManager.getValueForKey("GAME_MENU_AUDIO_NOTIFICATION")}</span>
                                        
                                        <div class="toggle-rect">
                                            <input type="checkbox" id="settings_audio_notif" settings_category="audio" settings_val="notif">
                                            <label for="settings_audio_notif"></label>
                                        </div>
                                    </div>
                                </div>

                                <div class="category" category_name="inputs">
                                    <div id="recordKey"><div>${Application.languageManager.getValueForKey("GAME_MENU_INPUTS_PRESS")}</div></div>

                                    <div class="row inputs">
                                        <span>${Application.languageManager.getValueForKey("GAME_MENU_INPUTS_UP")}</span>
                                        
                                        <div class="inputs_value" settings_category="inputs" settings_val="up"></div>
                                    </div>

                                    <div class="row inputs">
                                        <span>${Application.languageManager.getValueForKey("GAME_MENU_INPUTS_DOWN")}</span>
                                        
                                        <div class="inputs_value" settings_category="inputs" settings_val="down"></div>
                                    </div>

                                    <div class="row inputs">
                                        <span>${Application.languageManager.getValueForKey("GAME_MENU_INPUTS_LEFT")}</span>
                                        
                                        <div class="inputs_value" settings_category="inputs" settings_val="left"></div>
                                    </div>

                                    <div class="row inputs">
                                        <span>${Application.languageManager.getValueForKey("GAME_MENU_INPUTS_RIGHT")}</span>
                                        
                                        <div class="inputs_value" settings_category="inputs" settings_val="right"></div>
                                    </div>

                                    <div class="row inputs">
                                        <span>${Application.languageManager.getValueForKey("GAME_MENU_INPUTS_KICK")}</span>
                                        
                                        <div class="inputs_value" settings_category="inputs" settings_val="kick"></div>
                                    </div>

                                    <div class="row inputs">
                                        <span>${Application.languageManager.getValueForKey("GAME_MENU_INPUTS_TOGGLE_CHAT")}</span>
                                        
                                        <div class="inputs_value" settings_category="inputs" settings_val="toggle_chat"></div>
                                    </div>
                                </div>
                            </div>

                            <div class="bottom"><button class="close">${Application.languageManager.getValueForKey("GAME_GENERAL_CLOSE")}</button></div>
                        </div>
                    </div>

                    <div class="modal" id="friends">
                        <div class="container">
                            <div class="title">
                                <div class="title_content"><img src="assets/images/icons/heart.svg"> ${Application.languageManager.getValueForKey("GAME_FRIENDS")}</div>
                            </div>

                            <div class="content" id="friendsList"></div>

                            <div class="bottom"><button class="close">${Application.languageManager.getValueForKey("GAME_GENERAL_CLOSE")}</button></div>
                        </div>
                    </div>

                    <div class="modal" id="shop">
                        <div class="container">
                            <div class="title">
                                <div class="title_content"><img src="assets/images/icons/basket.svg"> ${Application.languageManager.getValueForKey("GAME_SHOP")}</div>
                            </div>

                            <div class="flex">
                                <div class="categorys">
                                    <div class="coin"><img src="assets/images/icons/coin.png"> <span id="shopCoinVal"></span></div>

                                    <div id="shopCategorys"></div>
                                </div>

                                <div class="items" id="shopItems"></div>
                            </div>

                            <div class="bottom"><button class="close">${Application.languageManager.getValueForKey("GAME_GENERAL_CLOSE")}</button></div>
                        </div>
                    </div>
                </div>

                <ul id="user_menu">
                    <li type="mute">${Application.languageManager.getValueForKey("GAME_USER_MENU_MUTE")}</li>
                    <li type="ban">${Application.languageManager.getValueForKey("GAME_USER_MENU_BAN")}</li>
                    <li type="profile">${Application.languageManager.getValueForKey("GAME_USER_MENU_PROFILE")}</li>
                    <li type="friend">${Application.languageManager.getValueForKey("GAME_USER_MENU_FRIEND")}</li>
                    <li type="report">${Application.languageManager.getValueForKey("GAME_USER_MENU_REPORT")}</li>
                    <li type="whisper">${Application.languageManager.getValueForKey("GAME_USER_MENU_WHISPER")}</li>
                </ul>

                <div class="bottom_container">
                    <div class="user">
                        <div class="left">
                            <div class="avatar" id="request_profile"><img src="${Application.resourceManager.resources["IMAGE_AVATAR_" + Application.currentUser?.avatar].src}" id="avatar"></div>

                            <div class="general_menu">
                                <div type="friends"><img src="assets/images/icons/heart.svg"></div>
                                <div type="shop"><img src="assets/images/icons/basket.svg"></div>
                                <div type="settings"><img src="assets/images/icons/settings.svg"></div>
                            </div>
                        </div>

                        <div class="right">
                            <div class="general_menu">
                                <div type="menu"><img src="assets/images/icons/menu.svg"></div>
                                <div type="leaderboard"><img src="assets/images/icons/leaderboard.svg"></div>
                                <div type="team"><img src="assets/images/icons/team.svg"></div>
                                <div type="admin"><img src="assets/images/icons/star.svg"></div>
                            </div>
                        </div>
                    </div>

                    <div class="chat">
                        <div id="chatContent"></div>

                        <form method="post" id="chatForm">
                            <select id="msgType">
                                <option value="#room">${Application.languageManager.getValueForKey("GAME_CHAT_OPTION_ROOM")}</option>
                                <option value="#team">${Application.languageManager.getValueForKey("GAME_CHAT_OPTION_TEAM")}</option>
                            </select>

                            <input type="text" id="chatMsg" maxlength="150" placeholder="${Application.languageManager.getValueForKey("GAME_CHAT_MESSAGE")}"/>
                        </form>
                    </div>

                    <ul id="list_users"></ul>

                    <div id="history"></div>
                </div>
            </div>`;
    }
}