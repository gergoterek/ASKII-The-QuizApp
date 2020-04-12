import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { QuestionsControllerComponent } from './questions-controller.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('QuestionsControllerComponent', () => {
  let component: QuestionsControllerComponent;
  let fixture: ComponentFixture<QuestionsControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ QuestionsControllerComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
      //providers: [QuestionsControllerComponent]
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
