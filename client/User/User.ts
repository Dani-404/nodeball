import Room from "../Room/Room";
import UserInterface from "./UserInterface";

export default class User implements UserInterface {
    id: number;
    username: string;
    rank: string;
    avatar: number;
    coins: number;
    items: Number[];
    friends: any[];
    currentServer: string;
    currentRoom: null | Room;

    constructor(data: UserInterface) {
        this.id = data.id;
        this.username = data.username;
        this.rank = data.rank;
        this.avatar = data.avatar;
        this.coins = data.coins;
        this.items = data.items;
        this.friends = data.friends;
        this.currentServer = data.currentServer;
        this.currentRoom = null;
    }

    getFriendbyUsername(username: string): any {
        let friendReturned = null;
        
        this.friends.forEach((friend) => {
            if(friend.username == username)
                friendReturned = friend;
        });

        return friendReturned;
    }
}