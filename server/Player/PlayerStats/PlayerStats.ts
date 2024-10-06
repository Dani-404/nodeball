import PlayerStatsInterface from "./PlayerStatsInterface";

export default class PlayerStats implements PlayerStatsInterface {
    user_id: number;
    elo: number;
    level_xp: number;
    games_won: number;
    games_lost: number;
    best_streak: number;
    shots: number;
    goals: number;
    hat_tricks: number;
    assists: number;
    saves: number;
    played_gk: number;
    cs: number;
    pass_successful: number;
    pass_missed: number;

    constructor(userId: number, data: PlayerStatsInterface = {
        user_id: userId,
        elo: 0,
        level_xp: 0,
        games_won: 0,
        games_lost: 0,
        best_streak: 0,
        shots: 0,
        goals: 0,
        hat_tricks: 0,
        assists: 0,
        saves: 0,
        played_gk: 0,
        cs: 0,
        pass_successful: 0,
        pass_missed: 0
    }) {
        this.user_id = userId;
        this.elo = data.elo;
        this.level_xp = data.level_xp;
        this.games_won = data.games_won;
        this.games_lost = data.games_lost;
        this.best_streak = data.best_streak;
        this.shots = data.shots;
        this.goals = data.goals;
        this.hat_tricks = data.hat_tricks;
        this.assists = data.assists;
        this.saves = data.saves;
        this.played_gk = data.played_gk;
        this.cs = data.cs;
        this.pass_successful = data.pass_successful;
        this.pass_missed = data.pass_missed;
    }

    getPassPerMatch(): number {
        if(this.getGamesPlayed() == 0)
            return 0;

        return +(this.pass_successful/this.getGamesPlayed()).toFixed(2);
    }

    getPassAccuracy(): number {
        if((this.pass_successful + this.pass_missed) == 0)
            return 0;

        return +(this.pass_successful/(this.pass_successful + this.pass_missed)).toFixed(2);
    }

    getCsPercentage(): number {
        if(this.played_gk == 0)
            return 0;

        return +((this.cs/this.played_gk) * 100).toFixed(2);;
    }

    getSavesPerMatch(): number {
        if(this.getGamesPlayed() == 0)
            return 0;

        return +(this.saves/this.getGamesPlayed()).toFixed(2);
    }

    getAssistsPerMatch(): number {
        if(this.getGamesPlayed() == 0)
            return 0;

        return +(this.assists/this.getGamesPlayed()).toFixed(2);
    }

    getGoalsPerMatch(): number {
        if(this.getGamesPlayed() == 0)
            return 0;

        return +(this.goals/this.getGamesPlayed()).toFixed(2);
    }

    getShotsPerMatch(): number {
        if(this.getGamesPlayed() == 0)
            return 0;

        return +(this.shots/this.getGamesPlayed()).toFixed(2);
    }

    getWinrate(): number {
        if(this.getGamesPlayed() == 0)
            return 0;

        return +((this.games_won/this.getGamesPlayed()) * 100).toFixed(2);
    }

    getGamesPlayed(): number {
        return this.games_won + this.games_lost;
    }

    getValueFor(key: string): Number {
        switch(key) {
            case "games_played":
                return this.getGamesPlayed();

            case "win_rate":
                return this.getWinrate();

            case "shots_per_match":
                return this.getShotsPerMatch();

            case "goals_per_match":
                return this.getGoalsPerMatch();

            case "assists_per_match":
                return this.getAssistsPerMatch();

            case "saves_per_match":
                return this.getSavesPerMatch();

            case "pass_accuracy":
                return this.getPassAccuracy();

            case "pass_per_match":
                return this.getPassPerMatch();

            case "cs_percentage":
                return this.getCsPercentage();

            default:
                return 0
        }
    }

    getStats(): any {
        return {
            elo: this.elo,
            level_xp: this.level_xp,
            games_played: this.getGamesPlayed(),
            games_won: this.games_won,
            games_lost: this.games_lost,
            win_rate: this.getWinrate(),
            best_streak: this.best_streak,
            shots: this.shots,
            shots_per_match: this.getShotsPerMatch(),
            goals: this.goals,
            goals_per_match: this.getGoalsPerMatch(),
            hat_tricks: this.hat_tricks,
            assists: this.assists,
            assists_per_match: this.getAssistsPerMatch(),
            saves: this.saves,
            saves_per_match: this.getSavesPerMatch(),
            pass_accuracy: this.getPassAccuracy(),
            pass_per_match: this.getPassPerMatch(),
            played_gk: this.played_gk,
            cs: this.cs,
            cs_percentage: this.getCsPercentage()
        }
    }

    save(): void {

    }
}