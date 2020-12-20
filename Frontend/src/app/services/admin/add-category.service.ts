import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders  } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class AddCategoryService {

  constructor(private http: HttpClient) { }

  postCategory(category:any):Observable<any>
  {
    console.log("in service");
    console.log(category);
    return this.http.post<any>("http://localhost:8080/api/cat/",
    {
      "categoryName":category
    });
  }


  getCategoriess()
  {
    return this.http.get('http://localhost:8080/api/cat')
  }


  postQuizName(quizName:any):Observable<any>
  {
    console.log("in service");
    console.log(quizName);
    return this.http.post<any>("http://localhost:8080/api/quiz/addName",
    {
      "quizName":quizName
    });
  }
}
