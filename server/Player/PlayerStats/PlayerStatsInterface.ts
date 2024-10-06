export  default interface PlayerStatsInterface {
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
}