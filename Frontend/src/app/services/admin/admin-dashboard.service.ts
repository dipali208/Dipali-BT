import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminDashboardService {

  constructor(public http: HttpClient) { }

  getCategoryInfo() {
    return this.http.get('http://localhost:8080/api/cat');
  }

}
