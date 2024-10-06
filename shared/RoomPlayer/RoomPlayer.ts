import { Base } from "../Base/Base";
import Disc from "../Disc/Disc";
import Goal from "../Goal/Goal";
import Team from "../Team/Team";
import RoomPlayerInterface from "./RoomPlayerInterface";

export default class RoomPlayer implements RoomPlayerInterface {
    id: number;
    username: string;
    avatar: number;
    team: any;
    ping: number;
    disc: null | Disc;
    afk: boolean;
    shooting: boolean;
    shotReset: boolean;
    inputs: any;
    streak: number;
    gkTime: number;
    goals: Goal[];
    pass_successful: number;
    pass_missed: number;
    shots: number;
    saves: number;

    constructor(data: RoomPlayerInterface) {
        this.id = data.id;
        this.username = data.username;
        this.avatar = data.avatar;
        this.team = data.team || Team.SPECTATORS;
        this.ping = data.ping;
        this.disc = null;
        this.afk = false;
        this.shooting = false;
        this.shotReset = false;
        this.inputs = {
            left: false,
            right: false,
            down: false,
            up: false,
            shot: false
        }
        this.streak = 0;
        this.gkTime = 0;
        this.goals = [];
        this.pass_successful = 0;
        this.pass_missed = 0;
        this.shots = 0;
        this.saves = 0;
    }
}