import Team, { TeamKeys } from "../Team/Team";

export interface GoalInterface {
    id: number,
    username: string,
    team: typeof Team[TeamKeys],
    assist_id?: null | number,
    assist_username?: null | string,
    time: number,
    score_team: typeof Team[TeamKeys]
}