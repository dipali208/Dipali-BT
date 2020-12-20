import { Component, OnInit } from '@angular/core';

import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { GetQuizUserService } from 'src/app/services/admin/get-quiz-user.service';
import { QuizService } from 'src/app/services/user/quiz.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
 users:any;

  clickCount:any=[];
newdata:any;
topScorers: any;

public barChartOptions: ChartOptions = {
  responsive: true,
};
public barChartLabels: Label[] = [];
public barChartType: ChartType = 'bar';
public barChartLegend = true;
public barChartPlugins = [];
  nlength: any;
  public barChartData: ChartDataSets[] = [
    { data: []=this.clickCount, label: 'Most Played Quiz' },
   
  ];
 


  constructor(private service:GetQuizUserService,private qserv:QuizService) {

    this.getTopscorersOfDay();
  this.getQuizUsers();
  this.qserv.getQuizNames().subscribe((data:any)=>{
    console.log(data);
    this.newdata=data;
    this.nlength=this.newdata.length;
    // console.log(this.newdata[0].quizName,"kkkkkk");
    // console.log(this.newdata[0].click_count,"kkppkkkk");
    for(let i=0;i<this.nlength;i++)
    {
     
    this.barChartLabels.push(this.newdata[i].quizName);
    this.clickCount.push(this.newdata[i].click_count);
   
    }
  })
  }
  ngOnInit(): void {
    
  }

  
getQuizUsers()
{
     this.service.getUsersQuiz().subscribe(data=>{
       this.users=data;
       console.log(this.users);
       
     })
   }
   getTopscorersOfDay()
   {
    this.qserv.getTopScorersOfDay().subscribe(data=>{
      this.topScorers=data;
     // alert(this.topScorers[0].score);

   })
}
}
