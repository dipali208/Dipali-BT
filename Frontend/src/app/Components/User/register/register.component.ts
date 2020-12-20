import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from './Users';
import { RegisterService } from 'src/app/services/user/register.service';
import { EncrdecrService } from 'src/app/services/admin/encrdecr.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  flag:boolean=false;
  usr=new Users();
  usrList:any;
  logEmail:string="";
  logPassword:string="";



  constructor(private r:Router,private sObj:RegisterService,private EncrDecr:EncrdecrService) { }

  ngOnInit() {


  }
  login(){

    this.sObj.getUsers().subscribe(data=>{
     this.usrList=data;
     console.log("user List",this.usrList);
      for(let i=0;i<this.usrList.length;i++)
      {
        console.log("decrypted : ",this.EncrDecr.get(this.usrList[i].password));
        if(this.logEmail==this.usrList[i].email && this.logPassword==this.EncrDecr.get(this.usrList[i].password))
        {
            this.flag=true;
            console.log("logged user : ");
            console.log("login done");
            console.log(this.usrList[i]);
            sessionStorage.setItem("userId",this.usrList[i].userId);
            sessionStorage.setItem("userName",this.usrList[i].userName);
            if(this.usrList[i].role=="User")
            {
              
              this.r.navigate(['/home']);
              
            }
            else
            {
              this.r.navigate(['/admin']);
              //history.go();
            }
            
        }
      }
      if(this.flag==false)
      {
        console.log("login failed");
      }

    })

  }
  signup(){
    this.usr.signUpPassword1 = this.EncrDecr.set(this.usr.signUpEmail,this.usr.signUpPassword1);
    // var decrypted = this.EncrDecr.get('123456$#@$^@1ERF', encrypted);
   
    // console.log('Encrypted :' + encrypted);
    // console.log('Encrypted :' + decrypted);
    // alert(this.signUpEmail+"  "+this.signUpName+"  "+this.signUpPassword1+"  "+this.signUpPassword2);
    console.log(this.usr);
    this.sObj.postUser(this.usr).subscribe(data=>{
      console.log(data);
    })

  }
}
