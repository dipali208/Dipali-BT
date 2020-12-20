import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/Class/question';
import { AddQuizService } from 'src/app/services/admin/add-quiz.service';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.scss'],
})
export class AddQuizComponent implements OnInit {
  questions = new Question();
  quizName: any;
  categoryName: any;
  typeName: any;
  submitted = false;
  categoryId: any; // = sessionStorage.getItem('categoryId');
  constructor(private addQuestionService: AddQuizService) {}

  ngOnInit(): void {
    //this.getQuizName();
    this.getCategoryName();
    this.getTypeName();
  }

  catName: string = ' ';
  getId(event: any) {
    this.catName = event.target.value;
    this.getQuizName(this.catName);
  }
  addQuestion() {
    this.submitted = true;
    console.log(this.questions, 'This is from form');
    this.addQuestionService.addQuestion(this.questions).subscribe((data) => {
      console.log(data);
      alert(data);
    });
  }

  getQuizName(catname: any) {
    return this.addQuestionService.getQuizName(catname).subscribe((que) => {
      this.quizName = que;
      console.log(this.quizName);
    });
  }

  getCategoryName() {
    return this.addQuestionService.getCategoryName().subscribe((que) => {
      this.categoryName = que;
      console.log(this.categoryName);
    });
  }

  getTypeName() {
    return this.addQuestionService.getTypeName().subscribe((que) => {
      this.typeName = que;
      console.log(this.typeName);
    });
  }
}
