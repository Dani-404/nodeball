export interface PlayerLogsInterface {
    pm_user_id?: number | null,
    message: string,
    server_region: string,
    room?: string | null,
    date: Date
}