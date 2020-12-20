import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowCategoryService {

  constructor( private http: HttpClient) { }
  getCategoryName(){
    return this.http.get('http://localhost:8080/api/quiz/getCategoryName')
  }
}
