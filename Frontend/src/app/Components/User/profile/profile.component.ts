import { Component, OnInit } from '@angular/core';
import { AddFavouriteService } from 'src/app/services/user/add-favourite.service';
import { RegisterService } from 'src/app/services/user/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  favList:any;
  userDetails:any;
  panelOpenState = false;

 

  constructor(private service:AddFavouriteService,private service1:RegisterService,private r:Router) {

    this.service1.getUserById().subscribe((data)=>{
      this.userDetails=data;
      console.log(this.userDetails);
    })

    this.service.getFavList().subscribe((data)=>{
      this.favList=data;
      console.log(this.favList);
    })
   }

  ngOnInit(): void {
  }

  removeFromList(id:any)
  {
    alert(id);
    this.service.deleteFavQuizById(id).subscribe();
    window.location.reload();
  }

}
