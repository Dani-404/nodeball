import Color from "../../shared/Color/Color";
import Player from "../Player/Player";
import Server from "../main"
import { Report } from "./Report/Report"
import { Sanction } from "./Sanction";
import Mysql from 'mysql';
import {format} from 'date-fns';

type SanctionsType = {
    [key: number]: Sanction
}

type ReportsType = {
    [key: number]: Report
}

export default class SanctionManager {
    sanctions: SanctionsType;
    reportsId: number;
    reports: ReportsType;

    constructor() {
        this.sanctions = {};
        this.reportsId = 0;
        this.reports = {};
    }

    init(): Promise<string> {
        return new Promise((resolve, reject) => {
            const instance = this;

            (Server.databaseManager.connection as Mysql.Connection).query('SELECT * FROM sanctions', function (err, results, fields) {
                if(err) {
                    reject("Mysql Error: " + err.stack);
                    return;
                }

                if(results.length == 0) {
                    resolve(`Loaded 0 sanctions.`)
                    return;
                }

                let count = 0;
                results.forEach((sanctionRow: Sanction) => {
                    count++;

                    const sanction = new Sanction(sanctionRow);
                    instance.sanctions[sanction.id] = sanction;

                    if(count == results.length) {
                        resolve(`Loaded ${count} sanctions.`)
                        return;
                    }
                })
            });
        });
    }

    newSanction(type: string, time: number, reason: string, player: Player, byPlayer: Player): Promise<any> {
        const now = new Date(),
            milliseconds = new Date().getTime() + (time * 60 * 60 * 1000),
            end_date = new Date(milliseconds),
            instance = this;

        return new Promise((resolve, reject) => {
            (Server.databaseManager.connection as Mysql.Connection).query('INSERT INTO sanctions (type, user_id, username, ip, date, end_date, by_player, reason) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [type, player.id, player.username, player.ip, now, end_date, byPlayer.username, reason], function (err, result) {
                if(err) {
                    reject("Mysql Error: " + err.stack);
                    return;
                }

                const sanctionId = result.insertId;
                const sanction = new Sanction({
                    id: sanctionId,
                    type: type,
                    user_id: player.id,
                    username: player.username,
                    ip: player.ip,
                    date: now,
                    end_date: end_date,
                    by_player: byPlayer.username,
                    reason: reason
                });

                instance.sanctions[sanction.id] = sanction;

                Server.logger.sendLog("INFO", `New sanction for player ${player.username}, type ${type} for ${time} hours.`);

                if(type == "ban")
                    resolve(sanction)
                else
                    resolve(sanction)
            });
        });
    }

    getActiveSanction(type: string, playerId: number): Sanction | null {
        const now = new Date();

        for(let i in this.sanctions) {
            const sanction = this.sanctions[i];

            if(sanction.type == type && sanction.user_id == playerId && sanction.end_date > now)
                return sanction;
        }

        return null;
    }

    getActiveBan(playerId: number, ip: string): Sanction | null {
        const now = new Date();

        for(let i in this.sanctions) {
            const sanction = this.sanctions[i];

            if(sanction.type == "ban" && (sanction.user_id == playerId || sanction.ip == ip) && sanction.end_date > now)
                return sanction;
        }

        return null;
    }

    getReportsByPlayer(byPlayer: Player, reportedPlayer: Player): Report | null {
        for(let i in this.reports) {
            const report = this.reports[i];
            if(report.byPlayer == byPlayer && report.reportedPlayer == reportedPlayer)
                return report;
        }

        return null;
    }

    newReport(byPlayer: Player, reportedPlayer: Player): void {
        this.reportsId++;

        const report = new Report({
            id: this.reportsId,
            byPlayer: byPlayer,
            reportedPlayer: reportedPlayer,
            date: new Date()
        });

        this.reports[this.reportsId] = report;

        for(let i in Server.playerManager.players) {
            const player = Server.playerManager.players[i];

            if(!["user", "vip"].includes(player.rank)) {
                if(player.isOnline())
                    player.sendMsg("chatMessage", {type: "announcement", message: "GAME_CHAT_NEW_REPORT", color: Color.ROOM_ANNOUNCEMENT, params: [byPlayer.username], officialTrad: true});
            }
        }
    }

    deleteReport(id: number) {
        if(!this.reports.hasOwnProperty(id))
            return;

        delete this.reports[id];
    }

    deleteSanction(id: number, byPlayer: Player) {
        const sanction = this.sanctions[id];

        const now = new Date();

        if(sanction == null || now > sanction.end_date)
            return;

        sanction.remove(byPlayer);
    }

    getSanctionsList(): any[] {
        const now = new Date();
        let sanctionsList: any[] = [];

        for(let i in this.sanctions) {
            const sanction = this.sanctions[i];

            if(now > sanction.end_date || now == sanction.end_date)
                continue;

            sanctionsList.push({
                id: sanction.id,
                username: sanction.username,
                type: sanction.type,
                by_player: sanction.by_player,
                end_date: format(sanction.end_date, "dd/MM/yyyy HH:mm")
            })
        }

        return sanctionsList;
    }

    getReportsList(): any[] {
        let reportsList: any[] = [];

        for(let i in this.reports) {
            const report = this.reports[i];

            reportsList.push({
                id: report.id,
                username: report.byPlayer.username,
                reported_username: report.reportedPlayer.username,
                date: format(report.date, "dd/MM/yyyy HH:mm")
            })
        }

        return reportsList;
    }
}