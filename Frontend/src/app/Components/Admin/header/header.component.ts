import { Component, OnInit, Input } from '@angular/core';
import { Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoginDialogComponent } from '../../User/login-dialog/login-dialog.component';
import { RegisterComponent } from '../../User/register/register.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()
  deviceXs: boolean = false;

  @Input()
  user: boolean = false;

  constructor(public dialog: MatDialog) {

  }

  ngOnInit(): void {

  }

  myFunction() {
    console.log("in function");
    var x = document.getElementById("myLinks");
    if (x != null) {
      if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
    }

  }
  logoutUser() {
    sessionStorage.removeItem("userId");
    history.go();
  }


  openSignUp() {
    this.dialog.open(RegisterComponent, {
      width: "500px",
      disableClose: true,
      data: {
        animal: 'panda'
      }
    });
  }

}
