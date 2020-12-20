import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { State } from 'src/app/Class/state';

@Injectable({
  providedIn: 'root',
})
export class QuizStateService {
  userid: any;
  constructor(private http: HttpClient) {}
  private questionUrl = 'http://localhost:8080/api/state';
  addState(state: State): Observable<State> {
    console.log(state, 'This is a question');
    return this.http.post<State>(this.questionUrl, state);
  }

  getState(userId: number) {
    return this.http.get('http://localhost:8080/api/state/' + userId);
  }

  removeStateData(userId: number) {
    return this.http.delete('http://localhost:8080/api/state/' + userId);
  }

  updateTime(rtime: any, uId: any, qId: any) {
    return this.http.put('http://localhost:8080/api/state', {
      reamainingTime: rtime,
      userId: uId,
      quizId: qId,
    });
  }

  getRemainingTime(userId: number) {
    return this.http.get('http://localhost:8080/api/state/gettimer/' + userId);
  }
}
