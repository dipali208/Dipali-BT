import { Component, OnInit, OnDestroy } from '@angular/core';
import {MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  showFiller:boolean=false;
mediasub:Subscription;
deviceXs:boolean=false;
user:boolean=false;

myStyle: object = {};
    myParams: object = {};
    width: number = 100;
    height: number = 100;


constructor(public mediaobserver: MediaObserver) {
  this.mediasub =this.mediaobserver.media$.subscribe((result:MediaChange)=>{
    this.deviceXs=result.mqAlias=="xs"? true :false;
    console.log( this.deviceXs);
    if(sessionStorage.getItem('userId'))
    {
      this.user=true;
    }
  })
}

ngOnInit(){
this.mediasub =this.mediaobserver.media$.subscribe((result:MediaChange)=>{
  this.deviceXs=result.mqAlias=="xs"? true :false;

  this.myStyle = {
    'position': 'fixed',
    'width': '100%',
    'height': '100%',
    'z-index': -1,
    'top': 0,
    'left': 0,
    'right': 0,
    'bottom': 0,
};

this.myParams = {
    particles: {
        number: {
            value: 200,
        },
        color: {
            value: '#ff0000'
        },
        shape: {
            type: 'triangle',
        },
}
};
})

}
ngOnDestroy(){
  this.mediasub.unsubscribe();

}
}
