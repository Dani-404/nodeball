import ScoreInterface from "./ScoreInterface";

export default class Score implements ScoreInterface {
    red: number;
    blue: number;
    time: number;
    scoreLimit: number;
    timeLimit: number;

    constructor(data: ScoreInterface) {
        this.red = data.red || 0;
        this.blue = data.blue || 0;
        this.time = data.time || 0;
        this.scoreLimit = data.scoreLimit ;
        this.timeLimit = data.timeLimit;
    }
}