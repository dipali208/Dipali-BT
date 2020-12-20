import { Component, OnInit } from '@angular/core';
import { VerifyAnswerService } from 'src/app/services/admin/verify-answer.service';
import { QuizStateService } from 'src/app/services/admin/quiz-state.service';
import { ScoreService } from 'src/app/services/admin/score.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  result: any;
  userId: any = sessionStorage.getItem('userId');
  tempScore: any;
  newdata: any;
  nscore: any = [];

  constructor(
    private verifyAnswerService: VerifyAnswerService,
    private quizStateService: QuizStateService,
    private scoreService: ScoreService
  ) {}

  ngOnInit(): void {
    //Get score
    this.verifyAnswerService.getScore(this.userId).subscribe((data) => {
      //   let prevScore = Object.values(data);

      console.log('score data from api ', data);
      this.tempScore = data;
      this.result = this.tempScore[0].score;
      console.log('temp score : ', this.result);
    });

    //delete data of user from state table
    this.quizStateService.removeStateData(this.userId).subscribe((state) => {
      console.log(state, 'state data11');
      alert('in delete');
    });

    this.getPrevScore();
  }

  /** */
quizId:any = sessionStorage.getItem("quizId");
  getPrevScore() {
    this.scoreService.getPrevScore(this.userId, this.quizId).subscribe((data) => {
      this.newdata = data;
      this.nlength = this.newdata.length;
      // console.log(this.newdata[0].quizName,"kkkkkk");
      // console.log(this.newdata[0].click_count,"kkppkkkk");
      for (let i = 0; i < this.nlength; i++) {
        this.barChartLabels.push(this.newdata[i].quizName);
        this.nscore.push(this.newdata[i].score);
      }
    });
  }

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'line';
  public barChartLegend = true;
  public barChartPlugins = [];
  nlength: any;
  public barChartData: ChartDataSets[] = [
    { data: [] = this.nscore, label: 'Previous Score' },
  ];
}
