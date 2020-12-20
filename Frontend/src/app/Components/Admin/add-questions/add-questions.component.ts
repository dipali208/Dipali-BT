import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.scss']
})
export class AddQuestionsComponent implements OnInit {
  quizName:any;

  constructor(private route:ActivatedRoute,private r:Router) {

    this.route.paramMap.subscribe((p:ParamMap)=>{
      this.quizName=p.get("quizName");
      console.log(this.quizName);
      // this.service.getQuizList(this.id1).subscribe(data=>{
      //   this.quizList=data;
      //   console.log(this.quizList);
      // });
    })

   }
  ngOnInit(): void {
  }

}
