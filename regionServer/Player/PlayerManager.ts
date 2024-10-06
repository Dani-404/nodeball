import Mysql from 'mysql'
import Server from '../main';
import Player from './Player';
import PlayerInterface from './PlayerInterface';

type PlayersType = {
    [key: number]: Player
}

export default class PlayerManager {
    players: PlayersType;

    constructor() {
        this.players = {};
    }

    newPlayer(playerData: PlayerInterface): Player {
        const player = new Player(playerData);
        this.players[player.id] = player;
        Server.logger.sendLog("INFO", `${player.username} just logged in.`);
        return player;
    }

    getPlayerById(id: number): Player | null {
        for(let i in this.players) {
            const player = this.players[i];

            if(player.id == id)
                return player;
        }

        return null;
    }

    getPlayerByUsername(username: string): Player | null {
        for(let i in this.players) {
            const player = this.players[i];
            if(player.username.toLowerCase() == username.toLowerCase())
                return player;
        }

        return null;
    }

    destroyPlayer(playerId: number): void {
        const player = this.getPlayerById(playerId);

        if(player == null)
            return;

        player.destroy();
        Server.logger.sendLog("INFO", `${player.username} just logged out.`);
        delete this.players[playerId];
    }

    destroyAllPlayers(): void {
        for(let i in this.players) {
            const player = this.players[i];
            player.destroy();
            player.client.player = null;
            delete this.players[player.id];
        }
    }
}