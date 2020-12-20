import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders  } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  userId:any;
  constructor(private http: HttpClient) { }

  postFeedback(exp:any):Observable<any>
  {
    this.userId=sessionStorage.getItem(("userId"));
    console.log("in service");
    console.log(exp);
    return this.http.post<any>("http://localhost:8080/api/feedback",
    {
      "userId":this.userId,
      "experience":exp
    });
  }

  deleteFeedback():Observable<any>
  {
    this.userId=sessionStorage.getItem(("userId"));
    alert("http://localhost:8080/api/feedback/"+this.userId);
    return this.http.delete<any>("http://localhost:8080/api/feedback/"+this.userId);
  }
}
