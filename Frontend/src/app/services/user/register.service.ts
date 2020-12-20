import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Users } from 'src/app/Components/User/register/Users';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  postUser(user:Users):Observable<Users>
  {
    console.log("in service");
    console.log(user);
    return this.http.post<Users>("http://localhost:8080/api/user",user,httpOptions);
  }

  getUsers()
  {
    return this.http.get('http://localhost:8080/api/user')
  }

  getUserById()
  {
    return this.http.get('http://localhost:8080/api/user/'+sessionStorage.getItem("userId"));
  }

}
