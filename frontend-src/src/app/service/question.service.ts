import { Injectable } from '@angular/core';
import { Question } from 'src/app/domain/question';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  questions: Question[] = [];
  question: Question;
  filteredQuestions: Question[] = this.questions;

  constructor(
    private http: HttpClient
  ) { }

  // async getQuestions() {
  //   const questions = await (this.http.get('question')
  //     .toPromise() as Promise<any[]>);
  //   this.filteredQuestions = this.questions = questions.map(this.createQuestionModel);
  // }

  async getRandomQuestion() {
    const question = await (this.http.get('question')
      .toPromise() as Promise<any>);
    this.question = this.createQuestionModel(question);
  }

  async createQuestion(question: Question): Promise<any> {
    await this.http.post('questions', question).toPromise();
  }

  
  private createQuestionModel(question: any): Question {
    return {
      ...question
    } as Question;
  }
}
