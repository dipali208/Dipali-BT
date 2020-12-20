import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetQuizUserService {

  constructor(private http:HttpClient) { }
  getUsersQuiz()
  {
    return this.http.get('http://localhost:8080/api/admin/getUsersForQuiz')
  }
}
