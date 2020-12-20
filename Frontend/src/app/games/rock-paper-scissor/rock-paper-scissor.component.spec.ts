import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RockPaperScissorComponent } from './rock-paper-scissor.component';

describe('RockPaperScissorComponent', () => {
  let component: RockPaperScissorComponent;
  let fixture: ComponentFixture<RockPaperScissorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RockPaperScissorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RockPaperScissorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
