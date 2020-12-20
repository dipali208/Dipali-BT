import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AddCategoryService } from 'src/app/services/admin/add-category.service';
import { QuizService } from 'src/app/services/user/quiz.service';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.scss']
})
export class CreateQuizComponent implements OnInit {
  categoryName:any;
  Quiz={
    quizName:"",
    categoryId:"",
    duration:"",
    count:"",
    
  };
  constructor(private r:Router,private service:AddCategoryService,
    private service1:QuizService,private http: HttpClient) { 
    this.service.getCategoriess().subscribe(data=>{
      this.categoryName=data;
      console.log(this.categoryName[1]);
    })
  }

  ngOnInit(): void {
  }

  // addQuizName()
  // {
  //   console.log(this.Quiz);
  //   this.service1.postQuizName(this.Quiz).subscribe();
  //   this.r.navigate(['addQuestions',this.Quiz.quizName]);
  // }


  public selectedFile: any;
//  public category = {categoryName: '',description:''};

    fileUpload(event:any) {
      this.selectedFile = event.target.files[0];
      console.log(this.selectedFile);
    }
    fileUploadHandler(event:any) {
      event.preventDefault();
     
      const data: FormData = new FormData();
      data.append( 'uploadfile', this.selectedFile);
      data.append('quizName', this.Quiz.quizName);
      data.append('duration', this.Quiz.duration);
      data.append('categoryId', this.Quiz.categoryId);
      data.append('count', this.Quiz.count);
      
      console.log(data);
      
      this.http.post('http://localhost:8080/api/quiz/image', data)
      .subscribe((res:any) => {
        if(res['status'] === 200) {
          alert("njdcnkjdw")
         }
      })
    }
}

