import { Component, OnInit } from '@angular/core';
import { AddCategoryService } from 'src/app/services/admin/add-category.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  category:any;
  quizName:any
  constructor(private service:AddCategoryService) { }

  ngOnInit(): void {
  }

  addCategory()
  {
    this.service.postCategory(this.category).subscribe();
  }

  addQuizName()
  {
    this.service.postQuizName(this.quizName).subscribe();
  }

}
