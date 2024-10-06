import Player from "../Player/Player";
import Server from "../main";
import { SanctionInterface } from "./SanctionInterface";
import Mysql from 'mysql'

export class Sanction implements SanctionInterface {
    id: number;
    type: string;
    user_id: number;
    username: string;
    ip: string;
    date: Date;
    end_date: Date;
    by_player: string;
    unban_by?: null | string;
    reason: null | string;

    constructor(data: SanctionInterface) {
        this.id = data.id;
        this.type = data.type;
        this.user_id = data.user_id;
        this.username = data.username;
        this.ip = data.ip;
        this.date = data.date;
        this.end_date = data.end_date;
        this.by_player = data.by_player;
        this.unban_by = data.unban_by;
        this.reason = data.reason;
    }

    remove(byPlayer: Player) {
        const now = new Date();
        this.end_date = now;

        (Server.databaseManager.connection as Mysql.Connection).query("UPDATE sanctions SET end_date = ?, unban_by = ? WHERE id = ?", [this.end_date, byPlayer.username, this.id], (err: any) => {
            if(err)
                return Server.logger.sendCriticalError("Mysql Error: " + err.stack)
        })
    }
}