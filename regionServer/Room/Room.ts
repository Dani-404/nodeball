import { Base } from "../../shared/Base/Base";
import Color from "../../shared/Color/Color";
import Disc from "../../shared/Disc/Disc";
import Goal from "../../shared/Goal/Goal";
import {trainingMap, smallMap, mediumMap, bigMap} from "../../shared/Map/Maps";
import RoomPlayer from "../../shared/RoomPlayer/RoomPlayer";
import { RoomState } from "../../shared/RoomState/RoomState";
import Score from "../../shared/Score/Score";
import Team, { TeamKeys } from "../../shared/Team/Team";
import Config from "../Config/Config";
import Player from "../Player/Player";
import Server from "../main";
import RoomInterface from "./RoomInterface";
import { resolveDDCollision, resolveDPCollision, resolveDSCollision, resolveDVCollision } from "./Utils/Collision";
import { lineToLine, normalise, pointDistance, shuffle } from "./Utils/Utils";

export default class Room implements RoomInterface {
    id: string;
    currentPlayers: RoomPlayer[];
    state: RoomState;
    lastState: RoomState;
    pauseTimeout: number;
    goalTimeout: number;
    score: Score;
    playersByTeam: number;
    stadium: null | any;
    defaultStadium: null | any;
    kickoffReset: number;
    scorableDiscsId: any[];
    scorableDiscsPos: any[];
    pickModePlayer: RoomPlayer | null;
    triggerDistance: number;
    lastPlayerKick: null | RoomPlayer;
    isShot: boolean;
    lastPlayersTouchBall: RoomPlayer[];
    possession: number[];
    history: any[];

    constructor(data: RoomInterface) {
        this.id = data.id;
        this.currentPlayers = [];
        this.state = RoomState.GAME_ENDED;
        this.lastState = RoomState.GAME_ENDED;
        this.pauseTimeout = 0;
        this.goalTimeout = 0;
        this.score = new Score({
            timeLimit: 0,
            scoreLimit: 0
        });
        this.playersByTeam = 0;
        this.stadium = null;
        this.defaultStadium = null;
        this.kickoffReset = 8;
        this.scorableDiscsId = [];
        this.scorableDiscsPos = [];
        this.pickModePlayer = null;
        this.triggerDistance = 0;
        this.lastPlayerKick = null;
        this.isShot = false;
        this.lastPlayersTouchBall = [];
        this.possession = [0, 0];
        this.history = [];
    }

    broadcast(key: string, value: any = null): void {
        for(let i in this.currentPlayers) {
            const player = this.currentPlayers[i];
            const playerData = Server.playerManager.getPlayerById(player.id);

            if(playerData != null)
                playerData.client.sendMsg(key, value);
        }
    }

    sendPlayerMsg(playerId: number, key: string, value: any = null): void {
        const player = this.getPlayer(playerId);
        if(player == null)
            return;
        
        const playerData = Server.playerManager.getPlayerById(player.id);
        if(playerData != null)
            playerData.client.sendMsg(key, value);
    }

    updatePlayerPing(playerId: number, ping: number) {
        const player = this.getPlayer(playerId);
        if(player == null)
            return;

        player.ping = ping;
    }

    setLastPlayerTouchBall(player: RoomPlayer): void {
        if(this.lastPlayersTouchBall[0] == player)
            return;

        if(this.lastPlayerKick != null) {
            if(this.lastPlayersTouchBall[0] != null && this.lastPlayersTouchBall[0] != this.lastPlayerKick) {
                if(player.team == this.lastPlayersTouchBall[0].team)
                    this.lastPlayersTouchBall[0].pass_successful++;
                else
                    this.lastPlayersTouchBall[0].pass_missed++;
            }

            if(this.isShot && this.lastPlayerKick.team != player.team) {
                player.saves++;
                this.addHistory("save", {time: this.score.time, username: player.username, team: player.team});
            }

            this.isShot = false;
            this.lastPlayerKick = null;
        }

        if(this.lastPlayersTouchBall[0] != null)
            this.lastPlayersTouchBall[1] = this.lastPlayersTouchBall[0];

        this.lastPlayersTouchBall[0] = player;
    }

    newChat(byPlayer: Player, type: string, message: string): void {
        const player = this.getPlayer(byPlayer.id);
        if(player == null)
            return;

        switch(type) {
            case "#room": {
                this.broadcast("chatMessage", {id: player.id, username: player.username, rank: byPlayer.rank, message: message});
                break;
            }

            case "#team": {
                const playersTeam = this.getPlayersTeam(player.team);
                playersTeam.forEach((playerRow) => this.sendPlayerMsg(playerRow.id, "chatMessage", {id: player.id, username: player.username, message: message, team: player.team.id}))
                break;
            }
        }
    }

    onPlayerJoin(player: Player): void {
        if(player.currentRoom != null)
            player.currentRoom.onPlayerLeave(player.id);

        const roomPlayer = new RoomPlayer({id: player.id, username: player.username, avatar: player.avatar, ping: 0});
        this.broadcast("playerJoin", roomPlayer);
        this.broadcast("chatMessage", {type: "announcement", message: "GAME_CHAT_JOIN_ROOM", params: [player.username], color: Color.ROOM_ANNOUNCEMENT, officialTrad: true});
        this.currentPlayers.push(roomPlayer);
        player.currentRoom = this;
        Server.mainServer.sendMsg("playerJoinRoom", {playerId: player.id, roomId: this.id});

        player.client.sendMsg("chatMessage", {type: "announcement", message: "GAME_CHAT_ROOM_JOINED", params: [this.id], officialTrad: true})
        player.client.sendMsg("roomInit", {
            id: this.id,
            currentPlayers: this.currentPlayers,
            state: this.state,
            score: this.score,
            stadium: this.stadium,
            pickMode: this.pickModePlayer ? this.pickModePlayer.id : null,
            history: this.history
        });
        Server.logger.sendLog("VERBOSE", `${player.username} joined the room [${this.id}].`);

        this.initForAll();
    }

    onPlayerLeave(playerId: number): void {
        const player = this.getPlayer(playerId);
        if(player == null)
            return;

        this.destroyPlayerDisc(player);
        for(let i = 0; i < this.currentPlayers.length; i++) {
            const player = this.currentPlayers[i];
            if(player.id == playerId)
                this.currentPlayers.splice(i, 1)
        }

        Server.mainServer.sendMsg("playerLeftRoom", player.id);
        this.broadcast("playerLeave", playerId);
        Server.logger.sendLog("VERBOSE", `${player.username} left the room [${this.id}].`);
        this.broadcast("chatMessage", {type: "announcement", message: "GAME_CHAT_LEFT_ROOM", params: [player.username], color: Color.ROOM_ANNOUNCEMENT, officialTrad: true});

        if(this.currentPlayers.length == 0)
            Server.roomManager.destroyRoom(this.id);
        else
            this.initForAll();
    }

    getPlayer(playerId: number): RoomPlayer | null {
        for(let i in this.currentPlayers) {
            if(this.currentPlayers[i].id == playerId)
                return this.currentPlayers[i];
        }

        return null;
    }

    destroyPlayerDisc(player: RoomPlayer) {
        if(player.disc == null)
            return;

        for(let i in this.stadium.discs) {
            const disc = this.stadium.discs[i];
            if(disc == player.disc)
                this.stadium.discs.splice(i, 1);
        }

        player.disc = null;
    }

    resetStats(): void {
        this.lastPlayersTouchBall = [];
        this.history = [];
        this.possession = [0, 0]

        for(let i in this.currentPlayers) {
            const player = this.currentPlayers[i];

            player.gkTime = 0;
            player.goals = [];
            player.pass_successful = 0;
            player.pass_missed = 0;
            player.shots = 0;
            player.saves = 0;
        }
    }

    reorderPlayer(player: RoomPlayer) {
        this.currentPlayers.push(this.currentPlayers.splice(this.currentPlayers.indexOf(player), 1)[0])
        this.broadcast("reorderPlayer", this.currentPlayers)
    }

    setPlayerTeamByUser(byPlayer: Player, playerId: number, team: number): void {
        const roomPlayer = this.getPlayer(byPlayer.id);
        if(roomPlayer == null || this.pickModePlayer != roomPlayer || roomPlayer.team.id != team)
            return;

        const targetPlayer = this.getPlayer(playerId);
        if(targetPlayer == null || targetPlayer.team != Team.SPECTATORS || targetPlayer.afk)
            return;

        this.setPickMode(null);
        this.setPlayerTeam(targetPlayer, roomPlayer.team);
        this.balanceTeam();
    }

    setPlayerTeam(player: RoomPlayer, team: typeof Team[TeamKeys]): void {
        if(
            team != Team.SPECTATORS && player.team == team && this.stadium.discs.filter((disc: Disc) => disc.player == player.id)[0] != null ||
            team == Team.SPECTATORS && player.team == team
        )
            return;

        if(player.disc != null)
            this.destroyPlayerDisc(player);
        
        player.team = team;

        if(player.team == Team.SPECTATORS)
            player.streak = 0;

        for(let i = 0; i < this.currentPlayers.length; i++) {
            const playerRow = this.currentPlayers[i];

            if(player.id == playerRow.id)
            {
                this.reorderPlayer(player);
                break;
            }
        }

        if(this.state != RoomState.GAME_ENDED && team != Team.SPECTATORS)
            this.setPlayerDefaultProperties(player);

        this.broadcast("playerUpdate", player);
    }

    setScoreObject(score: Score): void {
        this.score = score;
    }

    getPlayersTeam(team: typeof Team[TeamKeys]): Array<RoomPlayer> {
        return [...this.currentPlayers.filter((player) => player.team == team)];
    }

    checkTeamBalance(): boolean {
        if(this.stadium.name != "training" && this.getPlayersTeam(Team.RED).length != this.getPlayersTeam(Team.BLUE).length)
            return false;

        return true;
    }

    initForAll(): void {
        const players = this.currentPlayers.filter((player) => !player.afk);
        
        switch(players.length) {
            case 0: {
                break;
            }

            case 1:
            {
                this.stopGame();
                this.loadMap("training", 0, 0);
                this.balanceTeam();
                break;
            }

            case 2:
            case 3:
            case 4:
            case 5:
            {
                if(this.stadium.name == "small" && this.playersByTeam == Math.floor(players.length/2))
                {
                    if(!this.checkTeamBalance())
                        return this.balanceTeam();

                    return;
                }

                this.stopGame();
                this.loadMap("small", 3, 3, Math.floor(players.length/2));
                this.balanceTeam();
                break;
            }

            case 6:
            case 7:
            {
                if(this.stadium.name == "medium" && this.playersByTeam == Math.floor(players.length/2))
                {
                    if(!this.checkTeamBalance())
                        return this.balanceTeam();

                    return;
                }

                this.stopGame();
                this.loadMap("medium", 3, 3, Math.floor(players.length/2));
                this.balanceTeam();
                this.startGame();
                break;
            }

            default:
            {
                if(this.stadium.name == "big" && this.playersByTeam == 4)
                {
                    if(!this.checkTeamBalance())
                        return this.balanceTeam();

                    return;
                }

                this.stopGame();
                this.loadMap("big", 3, 3, 4);
                this.balanceTeam();
                this.startGame();
                break;
            }
        }
    }

    balanceTeam() {
        const players = [...this.currentPlayers].filter((player) => !player.afk),
            redTeam = this.getPlayersTeam(Team.RED),
            blueTeam = this.getPlayersTeam(Team.BLUE),
            spectators = this.getPlayersTeam(Team.SPECTATORS);

        switch(true) {
            case players.length == 1: {
                this.setPlayerTeam(players[0], Team.RED);

                if(this.state == RoomState.GAME_ENDED)
                        this.startGame();
                break;
            }

            case players.length > 1: {
                for(let i = 0; i < redTeam.length; i++) {
                    const player = redTeam[i];

                    if((i + 1) > this.playersByTeam) {
                        this.setPlayerTeam(player, Team.SPECTATORS);
                        redTeam.splice(i, 1);
                        spectators.push(player);
                    }
                }

                for(let i = 0; i < blueTeam.length; i++) {
                    const player = blueTeam[i];

                    if((i + 1) > this.playersByTeam) {
                        this.setPlayerTeam(player, Team.SPECTATORS)
                        blueTeam.splice(i, 1);
                        spectators.push(player);
                    }
                }

                if(players.length == this.playersByTeam * 2) {
                    if(this.state == RoomState.GAME_ENDED)
                    {
                        shuffle(players);

                        for(let i = 0; i < players.length; i++) {
                            const player = players[i];
                            if(i%2)
                                this.setPlayerTeam(player, Team.RED)
                            else
                                this.setPlayerTeam(player, Team.BLUE)
                        }

                        this.setPickMode(null);
                        this.startGame();
                    } else if(!this.checkTeamBalance()) {
                        if([RoomState.GOAL_SCORE, RoomState.KICK_OFF_RESET, RoomState.PLAY].includes(this.state) && this.score.red == 0 && this.score.blue == 0 && this.score.time < 10)
                            return this.stopGame();

                        for(let i = 0; i < spectators.length; i++) {
                            const player = spectators[i];

                            if(redTeam.length > blueTeam.length) {
                                this.setPlayerTeam(player, Team.BLUE);
                                blueTeam.push(player);
                            }
                            else {
                                this.setPlayerTeam(player, Team.RED);
                                redTeam.push(player);
                            }
                        }

                        this.setPickMode(null);

                        if(this.state == RoomState.PAUSE) {
                            this.pause(false);
                            this.broadcast("hideMenu");
                        }
                    }
                } else if(players.length == 2 || players.length == 3) {
                    if(redTeam.length == 0) {
                        this.setPlayerTeam(spectators[0], Team.RED);
                        spectators.splice(0, 1);
                    }

                    if(blueTeam.length == 0) {
                        this.setPlayerTeam(spectators[0], Team.BLUE);  
                        spectators.splice(0, 1);
                    }

                    if(this.state == RoomState.GAME_ENDED)
                        this.startGame();

                } else if(players.length == 5 || players.length == 7 || players.length > 8) {
                    if(redTeam.length == 0) {
                        const player = spectators[0];

                        this.setPlayerTeam(player, Team.RED);
                        spectators.splice(0, 1);
                        redTeam.push(player)
                    }

                    if(blueTeam.length == 0) {
                        const player = spectators[0];

                        this.setPlayerTeam(player, Team.BLUE);  
                        spectators.splice(0, 1);
                        blueTeam.push(player)
                    }

                    if(redTeam.length != this.playersByTeam || blueTeam.length != this.playersByTeam) {
                        if([RoomState.GOAL_SCORE, RoomState.KICK_OFF_RESET, RoomState.PLAY].includes(this.state)) {
                            if(this.score.red == 0 && this.score.blue == 0 && this.score.time < 10)
                                this.stopGame();
                            else
                                this.pause(true);
                        }

                        if(redTeam.length > blueTeam.length)
                            this.setPickMode(blueTeam[0]);
                        else
                            this.setPickMode(redTeam[0]);
                    } else {
                        if(this.state == RoomState.PAUSE) {
                            this.pause(false);
                            this.broadcast("hideMenu");
                        } 
                        else
                            this.startGame();

                        this.setPickMode(null);
                    }
                }
                
                break;
            }
        }
    }

    stopGame(saveStats: boolean = false): void {
        if(this.state == RoomState.GAME_ENDED)
            return;

        this.state = RoomState.GAME_ENDED;
        this.broadcast("gameEnd");

        for (let i = 0; i < this.currentPlayers.length; i++) {
            const player = this.currentPlayers[i];

            if(player.disc != null)
                this.destroyPlayerDisc(player);
        }

        if(saveStats) {
            if(this.playersByTeam >= Config.COUNT_STATS_MIN_PLAYERS) {
                if(this.score.red > this.score.blue)
                    this.getPlayersTeam(Team.RED).forEach((player) => player.streak++);
                else
                    this.getPlayersTeam(Team.BLUE).forEach((player) => player.streak++);

                Server.mainServer.sendMsg("saveStats", {
                    score: this.score,
                    redTeam: this.getPlayersTeam(Team.RED),
                    blueTeam: this.getPlayersTeam(Team.BLUE)
                });
            }

            const gkRed = this.getPlayersTeam(Team.RED).sort((a, b) => b.gkTime - a.gkTime)[0],
                gkBlue = this.getPlayersTeam(Team.BLUE).sort((a, b) => b.gkTime - a.gkTime)[0];

            this.addHistory("endGame", {
                time: this.score.time,
                score: this.score,
                possession: {red: Math.round((this.possession[0]/(this.possession[0] + this.possession[1]))* 100), blue: Math.round((this.possession[1]/(this.possession[0] + this.possession[1])) * 100)},
                gkRed: gkRed ? gkRed.username : null,
                gkBlue: gkBlue ? gkBlue.username : null
            })

            if(this.score.red > this.score.blue)
                this.getPlayersTeam(Team.BLUE).forEach((player) => player.team == Team.BLUE ? this.setPlayerTeam(player, Team.SPECTATORS): null)
            else
            {
                let playerMove: RoomPlayer[] = [];

                this.currentPlayers.forEach((player) => {
                    if(player.team == Team.RED)
                        this.setPlayerTeam(player, Team.SPECTATORS)
                    else if(player.team == Team.BLUE)
                        playerMove.push(player);
                });

                playerMove.forEach((player) => this.setPlayerTeam(player, Team.RED));
            }
        }
        
        this.resetStats();
        this.resetScore();
        this.initForAll();
    }

    startGame(): void {
        this.resetScorableDiscsId();
        this.resetPositionDiscs();
        this.addHistory("matchStarted", {time: 0});
        this.broadcast("hideMenu");
    }

    resetScore(): void {
        this.score.red = 0;
        this.score.blue = 0;
        this.score.time = 0;
    }

    addHistory(key: string, value: any = null): void {
        const history = {
            key: key,
            value: value
        }

        this.history.push(history);
        this.broadcast("addHistory", history);
    }

    getLastPlayerTouch(): void {
        for(let i in this.currentPlayers) {
            const player = this.currentPlayers[i];
            if(player.team == Team.SPECTATORS || player.disc == null)
                continue;

            const distanceToBall = pointDistance({x: player.disc.x, y: player.disc.y}, {x: this.stadium.discs[0].x, y: this.stadium.discs[0].y});

            if (distanceToBall < this.triggerDistance) {
                this.setLastPlayerTouchBall(player);

                if(player.team == Team.RED)
                    this.possession[0]++;
                else
                    this.possession[1]++;
            }
        }
    }

    onTick(): void {
        this.getLastPlayerTouch();
        this.checkGk();
    }
    
    checkGk(): void {
        let playerRedMostLeft = null,
            playerBlueMostRight = null;

        for(let i in this.currentPlayers) {
            const player = this.currentPlayers[i];

            if(player.team == Team.SPECTATORS || player.disc == null)
                continue;

            if(player.team == Team.RED && (playerRedMostLeft == null || (playerRedMostLeft.disc as Disc).x > (player.disc as Disc).x))
                playerRedMostLeft = player;
            else if(player.team == Team.BLUE && (playerRedMostLeft == null || (playerRedMostLeft.disc as Disc).x < (player.disc as Disc).x))
                playerBlueMostRight = player;
        }

        if(playerRedMostLeft != null)
            playerRedMostLeft.gkTime++;

        if(playerBlueMostRight != null)
            playerBlueMostRight.gkTime++;
    }

    onGoal(team: typeof Team[TeamKeys]): void {
        const player = this.lastPlayersTouchBall[0];
        const assist = this.lastPlayersTouchBall[1];

        const goal = new Goal({
            id: player.id,
            username: player.username,
            team: player.team,
            assist_id: assist != null && assist.team == player.team && team != player.team ? assist.id : null,
            assist_username: assist != null && assist.team == player.team && team != player.team ? assist.username : null,
            time: this.score.time,
            score_team: team
        });

        player.goals.push(goal);
        this.addHistory("goal", goal);
    }

    loadMap(name: string, scoreLimit: number, timeLimit: number, playerByTeam: number = 0): void {
        if(this.state != RoomState.GAME_ENDED)
            return;

        switch(name) {
            case "training": {
                this.stadium = JSON.parse(JSON.stringify(trainingMap));
                break;
            }

            case "small": {
                this.stadium = JSON.parse(JSON.stringify(smallMap));
                break;
            }

            case "medium": {
                this.stadium = JSON.parse(JSON.stringify(mediumMap));
                break;
            }

            case "big": {
                this.stadium = JSON.parse(JSON.stringify(bigMap));
                break;
            }
        }

        this.playersByTeam = playerByTeam;
        this.score.scoreLimit = scoreLimit;
        this.score.timeLimit = timeLimit;

        this.stadium.discs.forEach((d: any) => {
            if (d.trait !== undefined) {
                for (const [key, value] of Object.entries(this.stadium.traits[d.trait])) {
                    if (d[key] === undefined) d[key] = value;
                }
            }
            for (const [key, value] of Object.entries(Base.discPhysics)) {
                if (d[key] === undefined) d[key] = value;
            }
            d = this.collisionTransformation(d);
        });

        const ballPhysics = this.stadium.ballPhysics || {}
        for (const [key, value] of Object.entries(Base.ballPhysics)) {
            if (ballPhysics[key] === undefined) ballPhysics[key] = value;
        }
        this.stadium.discs.unshift(this.collisionTransformation(ballPhysics));

        this.stadium.vertexes.forEach((v: any) => {
            if (v.trait !== undefined) {
                for (const [key, value] of Object.entries(this.stadium.traits[v.trait])) {
                    if (v[key] === undefined) v[key] = value;
                }
            }
            for (const [key, value] of Object.entries(Base.vertexPhysics)) {
                if (v[key] === undefined) v[key] = value;
            }
            v = this.collisionTransformation(v);
        });

        this.stadium.segments.forEach((s: any) => {
            if (s.trait !== undefined) {
                for (const [key, value] of Object.entries(this.stadium.traits[s.trait])) {
                    if (s[key] === undefined) s[key] = value;
                }
            }
            for (const [key, value] of Object.entries(Base.segmentPhysics)) {
                if (s[key] === undefined) s[key] = value;
            }
            s = this.collisionTransformation(s, this.stadium.vertexes);
            this.getCurveFSegment(s);
            this.getStuffSegment(s);
        });

        this.stadium.planes.forEach((p:any) => {
            for (const [key, value] of Object.entries(Base.planePhysics)) {
                if (p[key] === undefined) p[key] = value;
            }
            if (p.trait !== undefined) {
                for (const [key, value] of Object.entries(this.stadium.traits[p.trait])) {
                    p[key] = value;
                }
            }
            p = this.collisionTransformation(p);
        });

        this.stadium.goals.forEach((g: any) => {
            g.team = g.team === 'red' ? Team.RED : Team.BLUE;
        });

        this.defaultStadium = JSON.parse(JSON.stringify(this.stadium));
        this.triggerDistance = this.stadium.playerPhysics.radius + this.stadium.discs[0].radius + 0.01;

        this.broadcast("mapData", this.stadium);
    }

    switchPause(): void {
        if(this.state == RoomState.GAME_ENDED)
            return;

        if(this.state == RoomState.PAUSE)
            this.pause(false);
        else
            this.pause(true);
    }

    pause(pause: boolean): void {
        if(this.state == RoomState.GAME_ENDED)
            return;

        if(pause && this.state != RoomState.PAUSE) {
            ![RoomState.PAUSE, RoomState.UNPAUSE].includes(this.state) ? this.lastState = this.state : null;
            this.state = RoomState.PAUSE;
            this.broadcast("gamePause", pause)
        }
        else if(!pause && this.state == RoomState.PAUSE) {
            this.pauseTimeout = 3000;
            this.state = RoomState.UNPAUSE;
            this.broadcast("gamePause", pause)
        }
    }

    setPickMode(player: RoomPlayer | null = null): void {
        this.pickModePlayer = player;
        this.broadcast("pickMode", player ? player.id : null);
    }

    update(dt: number, time: number) {
        if(this.state != RoomState.GAME_ENDED) {
            let scoreIndex = 0;

            for (let i = 0; i < this.stadium.discs.length; i++) {
                const disc = this.stadium.discs[i];

                if ((disc.cGroup & 128) != 0) {
                    this.scorableDiscsId[scoreIndex] = i;
                    this.scorableDiscsPos[scoreIndex][0] = disc.x;
                    this.scorableDiscsPos[scoreIndex][1] = disc.y;
                    scoreIndex++;
                }
            }

            if(![RoomState.PAUSE, RoomState.UNPAUSE].includes(this.state))
            {
                this.currentPlayers.filter((p) => p.team !== 0).forEach((p, i) => {
                    this.resolvePlayerMovement(p);
                });

                this.stadium.discs.forEach((d:any) => {
                    d.x += d.xspeed * dt;
                    d.y += d.yspeed * dt;
                    d.xspeed *= d.damping;
                    d.yspeed *= d.damping;
                });
            }

            this.stadium.discs.forEach((d_a: any, i_a : number) => {
                this.stadium.discs.filter((_: any, i: number) => i > i_a).forEach((d_b: any) => {
                    if((d_a.cGroup & d_b.cMask) !== 0 && (d_a.cMask & d_b.cGroup) !== 0)
                        resolveDDCollision(d_a, d_b);
                });


                if(d_a.invMass !== 0) {
                    this.stadium.planes.forEach((p: any) => {
                        if((d_a.cGroup & p.cMask) !== 0 && (d_a.cMask & p.cGroup) !== 0)
                            resolveDPCollision(d_a, p);
                    });

                    this.stadium.segments.forEach((s: any) => {
                        if((d_a.cGroup & s.cMask) !== 0 && (d_a.cMask & s.cGroup) !== 0)
                            resolveDSCollision(d_a, s);
                    });

                    this.stadium.vertexes.forEach((v: any) => {
                        if((d_a.cGroup & v.cMask) !== 0 && (d_a.cMask & v.cGroup) !== 0)
                            resolveDVCollision(d_a, v);
                    });
                }
            });

            switch(this.state) {
                case RoomState.UNPAUSE: {
                    this.pauseTimeout -= (time * 1000);

                    if(this.pauseTimeout <= 0)
                        this.state = this.lastState

                    break;
                }

                case RoomState.KICK_OFF_RESET: {
                    for (let i = 0; i < this.stadium.discs.length; i++) {
                        const disc = this.stadium.discs[i];

                        if(disc.x != null) 
                            disc.cMask = 39 | this.kickoffReset;
                    }

                    const ball = this.stadium.discs[0];
                    if (ball.xspeed * ball.xspeed + ball.yspeed * ball.yspeed > 0)
                        this.state = RoomState.PLAY;

                    break;
                }

                case RoomState.PLAY: {
                    this.score.time += time;

                    for (let i = 0; i < this.stadium.discs.length; i++) {
                        const disc = this.stadium.discs[i];
                        if(disc.x != null) 
                            disc.cMask = 39;
                    }

                    this.onTick();

                    let scoreTeam = Team.SPECTATORS;;
                    for (let i = 0; i < scoreIndex; i++) {
                        scoreTeam = this.checkGoal([this.stadium.discs[this.scorableDiscsId[i]].x, this.stadium.discs[this.scorableDiscsId[i]].y], this.scorableDiscsPos[i]);

                        if(scoreTeam != Team.SPECTATORS) 
                            break;
                    }

                    if(scoreTeam != Team.SPECTATORS) {
                        this.goalTimeout = 3000;
                        this.state = RoomState.GOAL_SCORE;

                        if(scoreTeam.id == Team.BLUE.id) {
                            this.score.red++;
                            this.onGoal(Team.RED);
                        }
                        else {
                            this.score.blue++;
                            this.onGoal(Team.BLUE);
                        }
                        
                        if(
                            !((this.score.scoreLimit > 0 && (this.score.red >= this.score.scoreLimit || this.score.blue >= this.score.scoreLimit)) ||
                            (this.score.timeLimit > 0 && this.score.time >= 60 * this.score.timeLimit && this.score.red != this.score.blue))
                        ) {
                            this.kickoffReset = scoreTeam.id * 8;
                        }
                    } else {
                        if(this.score.timeLimit > 0 && this.score.time >= 60 * this.score.timeLimit && this.score.red != this.score.blue)
                            this.stopGame(true);
                    }

                    break;
                }

                case RoomState.GOAL_SCORE: {
                    this.goalTimeout -= (time * 1000);
                    if(0 >= this.goalTimeout) {
                        if (
                            (this.score.scoreLimit > 0 && (this.score.red >= this.score.scoreLimit || this.score.blue >= this.score.scoreLimit)) ||
                            (this.score.timeLimit > 0 && this.score.time >= 60 * this.score.timeLimit && this.score.red != this.score.blue)
                        ) {
                            this.stopGame(true);
                        } else
                            this.resetPositionDiscs();
                    }
                    break;
                }
            }
        }

        this.broadcast("worldState", this.getWorldState());
    }

    getWorldState(): any {
        return {
            id: this.id,
            currentPlayers: this.currentPlayers,
            state: this.state,
            score: this.score,
            discs: this.stadium.discs ? this.stadium.discs : null
        }
    }

    resetPositionDiscs() {
        this.state = RoomState.KICK_OFF_RESET;
        this.setDiscDefaultProperties(this.stadium.discs[0], this.defaultStadium.discs[0]);
        var teamArray = [0, 0, 0];
        for (var i = 0; i < this.currentPlayers.length; i++) {
            const player = this.currentPlayers[i];
            this.setPlayerDefaultProperties(player);
            const teamP = player.team;
            if (teamP !== Team.SPECTATORS) {
                // TODO : teamSpawnPoints
                var f = player.disc;
                var valueArr = teamArray[teamP.id];
                var lambda = (valueArr + 1) >> 1;
                if (valueArr % 2 == 1) lambda = -lambda;
                const pos_x = this.stadium.spawnDistance * (2 * teamP.id - 3); // +- spawnDistance
                const pos_y = 55 * lambda;

                if(f != null) {
                    f.x = pos_x;
                    f.y = pos_y;
                }
                teamArray[teamP.id]++;
            }
        }
    }

    setDiscDefaultProperties(currentDisc: Disc, defaultDisc: Disc) {
        currentDisc.x = defaultDisc.x;
        currentDisc.y = defaultDisc.y;
        currentDisc.xspeed = defaultDisc.xspeed;
        currentDisc.yspeed = defaultDisc.yspeed;
        currentDisc.radius = defaultDisc.radius;
        currentDisc.bCoef = defaultDisc.bCoef;
        currentDisc.invMass = defaultDisc.invMass;
        currentDisc.damping = defaultDisc.damping;
        currentDisc.cGroup = defaultDisc.cGroup;
        currentDisc.cMask = defaultDisc.cMask;
    }

    setPlayerDefaultProperties(player: RoomPlayer) {
        if (this.stadium.playerPhysics !== undefined)
            var pPhys: any = this.stadium.playerPhysics;
        else
            var pPhys: any = Base.playerPhysics;

        if (player.team == Team.SPECTATORS) 
            player.disc = null;
        else {
            var pDisc = player.disc;

            if (pDisc == null) {
                pDisc = new Disc({
                    player: player.id,
                    radius: 2,
                    bCoef: 0.5,
                    invMass: 0.5,
                    damping: 0.96,
                    acceleration: 0.1,
                    kickingAcceleration: 0.07,
                    kickingDamping: 0.96,
                    kickStrength: 5,
                    color: 'FFFFFF',
                    avatar: player.avatar,
                    x: 0,
                    y: 0,
                    xspeed: 0,
                    yspeed: 0,
                    cGroup: 0,
                    cMask: 39,
                });
                player.disc = pDisc;
                this.stadium.discs.push(pDisc);
            }
            var defPDisc = this.collisionTransformation(Base.playerPhysics);
            pDisc.radius = defPDisc.radius;
            if (pPhys.radius != null) pDisc.radius = pPhys.radius;
            pDisc.invMass = defPDisc.invMass;
            if (pPhys.invMass != null) pDisc.invMass = pPhys.invMass;
            pDisc.damping = defPDisc.damping;
            if (pPhys.damping != null) pDisc.damping = pPhys.damping;
            pDisc.bCoef = defPDisc.bCoef;
            if (pPhys.bCoef != null) pDisc.bCoef = pPhys.bCoef;
            if (pPhys.acceleration != null) pDisc.acceleration = pPhys.acceleration;
            if (pPhys.kickingDamping != null)
                pDisc.kickingDamping = pPhys.kickingDamping;
            if (pPhys.kickingAcceleration != null)
                pDisc.kickingAcceleration = pPhys.kickingAcceleration;
            pDisc.cMask =
                39 +
                (player.team == Team.RED
                    ? Base.collisionFlags.redKO
                    : Base.collisionFlags.blueKO);
            pDisc.cGroup = player.team.cGroup | defPDisc.cGroup;
            pDisc.x = (2 * player.team.id - 3) * this.stadium.width;
            pDisc.y = 0;
            pDisc.xspeed = 0;
            pDisc.yspeed = 0;
        }
    }

    resolvePlayerMovement(player: RoomPlayer) {
        if (player.disc != null) {
            var playerDisc = player.disc;

            if (player.inputs.kick) {
                player.shooting = true;
            } else {
                player.shooting = false;
                player.shotReset = false;
            }
            if (this.checkKick(player)) {
                let check = false;
                player.disc.kick = true;

                this.stadium.discs.forEach((d:any) => {
                    if ((d.cGroup & Base.collisionFlags.kick) !== 0 && d != playerDisc) {
                        var discPos = { x: d.x, y: d.y };
                        var playerPos = { x: playerDisc.x, y: playerDisc.y };
                        var physics = Base.playerPhysics;
                        var dist_x = discPos.x - playerPos.x;
                        var dist_y = discPos.y - playerPos.y;
                        var dist = Math.sqrt(dist_x ** 2 + dist_y ** 2);
                        if (dist - playerDisc.radius - d.radius < 4) {
                            dist_x = dist_x / dist;
                            dist_y = dist_y / dist;
                            var kStr = physics.kickStrength;
                            d.xspeed = d.xspeed + dist_x * kStr;
                            d.yspeed = d.yspeed + dist_y * kStr;

                            check = true;
                        }
                    }
                });

                if(check) {
                    player.shotReset = true;

                    if(this.stadium.goals != null && this.stadium.goals.length >= 2) {
                        const shotOnTarget = lineToLine({
                            x1: player.disc.x,
                            y1: player.disc.y,
                            x2: this.stadium.discs[0].x,
                            y2: this.stadium.discs[0].y
                        }, 
                        {
                            x1: player.team == Team.RED ? this.stadium.goals[1].p1[0] : this.stadium.goals[0].p0[0],
                            y1: player.team == Team.RED ? this.stadium.goals[1].p1[1] : this.stadium.goals[0].p0[1], 
                            x2: player.team == Team.RED ? this.stadium.goals[1].p0[0] : this.stadium.goals[0].p1[0],
                            y2: player.team == Team.RED ? this.stadium.goals[1].p0[1] : this.stadium.goals[0].p1[1], 
                        }, 
                        true);

                        if(shotOnTarget) {
                            player.shots++;
                            this.isShot = true;
                            this.addHistory("shot", {time: this.score.time, username: player.username, team: player.team});
                        }
                    }

                    player.team == Team.RED ? this.possession[0]++ : this.possession[1]++;
                    this.lastPlayerKick = player;
                    this.setLastPlayerTouchBall(player);

                    if(playerDisc.cMask !== 39) 
                        playerDisc.cMask = 39;

                    this.broadcast("sound", "kick");
                }
            }
            else
                player.disc.kick = false;

            var direction = [0, 0];
            if (player.inputs.up) direction[1]--;
            if (player.inputs.left) direction[0]--;
            if (player.inputs.down) direction[1]++;
            if (player.inputs.right) direction[0]++;
    
            direction = normalise(direction);
    
            playerDisc.xspeed =
                playerDisc.xspeed +
                direction[0] *
                    (this.checkKick(player)
                        ? playerDisc.kickingAcceleration
                        : playerDisc.acceleration);
            playerDisc.yspeed =
                playerDisc.yspeed +
                direction[1] *
                    (this.checkKick(player)
                        ? playerDisc.kickingAcceleration
                        : playerDisc.acceleration);
        }
    }

    resetScorableDiscsId(){
        let a: any[] = [];
        for (let b = 0; b < 256; b++) a.push(0);
        this.scorableDiscsId = a;

        a = [];
        for (let b = 0; b < 256; b++) a.push([0, 0]);
        this.scorableDiscsPos = a;
    }

    checkKick(player: RoomPlayer) {
        if(player.shotReset) 
            return !player.shooting;
        
        return player.shooting;
    }

    checkGoal(discPos: any, discPosPrev: any) {
        if (this.stadium.goals == undefined) 
            return Team.SPECTATORS;

        for (var i = 0; i < this.stadium.goals.length; i++) {
            var check;
            var goal = this.stadium.goals[i];
            var point0 = goal.p0;
            var point1 = goal.p1;
            var dist_x = discPosPrev[0] - discPos[0];
            var dist_y = discPosPrev[1] - discPos[1];
            if (
                (-(point0[1] - discPos[1]) * dist_x + (point0[0] - discPos[0]) * dist_y) *
                (-(point1[1] - discPos[1]) * dist_x + (point1[0] - discPos[0]) * dist_y) > 0
            ) {
                check = false;
            } else {
                var goal_x = point1[0] - point0[0];
                var goal_y = point1[1] - point0[1];
                if (
                    (-(discPos[1] - point0[1]) * goal_x +
                        (discPos[0] - point0[0]) * goal_y) *
                        (-(discPosPrev[1] - point0[1]) * goal_x +
                            (discPosPrev[0] - point0[0]) * goal_y) >
                    0
                ) {
                    check = false;
                } else {
                    check = true;
                }
            }

            if(check) {
                this.broadcast("sound", "goal");
                return goal.team;
            }
        }
        return Team.SPECTATORS;
    }

    collisionTransformation(physics: any, vertexes = null): any {
        var cMask = physics.cMask;
        var y = 0;
        if (typeof cMask === 'object') {
            cMask.forEach((x: string) => {
                y |= (Base.collisionFlags as any)[x];
            });
        }
        physics.cMask = y;
        var cGroup = physics.cGroup;
        y = 0;
        if (typeof cGroup === 'object') {
            cGroup.forEach((x: string) => {
                y |= (Base.collisionFlags as any)[x];
            });
        }
        physics.cGroup = y;
        if (y == 1) physics.cGroup = 193;
        if (physics.pos !== undefined) {
            if (physics.x === undefined) {
                physics.x = physics.pos[0];
                physics.y = physics.pos[1];
            }
            physics.xspeed = 0;
            physics.yspeed = 0;
        }
        if (physics.v0 !== undefined && vertexes !== null) {
            physics.v0 = [(vertexes[physics.v0] as any).x, (vertexes[physics.v0] as any).y];
            physics.v1 = [(vertexes[physics.v1] as any).x, (vertexes[physics.v1] as any).y];
        }
        delete physics.pos;
        delete physics.trait;
        return physics;
    }

    getCurveFSegment(segment: any): void {
        let curve = segment.curve * 0.017453292519943295;
        if (curve < 0) {
            curve *= -1;
            segment.curve *= 1;
            var b = segment.v0;
            segment.v0 = segment.v1;
            segment.v1 = b;
            if (segment.bias !== undefined) segment.bias = -segment.bias;
        }
        const liminf = 0.17435839227423353;
        const limsup = 5.934119456780721;
        if (curve > liminf && curve < limsup) {
            segment.curveF = 1 / Math.tan(curve / 2);
        }
    }

    getStuffSegment(segment: any) {
        if (segment.curveF !== undefined) {
            // curveF
            var a:any = { x: segment.v1[0], y: segment.v1[1] },
                b:any = { x: segment.v0[0], y: segment.v0[1] },
                c:any = 0.5 * (a.x - b.x),
                a:any = 0.5 * (a.y - b.y),
                b:any = { x: segment.v0[0], y: segment.v0[1] },
                d:any = segment.curveF;
            segment.circleCenter = [b.x + c + -a * d, b.y + a + c * d];
            a = { x: segment.v0[0], y: segment.v0[1] };
            b = segment.circleCenter;
            c = a.x - b[0];
            a = a.y - b[1];
            segment.circleRadius = Math.sqrt(c * c + a * a);
            c = { x: segment.v0[0], y: segment.v0[1] };
            a = segment.circleCenter;
            segment.v0Tan = [-(c.y - a[1]), c.x - a[0]];
            c = segment.circleCenter;
            a = { x: segment.v1[0], y: segment.v1[1] };
            segment.v1Tan = [-(c[1] - a.y), c[0] - a.x];
            if (segment.curveF <= 0) {
                segment.v0Tan[0] *= -1;
                segment.v0Tan[1] *= -1;
                segment.v1Tan[0] *= -1;
                segment.v1Tan[1] *= -1;
            }
        } else {
            a = { x: segment.v0[0], y: segment.v0[1] };
            b = { x: segment.v1[0], y: segment.v1[1] };
            c = a.x - b.x;
            a = -(a.y - b.y);
            b = Math.sqrt(a * a + c * c);
            segment.normal = [a / b, c / b];
        }
    }
}