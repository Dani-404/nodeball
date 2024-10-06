import Client from "../Client/Client";
import Room from "../Room/Room";
import PlayerInterface from "./PlayerInterface";

export default class Player implements PlayerInterface {
    id: number;
    client: Client;
    mainClientId: number;
    username: string;
    avatar: number;
    rank: string;
    currentRoom: null | Room;
    inputs: any;

    constructor(data: PlayerInterface) {
        this.id = data.id;
        this.client = data.client;
        this.mainClientId = data.mainClientId;
        this.username = data.username;
        this.avatar = data.avatar;
        this.rank = data.rank;
        this.currentRoom = null;
    }

    updateAvatar(avatarId: number): void {
        this.avatar = avatarId;

        if(this.currentRoom != null) {;
            const roomPlayer = this.currentRoom.getPlayer(this.id);

            if(roomPlayer != null) {
                roomPlayer.avatar = this.avatar;

                if(roomPlayer.disc != null)
                    roomPlayer.disc.avatar = this.avatar;
            }
        }
    }

    updateRank(rank: string) {
        this.rank = rank;
    }

    destroy(): void {
        if(this.currentRoom != null)
            this.currentRoom.onPlayerLeave(this.id);
    }
}