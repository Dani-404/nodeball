export interface SanctionInterface {
    id: number,
    type: string,
    user_id: number,
    username: string,
    ip: string,
    date: Date,
    end_date: Date,
    by_player: string,
    unban_by?: null | string,
    reason: null | string
}