import Config from "../Config/Config";
import Player from "../Player/Player";
import Server from "../main";
import Room from "./Room";

type RoomsType = {
    [key: string]: Room
}

export default class RoomManager {
    rooms: RoomsType;
    lastTs: number;

    constructor() {
        this.rooms = {};
        this.lastTs = 0;
        setInterval(this.update.bind(this), 1000/Config.UPDATE_INTERVAL);
    }

    initRoom(roomId: string, byPlayer: Player) {
        let room = this.rooms[roomId];

        if(room != null)
        {
            if(room == byPlayer.currentRoom)
                return;
        
            return room.onPlayerJoin(byPlayer);
        }

        Server.logger.sendLog("INFO", `Loading room ${roomId}.`);
        room = new Room({id: roomId});
        this.rooms[room.id] = room;
        room.onPlayerJoin(byPlayer);
    }

    getRoom(roomId: string): Room | null {
        const room = this.rooms[roomId];

        if(room == null)
            return null;
        else 
            return room;
    }

    destroyRoom(roomId: string): void {
        if(!this.rooms.hasOwnProperty(roomId))
            return;

        const room = this.rooms[roomId];
        Server.logger.sendLog("INFO", `Unloading room ${roomId}.`);
        delete this.rooms[roomId];
    }


    update(): void {
        const nowTs = performance.now();
        const lastTs = this.lastTs || nowTs;
        const dtSec = (nowTs - lastTs) / 15;
        const time = (nowTs - lastTs) / 1000;
        this.lastTs = nowTs;

        for(let i in this.rooms) {
            const room = this.rooms[i];
            room.update((60/Config.UPDATE_INTERVAL), time);
        }
    }
}