import Room from "../Room/Room";

export default interface UserInterface {
    id: number,
    username: string,
    rank: string,
    avatar: number,
    coins: number,
    items: Number[],
    friends: any[],
    currentServer: string,
    currentRoom: null | Room,
}