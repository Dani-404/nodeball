import { WebSocket } from "ws";
import Player from "../Player/Player";
import RegionServer from "../RegionServer/RegionServer";

export default interface ClientInterface {
    id: string,
    ip: string,
    socket: WebSocket,
    player?: null | Player;
    regionServer?: null | RegionServer;
    waitingForm?: boolean;
}