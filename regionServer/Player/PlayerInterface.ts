import Client from "../Client/Client";
import Room from "../Room/Room";

export default interface PlayerInterface {
    id: number,
    client: Client,
    mainClientId: number,
    username: string,
    avatar: number,
    rank: string,
    currentRoom?: null | Room,
    inputs?: any
}