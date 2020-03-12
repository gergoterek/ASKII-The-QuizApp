import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  question = " "
  questionArray = []

  addQuestion(questionInput: HTMLTextAreaElement){
    console.dir(questionInput.value)
    console.dir(this.questionArray)
    this.questionArray.push(questionInput.value)
    this.question = questionInput.value
  }

  constructor() { }

  ngOnInit(): void {
  }



}
