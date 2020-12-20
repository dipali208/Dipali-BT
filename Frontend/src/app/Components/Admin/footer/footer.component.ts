import { Component, OnInit } from '@angular/core';
import { FeedbackService } from 'src/app/services/admin/feedback.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private service:FeedbackService) { }

  ngOnInit(): void {
  }

  bad()
  {
    console.log("bad");
    this.service.deleteFeedback();
    this.service.postFeedback("bad");
  }

  moderate()
  {
    console.log("moderate");
  this.service.deleteFeedback();
    this.service.postFeedback("moderate");
  }
  good()
  {
    console.log("good");
    this.service.deleteFeedback();
    this.service.postFeedback("good");
  }
  goup()
  {
    window.scrollTo(0,0);
  }
}
