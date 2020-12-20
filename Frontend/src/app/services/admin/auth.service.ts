import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate{

  constructor(private router:Router, public http: HttpClient) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  {
   if(sessionStorage.getItem("userId"))
   {
     console.log("User Has Logged in");
     return true;
   }
   else
   {
    console.log("User Has not Logged in");
     this.router.navigate(['/login']);
     return false;  
   }
  }
}
