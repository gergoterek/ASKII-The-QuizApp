import { Component, OnInit } from '@angular/core';
import { Question } from '../../domain/question';
import { QuestionService } from '../../service/question.service';


@Component({
  selector: 'app-questions-controller',
  templateUrl: './questions-controller.component.html',
  styleUrls: ['./questions-controller.component.css']
})
export class QuestionsControllerComponent implements OnInit {

  question : Question;
  constructor(
    public questionService: QuestionService
  ) { }

  ngOnInit() {
    this.questionService.getRandomQuestion();
  }


}
