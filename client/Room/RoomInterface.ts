import RoomPlayer from "../../shared/RoomPlayer/RoomPlayer";
import { RoomState } from "../../shared/RoomState/RoomState";
import Score from "../../shared/Score/Score";

export default interface RoomInterface {
    id: string,
    currentPlayers: RoomPlayer[],
    state: RoomState,
    score: Score,
    stadium: any,
    pickMode: number | null,
    history: any[],
    discHistory: any
}