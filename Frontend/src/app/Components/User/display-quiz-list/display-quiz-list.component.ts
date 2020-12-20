import { Component, OnInit, AfterViewInit, AfterViewChecked } from '@angular/core';
import { ParamMap, ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/services/user/quiz.service';
import { AddFavouriteService } from 'src/app/services/user/add-favourite.service';

@Component({
  selector: 'app-display-quiz-list',
  templateUrl: './display-quiz-list.component.html',
  styleUrls: ['./display-quiz-list.component.scss']
})
export class DisplayQuizListComponent implements OnInit {
  id1:any;
  quizList:any;
  favList:any=[];
  constructor(private route:ActivatedRoute,private service:QuizService,private service1:AddFavouriteService) {

    this.route.paramMap.subscribe((p:ParamMap)=>{
      this.id1=p.get("id");
      console.log(this.id1);
      sessionStorage.setItem("categoryId",this.id1);
      this.getQuizByCategory(this.id1);
    })
   }


   
  ngOnInit(): void {
    this.service1.getFavList().subscribe((data)=>{
      this.favList=data;
      console.log("fav list",this.favList);
    })
  }


  getQuizByCategory(id:number) {
    return this.service.displayQuizByCategory(this.id1)
      .subscribe((que)=>{
        this.quizList = que
          console.log(que)
      }
    );
  }

   addToFav(q:any)
   {
     var fav=document.getElementById(q);
     if(fav!=null)
     {
       fav.classList.add('remove');
     }
     var list:any;
     console.log(fav);
     if(fav != null)
     {
      console.log(fav.classList);
      list=fav.classList;

      for(let i=0;i<list.length;i++)
      {
        if(list[i]=="change")
        {
          fav.classList.remove("change");
          fav.classList.add("remove");
          console.log("delete");
          this.service1.deleteFavQuiz(q).subscribe();
          break;
        }
        if(list[i]=="remove")
        {
          fav.classList.remove("remove");
          fav.classList.add("change");
          console.log("favorate added");
          this.service1.postFavQuiz(q).subscribe();
          break;
        }

      }
      
      
     }
    
     console.log("hi");
     console.log(q);
     
   }


}
