import Client from "../Client/Client";
import { RegionPlayerType } from "../../shared/RegionPlayer/RegionPlayerType";
import PlayerStats from "./PlayerStats/PlayerStats";
import PlayerLogs from "./PlayerLogs/PlayerLogs";

export default interface PlayerInterface {
    id: number,
    client?: null | Client,
    regionPlayer?: RegionPlayerType | null,
    username: string,
    password: string,
    rank?: string,
    ip_registered: string,
    ip: string,
    registered: Date,
    last_login: Date,
    avatar?: number,
    coins?: number,
    items?: Number[],
    friends?: number[],
    stats?: PlayerStats,
    playerLogs?: PlayerLogs[]
}