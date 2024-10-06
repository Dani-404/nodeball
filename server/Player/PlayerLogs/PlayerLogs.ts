import { PlayerLogsInterface } from "./PlayerLogsInterface";

export default class PlayerLogs implements PlayerLogsInterface {
    pm_user_id: number | null;
    message: string;
    server_region: string;
    room: string | null;
    date: Date;

    constructor(data: PlayerLogsInterface) {
        this.pm_user_id = data.pm_user_id || null;
        this.message = data.message;
        this.server_region = data.server_region;
        this.room = data.room || null;
        this.date = data.date;
    }
}