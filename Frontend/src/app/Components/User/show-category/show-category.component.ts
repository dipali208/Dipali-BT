import { Component, OnInit } from '@angular/core';

import { FormControl , ReactiveFormsModule} from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { ShowCategoryService } from 'src/app/services/user/show-category.service';
import { QuizService } from 'src/app/services/user/quiz.service';


@Component({
  selector: 'app-show-category',
  templateUrl: './show-category.component.html',
  styleUrls: ['./show-category.component.scss']
})
export class ShowCategoryComponent implements OnInit {

  categoryName: any;
  QuizNames: any;
  QuizNamesForSearch: any = [];
  selectedQuiz: any;
  inputText: any;

  myControl = new FormControl();
  options: string[] =this.QuizNamesForSearch;
  filteredOptions: Observable<string[]>;

  ngOnInit() {
    this.getCategoryName();
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  constructor(private service:QuizService,
    private displayQuizService:ShowCategoryService) { 
    this.service.getQuizNames().subscribe(data=>{
      this.QuizNames=data;
      console.log("quiz names : ",this.QuizNames);
      for(let i=0;i<this.QuizNames.length;i++)
      {
        this.QuizNamesForSearch.push(this.QuizNames[i].quizName);
     
      }
    
    })

  }



  go()
  {
    alert(this.inputText);

  }


  getCategoryName() {
    return this.displayQuizService.getCategoryName()
      .subscribe(
        que => {
          this.categoryName = que;
          console.log(this.categoryName);
        }
      );
  }

}
