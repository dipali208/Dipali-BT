import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { GameService } from 'src/app/services/admin/game.service';

@Component({
  selector: 'app-show-prev-score',
  templateUrl: './show-prev-score.component.html',
  styleUrls: ['./show-prev-score.component.scss']
})
export class ShowPrevScoreComponent implements OnInit {
  id: any;

  constructor(private gameService: GameService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe((p: ParamMap) => {
      this.id = p.get("id");
      alert(this.id);
            //   sessionStorage.setItem("categoryId",this.id);
      //   this.gameService.getgameById(this.id);
      this.gameService.getGame(this.id)

    })
    this.getPrevScore(this.id);
  }

  ngOnInit(): void {

  }
  nscore: any = [];
  newdata: any
  userId: any = sessionStorage.getItem('userId');
  getPrevScore(ID: any) {
    this.gameService.getPrevScore(this.userId, ID).subscribe((data) => {
      this.newdata = data;
      this.nlength = this.newdata.length;
      console.log(data, "heloo");

      console.log(this.newdata[0].gameName, "kkkkkk");
      // console.log(this.newdata[0].click_count,"kkppkkkk");
      for (let i = 0; i < this.nlength; i++) {
        this.barChartLabels.push(this.newdata[i].gameName);
        this.nscore.push(this.newdata[i].score);
      }
    });
  }

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  nlength: any;
  public barChartData: ChartDataSets[] = [
    { data: [] = this.nscore, label: 'Previous Score' },
  ];


}
