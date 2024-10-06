import Client from "../Client/Client";
import Server from "../main";
import PlayerInterface from "./PlayerInterface";
import { RegionPlayerType } from "../../shared/RegionPlayer/RegionPlayerType";
import Mysql from 'mysql';
import PlayerStats from "./PlayerStats/PlayerStats";
import Color from "../../shared/Color/Color";
import {format} from 'date-fns';
import { Sanction } from "../Sanction/Sanction";
import PlayerLogs from "./PlayerLogs/PlayerLogs";

export default class Player implements PlayerInterface {
    id: number;
    client: null | Client;
    regionPlayer: RegionPlayerType | null;
    username: string;
    password: string;
    rank: string;
    ip_registered: string;
    ip: string;
    registered: Date;
    last_login: Date;
    avatar: number;
    coins: number;
    items: Number[];
    friends: number[];
    stats: PlayerStats;
    logs: PlayerLogs[];

    constructor(data: PlayerInterface) {
        this.id = data.id;
        this.client = data.client || null;
        this.regionPlayer = null;
        this.username = data.username;
        this.password = data.password;
        this.rank = data.rank || "user";
        this.ip_registered = data.ip_registered;
        this.ip = data.ip;
        this.registered = data.registered;
        this.last_login = data.last_login;
        this.avatar = data.avatar || 1;
        this.coins = data.coins || 0;
        this.items = [];
        this.friends = [];
        this.stats = new PlayerStats(this.id);
        this.logs = [];
    }

    sendMsg(key: string, value: any = null): void {
        if(this.client == null)
            return;

        this.client.sendMsg(key, value);
    }

    updateStateForAllFriends(state: string | null = null): void {
        for(let i in Server.playerManager.players) {
            const player = Server.playerManager.players[i];
            if(!player.isOnline() || !player.hasFriend(this.id))
                return;

            switch(state) {
                case "login": {
                    player.sendMsg("chatMessage", {type: "announcement", message: "GAME_CHAT_FRIEND_LOGIN", params: [this.username], color: Color.FRIEND, officialTrad: true});
                    break;
                }

                case "logout": {
                    player.sendMsg("chatMessage", {type: "announcement", message: "GAME_CHAT_FRIEND_LOGOUT", params: [this.username], color: Color.FRIEND, officialTrad: true});
                    break;
                }
            }

            player.updateFriendsList();
        }
    }

    updateFriendsList(): void {
        if(this.client == null)
            return;

        this.sendMsg("friendsData", this.getFriendsList());
    }

    getFriendsList(): any[] {
        const friends: any[] = [];

        this.friends.forEach((friend) => {
            const player = Server.playerManager.getPlayerById(friend);
            if(player == null)
                return this.deleteFriend(friend, false);

            friends.push({
                id: player.id,
                username: player.username,
                serverRegion: player.regionPlayer && player.hasFriend(this.id) ? { region: player.regionPlayer.region, currentRoom: player.regionPlayer.currentRoom } : null,
                online: player.isOnline()
            })
        });

        friends.sort((a, b) => b.online - a.online);
        return friends;
    }

    addFriend(friendUsername: string): void {        
        const player = Server.playerManager.getPlayerByUsername(friendUsername);
        if(player == null || this.friends.includes(player.id))
            return;

        if(this.friends.length >= 100)
            return this.sendMsg("chatMessage", {type: "announcement", message: "GAME_CHAT_FRIEND_ERROR_MAX", params: [100], color: Color.ERROR, sound: 1, officialTrad: true});

        this.friends.push(player.id);
        this.updateFriendsList();
        this.sendMsg("chatMessage", {type: "announcement", message: "GAME_CHAT_FRIEND_ADDED", params: [player.username], color: Color.FRIEND, officialTrad: true});

        if(player.isOnline()) {
            if(!player.hasFriend(this.id))
                player.sendMsg("chatMessage", {type: "announcement", message: "GAME_CHAT_FRIEND_OTHER_ADDED", params: [this.username], color: Color.FRIEND, officialTrad: true})
            else {
                player.sendMsg("chatMessage", {type: "announcement", message: "GAME_CHAT_FRIEND_OTHER_ADDED_BACK", params: [this.username], color: Color.FRIEND, officialTrad: true})
                player.updateFriendsList();
            }
        }

        (Server.databaseManager.connection as Mysql.Connection).query("INSERT INTO users_friends (user_id, friend_id) VALUES (?, ?)", [this.id, player.id], (err: any) => {
            if(err)
                return Server.logger.sendCriticalError("Mysql Error: " + err.stack)
        })
    }

    deleteFriend(friendId: number, sendData: boolean = true): void {
        if(!this.friends.includes(friendId))
            return;

        this.friends = this.friends.filter(playerId => playerId !== friendId);
        if(sendData)
            this.updateFriendsList();

        const player = Server.playerManager.getPlayerById(friendId);
        if(player != null && player.isOnline() && player.hasFriend(this.id))
            player.updateFriendsList();

        (Server.databaseManager.connection as Mysql.Connection).query("DELETE from users_friends WHERE user_id = ? AND friend_id = ?", [this.id, friendId], (err: any) => {
            if(err)
                return Server.logger.sendCriticalError("Mysql Error: " + err.stack)
        })
    }

    hasFriend(playerId: number) {
        if(this.friends.includes(playerId))
            return true;

        return false;
    }

    isOnline(): boolean {
        if(this.regionPlayer != null)
            return true;

        return false;
    }

    onLogin(ip: string): void {
        this.ip = ip;
        this.last_login = new Date();

        (Server.databaseManager.connection as Mysql.Connection).query("UPDATE users SET ip = ?, last_login = ? WHERE id = ?", [this.ip, this.last_login, this.id], (err: any) => {
            if(err)
                return Server.logger.sendCriticalError("Mysql Error: " + err.stack)
        })
    }

    addItem(item: number): void {
        if(this.items.includes(item))
            return;
        
        this.items.push(item);

        (Server.databaseManager.connection as Mysql.Connection).query("INSERT INTO users_items (user_id, item_id) VALUES (?, ?)", [this.id, item], (err: any) => {
            if(err)
                return Server.logger.sendCriticalError("Mysql Error: " + err.stack)
        });

        this.sendMsg("addItem", item);
    }

    updateRank(rank: string): void {
        this.rank = rank;

        (Server.databaseManager.connection as Mysql.Connection).query("UPDATE users SET rank = ? WHERE id = ?", [this.rank, this.id], (err: any) => {
            if(err)
                return Server.logger.sendCriticalError("Mysql Error: " + err.stack)
        });

        this.sendMsg("rankUpdate", this.rank);
        this.sendRegionMsg("rankUpdate", {playerId: this.id, rank: this.rank});
    }

    setAvatar(avatarId: number): void {
        this.avatar = avatarId;

        (Server.databaseManager.connection as Mysql.Connection).query("UPDATE users SET avatar = ? WHERE id = ?", [this.avatar, this.id], (err: any) => {
            if(err)
                return Server.logger.sendCriticalError("Mysql Error: " + err.stack)
        });

        this.sendMsg("avatarUpdate", this.avatar);
        this.sendRegionMsg("avatarUpdate", {playerId: this.id, avatar: this.avatar});
    }

    toggleItem(itemId: number): void {
        if(itemId == this.avatar)
            return;

        if(this.items.includes(itemId))
            return this.setAvatar(itemId);

        const item = Server.shopManager.getItemById(itemId);
        if(item == null || item.price > this.coins)
            return;

        this.removeCoins(item.price);
        this.addItem(itemId);
    }

    addCoins(value: number): void {
        this.coins += value;
        this.sendMsg("coins", this.coins);

        (Server.databaseManager.connection as Mysql.Connection).query("UPDATE users SET coins = ? WHERE id = ?", [this.coins, this.id], (err: any) => {
            if(err)
                return Server.logger.sendCriticalError("Mysql Error: " + err.stack)
        });
    }

    removeCoins(value: number): void {
        this.coins -= value;
        this.sendMsg("coins", this.coins);

        (Server.databaseManager.connection as Mysql.Connection).query("UPDATE users SET coins = ? WHERE id = ?", [this.coins, this.id], (err: any) => {
            if(err)
                return Server.logger.sendCriticalError("Mysql Error: " + err.stack)
        });
    }

    newChat(type: string, message: string) {
        if(this.regionPlayer == null || type.length == 0 || message.length == 0)
            return;

        if(message.length > 150)
            message = message.substring(0, 150);

        if(message.startsWith("/")) {
            const splitMsg = message.substring(1).split(" ");
            const commandName = splitMsg[0];

            if(commandName == null || commandName.length == 0)
                return false;

            switch(commandName.toLowerCase()) {
                case "c":
                case "w":
                {
                    const username = splitMsg[1],
                        message = splitMsg.slice(2).join(' ');

                    if(username == null || username.length == 0 || message == null || message.length == 0 || ["#room", "#team"].includes(username))
                        return;

                    this.newChat(username, message);
                    break;
                }

                case "profile":
                case "profil":
                {
                    const username = splitMsg[1];
                    if(username == null || username.length == 0)
                        return;

                    const player = Server.playerManager.getPlayerByUsername(username);
                    if(player == null)
                        return;

                    this.sendMsg("profileData", {
                        username: player.username,
                        avatar: player.avatar,
                        rank: player.rank,
                        registered: format(player.registered, "dd/MM/yyyy"),
                        stats: player.stats.getStats(),
                        online: player.isOnline()
                    });
                    break;
                }

                case "friend": 
                case "ami":
                {
                    const username = splitMsg[1];
                    if(username == null || username.length == 0)
                        return;

                    this.addFriend(username);
                    break;
                }

                case "room": 
                case "salon":
                {
                    const roomName = splitMsg[1];
                    if(roomName == null || roomName.length == 0)
                        return;

                    this.sendRegionMsg("joinRoom", {playerId: this.id, roomId: roomName});
                    break;
                }

                default: {
                    this.sendMsg("chatMessage", {type: "announcement", message: "GAME_CHAT_INVALID_COMMAND", color: Color.ERROR, sound: 1, officialTrad: true});
                    break;
                }
            }

            return;
        }

        const muted = this.checkIfIsMuted();
        if(muted != null) {
            const now = new Date();
            const diff = Math.abs(muted.end_date.getTime() - now.getTime()),
                minutes = Math.floor((diff/1000)/60),
                hours = Math.round(minutes/60);

            if(hours > 0)
                return this.sendMsg("chatMessage", {type: "announcement", message: "GAME_CHAT_MUTED_HOURS", params: [hours], sound: 1, officialTrad: true});
            else
                return this.sendMsg("chatMessage", {type: "announcement", message: "GAME_CHAT_MUTED_MINUTES", params: [minutes], sound: 1, officialTrad: true});
        }

        switch(type) {
            case "#room":
            case "#team":
            {
                this.sendRegionMsg("messageChat", {clientId: this.regionPlayer.clientId, type: type, message: message});

                this.logs.push(new PlayerLogs({
                    message: message,
                    server_region: this.regionPlayer.region,
                    room: this.regionPlayer.currentRoom,
                    date: new Date()
                }));

                if(this.logs.length > 100) {
                    this.logs.shift()
                }

                (Server.databaseManager.connection as Mysql.Connection).query('INSERT INTO chatlogs (user_id, message, server_region, room, date) VALUES (?, ?, ?, ?, NOW())', [this.id, message, this.regionPlayer.region, this.regionPlayer.currentRoom], function (err: any) {
                    if(err)
                        Server.logger.sendCriticalError("Mysql Error: " + err.stack);

                });
                break;
            }

            default: {
                const player = Server.playerManager.getPlayerByUsername(type);
                if(player == null || player.client == null)
                    return this.sendMsg("chatMessage", {type: "announcement", message: "GAME_CHAT_PM_OFFLINE", params: [type], color: Color.ERROR, sound: 1, officialTrad: true});

                if(player == this)
                    return;

                this.sendMsg("chatMessage", {type: "pm_to", username: player?.username, message: message});
                player?.client?.sendMsg("chatMessage", {type: "pm_from", username: this.username, message: message});

                this.logs.push(new PlayerLogs({
                    pm_user_id: player.id,
                    message: message,
                    server_region: this.regionPlayer.region,
                    date: new Date()
                }));

                if(this.logs.length > 100) {
                    this.logs.shift()
                }

                (Server.databaseManager.connection as Mysql.Connection).query('INSERT INTO chatlogs (user_id, pm_user_id, message, server_region, date) VALUES (?, ?, ?, ?, NOW())', [this.id, player?.id, message, this.regionPlayer.region], function (err: any) {
                    if(err)
                        Server.logger.sendCriticalError("Mysql Error: " + err.stack);

                });
            }
        }
    }

    getChatLogsList(): any[] {
        const logsList: any[] = [];

        this.logs.forEach((log: PlayerLogs) => {
            if(log.pm_user_id != null) {
                const player = Server.playerManager.getPlayerById(log.pm_user_id);
                if(player != null)
                    logsList.push(`[${format(log.date, "dd/MM/yyyy HH:mm")} - PM to ${player.username}] ${log.message}.`)
            }
            else
                logsList.push(`[${format(log.date, "dd/MM/yyyy HH:mm")} - ${log.server_region} - Room ${log.room}] ${log.message}.`)
        });

        return logsList.reverse();
    }

    checkIfIsMuted(): Sanction | null {
        const muted = Server.sanctionManager.getActiveSanction("mute", this.id);
        if(muted != null)
            return muted;

        return null;
    }

    sendRegionMsg(key: string, value: any = null): void {
        if(this.regionPlayer == null)
            return;

        const server = Server.regionServerManager.getServerById(this.regionPlayer.region);
        if(server == null)
            return;

        server.client.sendMsg(key, value);
    }

    destroy(forceDisconnect: string | null = null, params: any[] = []): void {
        if(this.client != null) {
            if(forceDisconnect)
                this.client.sendMsg("disconnect", {key: forceDisconnect, params: params});
            
            this.client.player = null;
            this.client = null;
        }

        if(this.regionPlayer != null && forceDisconnect)
            this.sendRegionMsg("forceDisconnect", this.id);

        this.regionPlayer = null;
        this.updateStateForAllFriends("logout");
        Server.logger.sendLog("INFO", `${this.username} just logged out.`);
    }
}