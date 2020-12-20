import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayQuizListComponent } from './display-quiz-list.component';

describe('DisplayQuizListComponent', () => {
  let component: DisplayQuizListComponent;
  let fixture: ComponentFixture<DisplayQuizListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayQuizListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayQuizListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
