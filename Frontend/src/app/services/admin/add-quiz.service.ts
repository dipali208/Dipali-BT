import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from 'src/app/Class/question';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AddQuizService {
  private questionUrl = 'http://localhost:8080/api/quiz/addQuestion';  // URL to web api
  constructor( private http: HttpClient) {

   }

   addQuestion (question: Question): Observable<Question> {
     console.log(question, "This is a question")
    return this.http.post<Question>(this.questionUrl, question, httpOptions);
  }
  getQuizName(catName:any){
    return this.http.get('http://localhost:8080/api/quiz/getQuizName/'+catName)
  }

  getCategoryName(){
    return this.http.get('http://localhost:8080/api/quiz/getCategoryName')
  }
  getTypeName(){
    return this.http.get('http://localhost:8080/api/quiz/getTypeName')
  }

  getDuration(quizId:number){
    return this.http.get('http://localhost:8080/api/quiz/'+quizId)
  }
}
