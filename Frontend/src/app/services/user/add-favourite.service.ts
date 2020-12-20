import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders  } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class AddFavouriteService {

  constructor(private http: HttpClient) { }

  postFavQuiz(quizId:any):Observable<any>
  {
    console.log("in service");
    console.log(quizId);
    return this.http.post<any>("http://localhost:8080/api/fav",
    {
      "userId":sessionStorage.getItem("userId"),
      "questionId":quizId
    });
  }

  deleteFavQuiz(questionId:any):Observable<any>
  {
    console.log("in service");
    console.log(questionId);
    return this.http.delete<any>("http://localhost:8080/api/fav/remove/"+questionId);
  }

  getFavList()
  {
    return this.http.get("http://localhost:8080/api/fav/"+sessionStorage.getItem("userId"));
  }

  deleteFavQuizById(id:any):Observable<any>
  {
    console.log("in service");
    console.log(id);
    return this.http.delete<any>("http://localhost:8080/api/fav/"+id);
  }
  


}
