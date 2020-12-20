import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPrevScoreComponent } from './show-prev-score.component';

describe('ShowPrevScoreComponent', () => {
  let component: ShowPrevScoreComponent;
  let fixture: ComponentFixture<ShowPrevScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPrevScoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPrevScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
