import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/user/quiz.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
 
  QuizNames:any;
  myControl = new FormControl();


  constructor(private service:QuizService) { 
    this.service.getQuizNames().subscribe(data=>{
      this.QuizNames=data;
      console.log(data);
    })
  }

  ngOnInit() {

  }


  game1()
  {
    console.log("play game1");
  }
  game2()
  {
    console.log("play game2");
  }
  game3()
  {
    console.log("play game3");
  }
  game4()
  {
    console.log("play game4");
  }
  game5()
  {
    console.log("play game5");
  }
  game6()
  {
    console.log("play game6");
  }

}
