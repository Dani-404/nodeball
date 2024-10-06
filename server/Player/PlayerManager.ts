import Mysql from 'mysql'
import Server from '../main';
import Player from './Player';
import PlayerInterface from './PlayerInterface';
import PlayerStats from './PlayerStats/PlayerStats';
import Client from '../Client/Client';
import PlayerLogs from './PlayerLogs/PlayerLogs';

type PlayersType = {
    [key: number]: Player
}

export default class PlayerManager {
    players: PlayersType;

    constructor() {
        this.players = {};
    }

    init(): Promise<string> {
        return new Promise((resolve, reject) => {
            const instance = this;

            (Server.databaseManager.connection as Mysql.Connection).query('SELECT * FROM users', function (err, results) {
                if(err) {
                    reject("Mysql Error: " + err.stack);
                    return;
                }

                if(results.length == 0)
                    resolve("Loaded 0 users.")

                let count = 0;

                results.forEach((playerData: PlayerInterface) => {
                    const player = new Player(playerData);
                    instance.players[player.id] = player;

                    (Server.databaseManager.connection as Mysql.Connection).query('SELECT * FROM users_stats WHERE user_id = ?', [player.id], function (err, resultsStats) {
                        if(err) {
                            reject("Mysql Error: " + err.stack);
                            return
                        }

                        const userStats = resultsStats[0];                        
                        if(userStats == null) {
                            reject(`Missing SQL stats for player [${player.id}] ${player.username}.`);
                            return
                        }

                        player.stats = new PlayerStats(player.id, userStats);

                        (Server.databaseManager.connection as Mysql.Connection).query('SELECT * FROM users_friends WHERE user_id = ?', [player.id], function (err, resultsFriends) {
                            if(err) {
                                reject("Mysql Error: " + err.stack);
                                return
                            }

                            resultsFriends.forEach((friend: any) => {
                                player.friends.push(friend.friend_id);
                            });

                            (Server.databaseManager.connection as Mysql.Connection).query('SELECT * FROM users_items WHERE user_id = ?', [player.id], function (err, resultsItems) {
                                if(err) {
                                    reject("Mysql Error: " + err.stack);
                                    return
                                }

                                resultsItems.forEach((item: any) => {
                                    player.items.push(item.item_id);
                                });

                                (Server.databaseManager.connection as Mysql.Connection).query('SELECT * FROM chatlogs WHERE user_id = ? LIMIT 100', [player.id], function (err, resultsLogs) {
                                    if(err) {
                                        reject("Mysql Error: " + err.stack);
                                        return
                                    }
    
                                    resultsLogs.forEach((log: PlayerLogs) => {
                                        player.logs.push(new PlayerLogs({
                                            pm_user_id: log.pm_user_id,
                                            message: log.message,
                                            server_region: log.server_region,
                                            room: log.room,
                                            date: log.date
                                        }))
                                    });
    
                                    count++;
                                    if(count == results.length) {
                                        resolve(`Loaded ${count} users.`);
                                        return
                                    }
                                });
                            });
                        });
                    });
                })
            });
        })
    }

    newPlayer(client: Client, username: string, password: string): Promise<string> {
        return new Promise((resolve, reject) => {
            const instance = this;
            const registered = new Date();

            (Server.databaseManager.connection as Mysql.Connection).query('INSERT INTO users (username, password, ip_registered, ip, registered, last_login) VALUES (?, ?, ?, ?, ?, ?)', [username, password, client.ip, client.ip, registered, registered], function (err, result) {
                if(err) {
                    reject("Mysql Error: " + err.stack);
                    return;
                }

                const userId = result.insertId;
                (Server.databaseManager.connection as Mysql.Connection).query('INSERT INTO users_stats (user_id) VALUES (?)', [userId], function (err) {
                    if(err) {
                        reject("Mysql Error: " + err.stack);
                        return;
                    }

                    const player = new Player({
                        id: userId,
                        username: username,
                        password: password,
                        ip_registered: client.ip as string,
                        ip: client.ip as string,
                        registered: registered,
                        last_login: registered
                    });

                    instance.players[player.id] = player;
                    resolve(`${player.username} just registered.`);
                });
            })
        })
    }

    getPlayerById(id: number): Player | null {
        for(let i in this.players) {
            const player = this.players[i];
            if(player.id == id)
                return player;
        }

        return null;
    }

    getPlayerByUsername(username: string): Player | null {
        for(let i in this.players) {
            const player = this.players[i];
            if(player.username.toLowerCase() == username.toLowerCase())
                return player;
        }

        return null;
    }

    getPlayersLeaderboard(key: string): any[] | null {
        let playersLeaderboard: any[]  = [];
        
        const availablesStats = ["elo", "level_xp", "games_played", "games_won", "games_lost", "win_rate", "best_streak", "shots", "shots_per_match", "goals", "goals_per_match", "hat_tricks", "assists", "assists_per_match", "saves", "saves_per_match", "pass_accuracy", "pass_per_match", "played_gk", "cs", "cs_percentage"];
        if(!availablesStats.includes(key))
            return null;

        for(let i in this.players) {
            const player = this.players[i];

            if(["win_rate", "shots_per_match", "goals_per_match", "assists_per_match", "saves_per_match", "pass_accuracy", "pass_per_match"].includes(key))
                if(player.stats.getGamesPlayed() < 25)
                    continue;

            if(key == "cs_percentage")
                if(player.stats.played_gk < 15)
                    continue;

            playersLeaderboard.push({
                username: player.username,
                avatar: player.avatar,
                value: (player.stats as any)[key] != null ? (player.stats as any)[key] : player.stats.getValueFor(key)
            })
        }

        return playersLeaderboard.sort((a, b) => b.value - a.value).slice(0, 50);
    }
}