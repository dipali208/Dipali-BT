import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  OnDestroy,
  OnChanges,
} from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Subscription, timer } from 'rxjs';
import { correctAnswers } from 'src/app/Class/answer';
import { Question } from 'src/app/Class/question';
import { State } from 'src/app/Class/state';
import { QuizStateService } from 'src/app/services/admin/quiz-state.service';
import { VerifyAnswerService } from 'src/app/services/admin/verify-answer.service';
import { QuestionsService } from 'src/app/services/user/questions.service';
import { ScoreService } from 'src/app/services/admin/score.service';
import { Score } from 'src/app/Class/score';
import { AddQuizService } from 'src/app/services/admin/add-quiz.service';
import { CountdownModule, CountdownComponent } from 'ngx-countdown';

@Component({
  selector: 'app-display-quiz',
  templateUrl: './display-quiz.component.html',
  styleUrls: ['./display-quiz.component.scss'],
})
export class DisplayQuizComponent implements OnInit, OnDestroy {
  score: number = 0;
  questions = new Question();
  answerArray: correctAnswers[] = [];
  list: any = [];
  typeName: any;
  questionId: any;
  quizId: any;
  categoryId: any;
  QuestionList: any;

  counter = 1800;
  tick = 1000;
  tempScore: any;
  ans: any;
  correctans: any;
  a: string;
  timer: any;
  newTimer: any;
  seconds: number = 0;

  qnProgress: number = 0;
  id: any;
  showStop: boolean;
  state: any[];
  userId: any = sessionStorage.getItem('userId');
  duration: any;
  newTime: any;
  reamaingTime: any;
  newRTime: any;
  @ViewChild('cd1', { static: false }) private cd1: CountdownComponent;
  constructor(
    private r: Router,
    private service: QuestionsService,
    private verifyAnswerService: VerifyAnswerService,
    private route: ActivatedRoute,
    private quizStateService: QuizStateService,
    private scoreService: ScoreService,
    private addQuizService: AddQuizService
  ) {
    //this.timer=600;
    this.route.paramMap.subscribe((p: ParamMap) => {
      this.quizId = p.get('id');
      // console.log('quiz id is : ' + this.quizId);
      this.storeQuizId(this.quizId);
    });
    this.getQuestion(this.quizId);

    this.getPrevStateAnswer();
    console.log('Time in constructor', this.timer);
  }

  ngOnInit(): void {
    this.getTimer();
    this.verifyAnswerService.getScore(this.userId).subscribe((data) => {
      //   let prevScore = Object.values(data);

      // console.log('score data from api ', data);
      this.tempScore = data;
      this.score = this.tempScore[0].score;
      // console.log('temp score : ', this.score);
    });
    // if (this.timer == 600) this.reamaingTime = this.timer;
    // else {
    //   this.reamaingTime = this.state[0].reamainingTime;
    // }
    // console.log(this.state[0].reamainingTime);

    this.getRemainingTime();
    console.log('In ngOnInit', this.timer);
  }
  getTimer() {
    this.addQuizService.getDuration(this.newQuizId).subscribe((data) => {
      // console.log(data, 'duration');
      this.duration = data;
      this.timer = this.duration[0].duration;
      // console.log(this.newQuizId, this.timer, 'quizId duration');
      this.reamaingTime = this.timer;

      // if (this.reamaingTime === 0) {
      //   this.r.navigate(['/result']);
      // }
      console.log(
        'In getTimer() remaining time',
        this.reamaingTime,
        'Time: ',
        this.timer
      );
    });
  }
  interval: any; // Moved it out.
  getRemainingTime() {
    this.interval = setInterval(() => {
      this.reamaingTime = this.reamaingTime - 3;
      // if (this.newRTime === undefined) {
      //   this.reamaingTime = this.timer - 3000 / 1000;
      // } else {
      //   this.reamaingTime = this.newRTime - 3000 / 1000;
      // }
      // console.log(this.timer, this.reamaingTime, '  reamaining time');

      this.quizStateService
        .updateTime(this.reamaingTime, this.userId, this.newQuizId)
        .subscribe((time: any) => {});
      console.log('In getRemainingTime()', this.reamaingTime);

      // this.quizStateService.getRemainingTime(this.userId).subscribe((rTime) => {
      //   this.newTime = rTime;
      //   this.newRTime = this.newTime[0].reamainingTime;
      // console.log(this.newRTime, 'rTime');
      // });
    }, 3000);
  }

  stateData: any = [];
  storeQuizId(id: any) {
    this.newQuizId = id;
   sessionStorage.setItem("quizId",this.newQuizId);
  }
  getPrevStateAnswer() {
    this.quizStateService.getState(this.userId).subscribe((data) => {
      // console.log(data, 'state answer');
      let state = Object.values(data);

      if (typeof this.state !== undefined) {
        for (var i = 0; i < this.QuestionList.length; i++) {
          for (var j = 0; j < state.length; j++) {
            // console.log(state[j].questionId);

            if (this.QuestionList[i].questionId == state[j].questionId) {
              this.QuestionList[i].found = true;
              this.QuestionList[i].selectedOption = state[j].answer;
            }
          }
        }

        console.log(state[0].reamainingTime, 'in state rTime');

        this.timer = state[0].reamainingTime;
        this.reamaingTime = this.timer;
        console.log(
          'in getPrevState, timer:',
          this.timer,
          'Remaining time:',
          this.reamaingTime
        );
        // console.log(state, 'state prev');
      }
    });
  }

  ngOnDestroy() {
    //alert('in destroy');
    // clearInterval(this.interval);
  }

  getQuestion(quizId: number) {
    // console.log('in fun');
    this.categoryId = sessionStorage.getItem('categoryId');
    // this.service.getTime(quizId).subscribe(time => {
    //   this.timer = time;

    //   this.startTimer();
    //   //this.newTimer= this.timer[0].duration;

    console.log(this.timer, 'time managment');
    console.log(typeof this.timer);

    // })
    return this.service
      .displayQuestion(quizId, this.categoryId)
      .subscribe((data) => {
        console.log(data);
        this.QuestionList = data;
        // console.log(this.QuestionList, 'Qusetion lIst');
        Object.keys(this.QuestionList).map((ele) => {
          this.QuestionList[ele] = {
            ...this.QuestionList[ele],
            found: null,
            selectedOption: null,
            CorrectOption: null,
            Time: null,
          };
          // console.log(this.QuestionList.questionId);
        });

        // console.log(this.QuestionList.length, 'Array xyzfhgfh');
        sessionStorage.removeItem('categoryId');
      });
  }
  found: boolean;
  queId: number;
  cans: any;
  flag: boolean = true;
  queId1: any;
  result: any;
  newQuizId: any;
  //  state = new State(this.result,1,this.queId1, this.newQuizId);

  //   addState(){
  //     alert("in state fun");
  //     this.quizStateService.addState(this.state).subscribe(state=>{
  // console.log(state , "state data11");
  //       alert(state);
  //     })
  //   }

  question(Qid: any, Aid: any, index: any) {
    //this.addState();
    // console.log(this.cd1.left);

    this.queId1 = Qid;
    this.result = Aid;

    // console.log('cdcvfgbfdgbgffffff' + this.result);
    // console.log('Question id is : ' + Qid);
    // console.log('Answer id is : ' + Aid);
    var obj = new correctAnswers(Qid, Aid);
    //this.getRemainingTime();
    const state = new State(
      Aid,
      this.userId,
      Qid,
      this.newQuizId,
      this.reamaingTime
    );

    this.quizStateService.addState(state).subscribe((state) => {
      // console.log(state, 'state data11');
      alert(state);
    });

    // this.found =true;
    console.log(this.QuestionList[Qid]);
    // let index = this.QuestionList.findIndex(ele => ele.id === Qid);
    // this.QuestionList[Qid].found = true;

    // console.log(this.QuestionList, 'hello');

    if (this.answerArray.length == 0) {
      this.answerArray.push(obj);
    } else {
      for (let i = 0; i < this.answerArray.length; i++) {
        alert(this.answerArray[i].id + '' + Qid);

        if (this.answerArray[i].id === Qid) {
          this.answerArray[i].userAnswer = obj.userAnswer;
          // this.answerArray.splice(i,1);
          //this.answerArray.push(obj);
          //this.answerArray.push(obj);
          this.flag = false;
          break;
        }
      }
      if (this.flag == true) {
        this.answerArray.push(obj);
      }
    }

    // console.log('answer array : ', this.answerArray);

    return this.verifyAnswerService.verifyAnswer(Qid).subscribe((data) => {
      // this.a="";
      this.ans = data;
      this.verifyAnswerService.answer = data;
      // console.log('Array Is ', data);

      // console.log(this.ans, 'hoooooooooooo');
      // console.log('answer is' + this.ans[0].answer);
      this.a = this.ans[0].answer;
      // console.log(' vcv' + this.a);

      this.QuestionList[index] = {
        ...this.QuestionList[index],
        found: true,
        selectedOption: Aid,
        CorrectOption: this.a,
        // Time: this.newRTime,
      };

      if (Aid === this.ans[0].answer) {
        this.score = (this.score + 1) * 5;

        this.flag = false;

        // console.log(this.score + 'score is');
        //  localStorage.setItem("score",this.score);

        alert('Right answer');
        // console.log('Right Ans' + this.ans[0].answer);
      } else {
        //this.flag = true;
      }
    });
  }

  onSubmit() {
    // //Get score
    // this.verifyAnswerService.getScore(this.userId).subscribe((data) => {
    //   //   let prevScore = Object.values(data);

    // console.log('score data from api ', data);
    //   this.tempScore = data;
    //   this.score = this.tempScore[0].score;
    // console.log('temp score : ', this.score);
    // });

    // //delete data of user from state table
    // this.quizStateService.removeStateData(1).subscribe((state) => {
    // console.log(state, 'state data11');
    //   alert('in delete');
    // });

    let currDate = new Date().toISOString().slice(0, 10);
    // console.log(currDate);

    const score = new Score(this.userId, this.newQuizId, this.score, currDate);
    this.scoreService.addScore(score).subscribe((score) => {
      // console.log(score);
      alert(score);
    });

    this.r.navigate(['/result']);
  }

  // getAnswer(questionId:number){

  // return this.verifyAnswerService.verifyAnswer(questionId).subscribe(data=>{
  //   this.a="";
  //    this.ans=data;

  //  console.log(this.ans[0].answer);
  // this.a=this.ans[0].answer;
  //console.log("gm" + typeof(this.ans[0].answer));

  //   }

  // );
  // return this.a;
  // }
}
