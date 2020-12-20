import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders  } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  questionArray :any = [];
  constructor(private http: HttpClient) { }

  displayQuestion(quizId:number,categoryId:number){
    return this.http.get('http://localhost:8080/api/displayQuiz/getQuestionarie?quizId='+quizId+'&categoryId='+categoryId);
  }


  displayOption(questionId:number){
    return this.http.get('http://localhost:8080/api/getAnswer/getOption/'+questionId);
  }
}
