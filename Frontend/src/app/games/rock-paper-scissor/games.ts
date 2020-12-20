
export class Games {
    gameId: number;
    // game_name: string;
    score: number;
    userId: number;
    currDate: string;
    constructor(userId: number, gameId: number, score: number, currDate: string) {
        this.userId = userId;
        this.gameId = gameId;
        this.score = score;
        this.currDate = currDate;
    }
}
