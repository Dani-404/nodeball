import Disc from "../Disc/Disc";
import Goal from "../Goal/Goal";

export default interface RoomPlayerInterface {
    id: number;
    username: string;
    avatar: number;
    team?: any;
    ping: number;
    disc?: null | Disc;
    afk?: boolean;
    shooting?: boolean;
    shotReset?: boolean;
    input?: any;
    streak?: number;
    gkTime?: number;
    goals?: Goal[];
    pass_successful?: number;
    pass_missed?: number;
    shots?: number;
    saves?: number;
}