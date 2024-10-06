import RoomPlayer from "../../shared/RoomPlayer/RoomPlayer";
import { RoomState } from "../../shared/RoomState/RoomState";
import Score from "../../shared/Score/Score";

export default interface RoomInterface {
    id: string,
    currentPlayers?: RoomPlayer[],
    pauseTimeout?: number,
    goalTimeout?: number,
    state?: RoomState,
    lastState?: RoomState,
    score?: Score,
    playersByTeam?: number,
    stadium?: null | JSON,
    kickoffReset?: number,
    pickModePlayer?: RoomPlayer | null,
    triggerDistance?: number,
    lastPlayerKick?: null | RoomPlayer,
    isShot?: boolean,
    lastPlayersTouchBall?: RoomPlayer[],
    possession?: number[],
    history?: any[]
}