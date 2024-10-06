import RoomPlayer from "../../shared/RoomPlayer/RoomPlayer";
import { RoomState } from "../../shared/RoomState/RoomState";
import Score from "../../shared/Score/Score";
import ShareableData from "../../shared/ShareableData/ShareableData";
import RoomInterface from "./RoomInterface";

export default class Room implements RoomInterface {
    id: string;
    currentPlayers: RoomPlayer[];
    state: RoomState;
    score: Score;
    stadium: any;
    pickMode: number | null;
    history: any[];
    discHistory: any;

    constructor(data: RoomInterface) {
        this.id = data.id;
        this.currentPlayers = data.currentPlayers;
        this.state = data.state;
        this.score = data.score;
        this.stadium = data.stadium;
        this.pickMode = data.pickMode;
        this.history = data.history;
        this.discHistory = {}
    }

    reorderPlayer(playersArray: RoomPlayer[]): void {
        this.currentPlayers = playersArray;
    }

    getPlayer(playerId: number): RoomPlayer | null {
        const player = this.currentPlayers.filter((player) => player.id == playerId)[0];

        if(player != null)
            return player;
        else
            return null;
    }

    playerJoin(player: RoomPlayer): void {
        const playerData = this.getPlayer(player.id);
        if(playerData != null)
            return;

        this.currentPlayers.push(player);
    }

    playerLeave(playerId: number): void {
        const playerData = this.getPlayer(playerId);
        if(playerData == null)
            return;

        this.currentPlayers = this.currentPlayers.filter(function(player) {
            return player.id != playerId;
        });
    }

    update(data: any): void {
        this.currentPlayers = data.currentPlayers;
        this.state = data.state;
        this.score = data.score;
        this.stadium.discs = data.discs;

        for(let i in this.stadium.discs) {
            if(this.discHistory[i] == null)
                this.discHistory[i] = [];

            this.discHistory[i].push(new ShareableData(
                performance.now(),
                {x: this.stadium.discs[i].x, y: this.stadium.discs[i].y}
            ))
        }
    }
}