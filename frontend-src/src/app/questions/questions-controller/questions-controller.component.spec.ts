import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsControllerComponent } from './questions-controller.component';

describe('QuestionsControllerComponent', () => {
  let component: QuestionsControllerComponent;
  let fixture: ComponentFixture<QuestionsControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionsControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
