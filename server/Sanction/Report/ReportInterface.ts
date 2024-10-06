import Player from "../../Player/Player";

export interface ReportInterface {
    id: number;
    byPlayer: Player,
    reportedPlayer: Player,
    date: Date
}