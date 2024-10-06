import { WebSocket, WebSocketServer } from "ws";
import ClientInterface from "./ClientInterface";
import Player from "../Player/Player";
import Server from "../main";
import RegionServer from "../RegionServer/RegionServer";
import sha256 from 'sha256';
import {format} from 'date-fns';
import { Sanction } from "../Sanction/Sanction";
import Color from "../../shared/Color/Color";
import Score from "../../shared/Score/Score";
import RoomPlayer from "../../shared/RoomPlayer/RoomPlayer";
import Team from "../../shared/Team/Team";
import Config from "../Config/Config";
import Goal from "../../shared/Goal/Goal";
import { getLevel } from "../../shared/Level/Level";
import { getElo } from "../../shared/Elo/Elo";

export default class Client implements ClientInterface {
    id: string;
    ip: string;
    socket: WebSocket;
    player: null | Player;
    regionServer?: null | RegionServer;
    waitingForm: boolean;

    constructor(data: ClientInterface) {
        this.id = data.id;
        this.ip = data.ip;
        this.socket = data.socket;
        this.player = null;
        this.regionServer = null;
        this.waitingForm = false;
    }

    initEvents(): void {
        const instance = this;

        this.socket.on('message', function message(data: any) {
            if(data == null)
                return;

            const message = JSON.parse(data.toString());

            switch(message.key) {
                case "tryLogin": {
                    if(message.value == null)
                        return;

                    instance.tryLogin(message.value);
                    break;
                }

                case "tryRegister": {
                    if(message.value == null)
                        return;

                    instance.tryRegister(message.value);
                    break;
                }

                case "fetchingServers": {
                    instance.sendMsg("getAllServers", Server.regionServerManager.getAllServers())
                    break;
                }

                case "playerJoinRoom": {
                    if(message.value == null || instance.regionServer == null)
                        return;

                    const player = Server.playerManager.getPlayerById(message.value.playerId);
                    if(player == null || player.regionPlayer == null)
                        return;

                    player.regionPlayer.currentRoom = message.value.roomId;
                    Server.logger.sendLog("INFO", `${player.username} join the room: [${player.regionPlayer.region}] ${player.regionPlayer.currentRoom}`);
                    player.updateStateForAllFriends();
                    break;
                }

                case "playerLeftRoom": {
                    if(message.value == null || instance.regionServer == null)
                        return;

                    const player = Server.playerManager.getPlayerById(message.value);
                    if(player == null || player.regionPlayer == null)
                        return;

                    Server.logger.sendLog("INFO", `${player.username} left the room: [${player.regionPlayer.region}] ${player.regionPlayer.currentRoom}`);
                    player.regionPlayer.currentRoom = null;
                    player.updateStateForAllFriends();
                    break;
                }

                case "saveStats": {
                    if(message.value == null || instance.regionServer == null)
                        return;

                    const score = message.value.score as Score,
                        redTeam = message.value.redTeam as RoomPlayer[],
                        blueTeam = message.value.blueTeam as RoomPlayer[],
                        allPlayers = [...redTeam].concat([...blueTeam]),
                        gkRed = redTeam.sort((a, b) => b.gkTime - a.gkTime)[0],
                        gkBlue = blueTeam.sort((a, b) => b.gkTime - a.gkTime)[0];

                    let redElo = 0, // 400
                        blueElo = 0; // 1500

                    allPlayers.forEach((player) => {
                        const playerData = Server.playerManager.getPlayerById(player.id);

                        if(playerData == null)
                            return;

                        if(player.team.id == Team.RED.id)
                            redElo += playerData.stats.elo;
                        else
                            blueElo += playerData.stats.elo;
                    });

                    const redEloWon = blueElo - redElo,
                        blueEloWon = redElo - blueElo;

                    allPlayers.forEach((player) => {
                        let xpWon = 0;

                        const playerData = Server.playerManager.getPlayerById(player.id);

                        if(playerData == null)
                            return;
                    
                        const actualElo = getElo(playerData.stats.elo);

                        if(player.team.id == Team.RED.id && score.red > score.blue || player.team.id == Team.BLUE.id && score.blue > score.red) {
                            playerData.stats.games_won += 1;
                            playerData.addCoins(Config.STATS_COINS_BY_VICTORY);

                            xpWon += Config.STATS_XP_BY_VICTORY;
                            
                            if(player.team.id == Team.RED.id) {
                                if(redEloWon >= Config.STATS_MAX_ELO_PER_GAME)
                                    playerData.stats.elo += Config.STATS_MAX_ELO_PER_GAME;
                                else if(redEloWon <= Config.STATS_MIN_ELO_PER_GAME)
                                    playerData.stats.elo += Config.STATS_MIN_ELO_PER_GAME;
                                else
                                    playerData.stats.elo += Math.round(redEloWon);

                            } else if(player.team == Team.BLUE.id) {
                                if(blueEloWon >= Config.STATS_MAX_ELO_PER_GAME)
                                    playerData.stats.elo += Config.STATS_MAX_ELO_PER_GAME;
                                else if(blueEloWon <= Config.STATS_MIN_ELO_PER_GAME)
                                    playerData.stats.elo += Config.STATS_MIN_ELO_PER_GAME;
                                else
                                    playerData.stats.elo += Math.round(blueEloWon);
                            }
                        } else {
                            playerData.stats.games_lost += 1;

                            if(player.team.id == Team.RED.id) {
                                if(blueEloWon >= Config.STATS_MAX_ELO_PER_GAME)
                                    playerData.stats.elo -= Config.STATS_MAX_ELO_PER_GAME;
                                else if(blueEloWon <= Config.STATS_MIN_ELO_PER_GAME)
                                    playerData.stats.elo -= Config.STATS_MIN_ELO_PER_GAME;
                                else
                                    playerData.stats.elo -= Math.round(blueEloWon);

                                if(playerData.stats.elo < 0)
                                    playerData.stats.elo = 0;

                            } else if(player.team == Team.BLUE.id) {
                                if(redEloWon >= Config.STATS_MAX_ELO_PER_GAME)
                                    playerData.stats.elo -= Config.STATS_MAX_ELO_PER_GAME;
                                else if(redEloWon <= Config.STATS_MIN_ELO_PER_GAME)
                                    playerData.stats.elo -= Config.STATS_MIN_ELO_PER_GAME;
                                else
                                    playerData.stats.elo -= Math.round(redEloWon);

                                if(playerData.stats.elo < 0)
                                    playerData.stats.elo = 0;
                            }
                        }

                        if(player.streak > playerData.stats.best_streak)
                            playerData.stats.best_streak = player.streak;

                        playerData.stats.shots += player.shots;
                        player.goals.forEach((goal: Goal) => {
                            xpWon += Config.STATS_XP_BY_GOAL;
                            playerData.addCoins(Config.STATS_COINS_BY_GOAL);

                            playerData.stats.goals += 1;

                            if(goal.assist_id != null && ((player.team.id == Team.RED.id && redTeam.filter((p) => p.id == goal.assist_id && p.team.id == Team.RED.id)[0] != null) || (player.team.id == Team.BLUE.id && blueTeam.filter((p) => p.id == goal.assist_id && p.team.id == Team.BLUE.id)[0] != null))) {
                                const assistPlayer = Server.playerManager.getPlayerById(goal.assist_id);
                                if(assistPlayer == null)
                                    return;

                                assistPlayer.addCoins(Config.STATS_COINS_BY_ASSISTS);
                                assistPlayer.stats.assists += 1;
                                assistPlayer.stats.level_xp += Config.STATS_XP_BY_ASSISTS;
                                assistPlayer.stats.save();
                            }
                        });

                        if(player.goals.length == 3)
                            playerData.stats.hat_tricks += 1;

                        playerData.stats.saves += player.saves;
                        playerData.stats.pass_successful += player.pass_successful;
                        playerData.stats.pass_missed += player.pass_missed;

                        if(player == gkRed || player == gkBlue) {
                            playerData.stats.played_gk += 1;

                            if(player == gkRed && score.blue == 0 || player == gkBlue && score.red == 0) {
                                playerData.stats.cs += 1;
                                xpWon += Config.STATS_XP_BY_CS;
                                playerData.addCoins(Config.STATS_COINS_BY_CS);
                            }
                        }

                        const actualLevel = getLevel(playerData.stats.level_xp);
                        playerData.stats.level_xp += xpWon;

                        if(actualLevel != getLevel(playerData.stats.level_xp))
                            playerData.sendMsg("chatMessage", {type: "announcement", message: "GAME_CHAT_LEVEL_UP", params: [getLevel(playerData.stats.level_xp)], color: Color.ROOM_ANNOUNCEMENT, officialTrad: true});

                        if(actualElo.name != getElo(playerData.stats.elo).name || actualElo.value != getElo(playerData.stats.elo).value)
                            playerData.sendMsg("chatMessage", {type: "announcement", message: "GAME_CHAT_RANK_UP", params: [`%TRAD_${getElo(playerData.stats.elo).name}`, getElo(playerData.stats.elo).value], color: Color.ROOM_ANNOUNCEMENT, officialTrad: true});
                        
                        playerData.stats.save();
                    });
                    break;
                }

                case "successLogin": {
                    if(message.value == null || instance.regionServer == null)
                        return;

                    const player = Server.playerManager.getPlayerById(message.value.id);
                    if(player == null)
                        return;

                    player.regionPlayer = message.value;
                    player.updateStateForAllFriends("login");
                    Server.logger.sendLog("INFO", `${player.username} just logged in on server region: [${player.regionPlayer?.region}].`);

                    player.client?.sendMsg("logged", {
                        id: player.id,
                        username: player.username,
                        rank: player.rank,
                        avatar: player.avatar,
                        coins: player.coins,
                        items: player.items,
                        friends: player.getFriendsList(),
                        currentServer: player.regionPlayer?.region,
                    });
                    
                    instance.sendMsg("joinRoom", {playerId: player.id});
                    break;
                }

                case "newChat": {
                    if(instance.player == null || message.value == null || message.value.type == null || message.value.message == null || message.value.type !instanceof String || message.value.message !instanceof String)
                        return;

                    instance.player.newChat(message.value.type, message.value.message);
                    break;
                }

                case "fetchShop": {
                    if(instance.player == null)
                        return;

                    const shopCategorys = Server.shopManager.getAllCategorys();
                    
                    instance.sendMsg("shopData", {
                        categorys: shopCategorys,
                        items: shopCategorys[0] != null ? shopCategorys[0].getItems() : []
                    })
                    break;
                }

                case "fetchItems": {
                    if(instance.player == null || message.value == null || message.value !instanceof String)
                        return;

                    const shopCategory = Server.shopManager.getCategoryByName(message.value);
                    if(shopCategory == null)
                        return;

                    instance.sendMsg("shopItems", shopCategory.getItems());
                    break;
                }

                case "toggleItem": {
                    if(instance.player == null || message.value == null || message.value !instanceof Number)
                        return;

                    instance.player.toggleItem(message.value);
                    break;
                }

                case "fetchFriends": {
                    if(instance.player == null)
                        return;
                    
                    instance.player.getFriendsList();
                    break;
                }

                case "addFriend": {
                    if(instance.player == null || message.value == null || message.value !instanceof String)
                        return;

                    instance.player.addFriend(message.value);
                    break;
                }

                case "report": {
                    if(instance.player == null || message.value == null || message.value !instanceof String)
                        return;

                    const player = Server.playerManager.getPlayerByUsername(message.value);
                    if(player == null || player == instance.player)
                        return;

                    if(Server.sanctionManager.getReportsByPlayer(instance.player, player) != null)
                        return instance.sendMsg("chatMessage", {type: "announcement", message: "GAME_CHAT_ALREADY_REPORTED", params: [player.username], color: Color.ERROR, sound: 1, officialTrad: true});

                    
                    Server.sanctionManager.newReport(instance.player, player);
                    instance.sendMsg("chatMessage", {type: "announcement", message: "GAME_CHAT_REPORTED", params: [player.username], color: Color.ROOM_ANNOUNCEMENT, officialTrad: true});
                    break;
                }

                case "deleteFriend": {
                    if(instance.player == null || message.value == null || message.value !instanceof Number)
                        return;

                    instance.player.deleteFriend(message.value);
                    break;
                }

                case "requestProfile": {
                    if(instance.player == null || message.value == null || message.value !instanceof String)
                        return;
                    
                    const player = Server.playerManager.getPlayerByUsername(message.value);
                    if(player == null)
                        return;

                    instance.player.sendMsg("profileData", {
                        username: player.username,
                        avatar: player.avatar,
                        rank: player.rank,
                        registered: format(player.registered, "dd/MM/yyyy"),
                        stats: player.stats.getStats(),
                        online: player.isOnline()
                    });

                    break;
                }

                case "fetchLeaderboard": {
                    if(instance.player == null || message.value == null || message.value !instanceof String)
                        return;

                    const leaderboardData = Server.playerManager.getPlayersLeaderboard(message.value);
                    if(leaderboardData == null)
                        return;

                    instance.sendMsg("leaderboardData", {
                        key: message.value,
                        players: leaderboardData
                    })
                    break;
                }

                case "fetchAdmin": {
                    if(
                        instance.player == null ||
                        ["user", "vip"].includes(instance.player.rank) ||
                        message.value == null ||
                        message.value.key == null ||
                        message.value.key !instanceof String
                    )
                        return;

                    switch(message.value.key) {
                        case "team": {
                            const team: any[] = [];

                            for(let i in Server.playerManager.players) {
                                const player = Server.playerManager.players[i];

                                if(!["user", "vip"].includes(player.rank))
                                    team.push({
                                        username: player.username,
                                        avatar: player.avatar,
                                        rank: player.rank
                                    })
                            }

                            instance.sendMsg("adminData", {category: message.value.key, team: team});
                            break;
                        }

                        case "reports": {
                            instance.sendMsg("adminData", {category: message.value.key, reports: Server.sanctionManager.getReportsList()});
                            break;
                        }

                        case "sanctions": {
                            instance.sendMsg("adminData", {category: message.value.key, sanctions: Server.sanctionManager.getSanctionsList()});
                            break;
                        }

                        case "chatlogs": {
                            if(message.value.username == null || message.value.username !instanceof String)
                                return;

                            const player = Server.playerManager.getPlayerByUsername(message.value.username);
                            if(player == null)
                                return;

                            instance.sendMsg("adminData", {category: message.value.key, logs: player.getChatLogsList()});
                            break;
                        }
                    }

                    break;
                }

                case "deleteReport": {
                    if(
                        instance.player == null ||
                        ["user", "vip"].includes(instance.player.rank) ||
                        message.value == null ||
                        message.value !instanceof Number
                    )
                        return;

                    Server.sanctionManager.deleteReport(message.value);
                    instance.sendMsg("adminData", {category: "reports", reports: Server.sanctionManager.getReportsList()});
                    break;
                }

                case "deleteSanction": {
                    if(
                        instance.player == null ||
                        ["user", "vip"].includes(instance.player.rank) ||
                        message.value == null ||
                        message.value !instanceof Number
                    )
                        return;

                    Server.sanctionManager.deleteSanction(message.value, instance.player);
                    instance.sendMsg("adminData", {category: "sanctions", sanctions: Server.sanctionManager.getSanctionsList()});
                    break;
                }

                case "adminRank": {
                    if(
                        instance.player == null ||
                        !["owner", "manager"].includes(instance.player.rank) ||
                        message.value == null ||
                        message.value.username == null ||
                        message.value.username !instanceof String ||
                        message.value.rank == null ||
                        message.value.rank !instanceof String
                    )
                        return;

                    const player = Server.playerManager.getPlayerByUsername(message.value.username);
                    if(player == null)
                        return instance.sendMsg("adminAlert", {error: true, message: "GAME_ADMIN_ERROR_USERNAME"});

                    if(player.rank == "owner")
                        return instance.sendMsg("adminAlert", {error: true, message: "GAME_ADMIN_ERROR_RANK_PERMS", args: [player.username]});

                    if(player.rank == message.value.rank.toLowerCase())
                        return instance.sendMsg("adminAlert", {error: true, message: "GAME_ADMIN_ERROR_RANK", args: [player.username, message.value.rank]});

                    player.updateRank(message.value.rank.toLowerCase());
                    instance.sendMsg("adminAlert", {message: "GAME_ADMIN_SUCCESS_RANK", args: [player.username, message.value.rank]});
                }

                case "adminSanction": {
                    if(
                        instance.player == null ||
                        ["user", "vip"].includes(instance.player.rank) ||
                        message.value == null ||
                        message.value.username == null ||
                        message.value.username !instanceof String ||
                        message.value.type == null ||
                        message.value.type !instanceof String ||
                        !["mute", "ban"].includes(message.value.type) ||
                        message.value.time == null ||
                        message.value.reason == null ||
                        message.value.reason !instanceof String ||
                        message.value.reason.length > 150 
                    )
                        return;

                    const player = Server.playerManager.getPlayerByUsername(message.value.username);
                    if(player == null)
                        return instance.sendMsg("adminAlert", {error: true, message: "GAME_ADMIN_ERROR_USERNAME"});

                    if(player == instance.player || !["user", "vip"].includes(player.rank))
                        return instance.sendMsg("adminAlert", {error: true, message: "GAME_ADMIN_ERROR_SANCTION_PERMS", args: [player.username]});

                    const time = parseInt(message.value.time);

                    if(isNaN(time) || 0 >= time)
                        return instance.sendMsg("adminAlert", {error: true, message: "GAME_ADMIN_ERROR_SANCTION_DURATION"});

                    const sanction = Server.sanctionManager.getActiveSanction(message.value.type, player.id);
                    if(sanction != null) {
                        if(message.value.type == "ban")
                            return instance.sendMsg("adminAlert", {error: true, message: "GAME_ADMIN_ERROR_SANCTION_ALREADY_BAN", args: [player.username]});
                        else
                            return instance.sendMsg("adminAlert", {error: true, message: "GAME_ADMIN_ERROR_SANCTION_ALREADY_MUTED", args: [player.username]});
                    }

                    Server.sanctionManager.newSanction(message.value.type.toLowerCase(), time, message.value.reason, player, instance.player).then((sanction: Sanction) => {
                        if(player.isOnline()) {
                            if(player.regionPlayer != null) {
                                if(message.value.type == "ban") {
                                    player.sendRegionMsg("announcement", {message: "GAME_SANCTION_BAN", params: [player.username, time], roomId: player.regionPlayer.currentRoom});
                                } else
                                    player.sendRegionMsg("announcement", {message: "GAME_SANCTION_MUTE", params: [player.username, time], roomId: player.regionPlayer.currentRoom});
                            }

                            if(message.value.type == "ban") {
                                for(let i in Server.playerManager.players) {
                                    const player = Server.playerManager.players[i];

                                    if(player.ip == sanction.ip || player.ip_registered == sanction.ip)
                                        player.destroy("ACCOUNT_ERROR_BANNED", [format(sanction.end_date, "dd/MM/yyyy HH:mm")]);
                                }
                            }
                        }

                        if(message.value.type == "ban")
                            return instance.sendMsg("adminAlert", {message: "GAME_SANCTION_BAN", args: [player.username, time]});
                        else
                            return instance.sendMsg("adminAlert", {message: "GAME_SANCTION_MUTE", args: [player.username, time]});

                    }).catch((err) => {
                        Server.logger.sendCriticalError(err);
                    })
                }
            }
        });

        this.socket.on('close', function close() {
            Server.clientManager.destroyClient(instance.id);
        });
    }

    tryRegister(data: any): void {
        if(this.waitingForm || this.player != null)
            return;

        if(
            data == null || 
            data.username == null || 
            data.username.length == 0 || 
            data.password == null || 
            data.password.length == 0 || 
            data.password_confirm == null || 
            data.password_confirm.length == 0 || 
            data.server == null || 
            data.server.length == 0 || 
            data.serverClientId == null || 
            data.serverClientId.length == 0 || 
            data.username !instanceof String || 
            data.password !instanceof String || 
            data.password_confirm !instanceof String || 
            data.server !instanceof String || 
            data.serverClientId !instanceof String
        )
            return this.sendMsg("errorLogin", "ACCOUNT_ERROR_FIELDS");

        if(data.username.length < 3 || data.username.length > 15)
            return this.sendMsg("errorLogin", "ACCOUNT_ERROR_USERNAME_LENGTH");

        if(!isNaN(data.username.charAt(0)))
            return this.sendMsg("errorLogin", "ACCOUNT_ERROR_USERNAME_START_NUMBER");

        if(!data.username.match(/^[a-z0-9]+$/i))
            return this.sendMsg("errorLogin", "ACCOUNT_ERROR_USERNAME_ALPHANUMERIC");

        const player = Server.playerManager.getPlayerByUsername(data.username);
        if(player != null)
            return this.sendMsg("errorLogin", "ACCOUNT_ERROR_USERNAME_ALREADY_USED");

        if(data.password.length < 6)
            return this.sendMsg("errorLogin", "ACCOUNT_ERROR_PASSWORD_LENGTH");

        if(data.password != data.password_confirm)
            return this.sendMsg("errorLogin", "ACCOUNT_ERROR_PASSWORDS_DIFFERENT");

        const server = Server.regionServerManager.getServerById(data.server);
        if(server == null)
            return this.sendMsg("errorLogin", "ACCOUNT_INVALID_SERVER");

        this.waitingForm = true;
        const instance = this;
        Server.playerManager.newPlayer(this, data.username, sha256(data.password)).then((message) => {
            Server.logger.sendLog("INFO", message);
            instance.tryLogin({
                username: data.username,
                password: data.password,
                server: data.server,
                serverClientId: data.serverClientId
            })
        }).catch((err) => Server.logger.sendCriticalError(err));
    }

    tryLogin(data: any): void {
        if(this.player != null)
            return this.sendMsg("errorLogin", "ACCOUNT_ERROR_ALREADY_LOGGED");

        if(data == null || data.username == null || data.username.length == 0 || data.password == null || data.password.length == 0 || data.server == null || data.server.length == 0 || data.serverClientId == null || data.serverClientId.length == 0 || data.username !instanceof String || data.password !instanceof String || data.server !instanceof String || data.serverClientId !instanceof String)
            return this.sendMsg("errorLogin", "ACCOUNT_ERROR_FIELDS");

        const player = Server.playerManager.getPlayerByUsername(data.username);
        if(player == null || player.password != sha256(data.password))
            return this.sendMsg("errorLogin", "ACCOUNT_ERROR_INVALID");

        if(player.client != null || player.regionPlayer != null)
            return this.sendMsg("errorLogin", "ACCOUNT_ERROR_ALREADY_LOGGED");
        
        const banned = Server.sanctionManager.getActiveBan(player.id, this.ip)
        if(banned != null)
            return this.sendMsg("errorLogin", {key: "ACCOUNT_ERROR_BANNED", args: [format(banned.end_date, "dd/MM/yyyy HH:mm")]});

        const server = Server.regionServerManager.getServerById(data.server);
        if(server == null)
            return this.sendMsg("errorLogin", "ACCOUNT_INVALID_SERVER");

        this.player = player;
        player.client = this;
        this.player.onLogin(this.ip);

        server.client.sendMsg("tryLogin", {
            clientId: this.id,
            serverClientId: data.serverClientId,
            id: this.player.id,
            username: this.player.username,
            avatar: this.player.avatar,
            rank: this.player.rank
        })
    }

    sendMsg(key: string, value: any = null): void {
        const message = JSON.stringify({key: key, value: value});
        this.socket.send(message);
    }

    destroy(): void {
        if(this.player != null)
        {
            this.player.destroy();
            this.player = null;
        }

        if(this.regionServer != null) {
            Server.regionServerManager.destroyServer(this.regionServer.id);
            this.regionServer = null;
        }
    }
}