import Team, { TeamKeys } from "../Team/Team";
import { GoalInterface } from "./GoalInterface";

export default class Goal implements GoalInterface {
    id: number;
    username: string;
    team: typeof Team[TeamKeys];
    assist_id: number | null;
    assist_username: string | null;
    time: number;
    score_team: typeof Team[TeamKeys];

    constructor(data: GoalInterface) {
        this.id = data.id;
        this.username = data.username;
        this.team = data.team;
        this.assist_id = data.assist_id || null;
        this.assist_username = data.assist_username || null;
        this.time = data.time;
        this.score_team = data.score_team;
    }
}