import Player from "../../Player/Player";
import { ReportInterface } from "./ReportInterface";

export class Report implements ReportInterface {
    id: number;
    byPlayer: Player;
    reportedPlayer: Player;
    date: Date;

    constructor(data: ReportInterface) {
        this.id = data.id;
        this.byPlayer = data.byPlayer;
        this.reportedPlayer = data.reportedPlayer;
        this.date = data.date;
    }
}