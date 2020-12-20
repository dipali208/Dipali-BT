import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinoJumpComponent } from './dino-jump.component';

describe('DinoJumpComponent', () => {
  let component: DinoJumpComponent;
  let fixture: ComponentFixture<DinoJumpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DinoJumpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DinoJumpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
