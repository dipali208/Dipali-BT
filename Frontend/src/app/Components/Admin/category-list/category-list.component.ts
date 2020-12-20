import { Component, OnInit } from '@angular/core';
import { AdminDashboardService } from 'src/app/services/admin/admin-dashboard.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  categoryList:any;
  constructor(private adminDashboardService:AdminDashboardService) { }

  ngOnInit(): void {
    this.getCategoryInfo();
  }

  getCategoryInfo() {
    return this.adminDashboardService.getCategoryInfo()
      .subscribe(
        (que:any) => {
          this.categoryList = que;
          console.log(this.categoryList);
        }
      );
  }

}
