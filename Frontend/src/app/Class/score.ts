export class Score {
  userId: number;
  quizId: number;
  score: number;
  currDate: string;
  constructor(userId: number, quizId: number, score: number, currDate: string) {
    this.userId = userId;
    this.quizId = quizId;
    this.score = score;
    this.currDate = currDate;
  }
}
