import { WebSocket } from "ws";
import Player from "../Player/Player";

export default interface ClientInterface {
    id: string,
    socket: WebSocket,
    player?: null | Player
}