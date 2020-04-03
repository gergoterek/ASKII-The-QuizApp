import { Injectable } from '@angular/core';
import { Question } from 'src/app/domain/question';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  questions: Question[] = [];
  
  filteredQuestions: Question[] = this.questions;

  constructor(
    private http: HttpClient
  ) { }

  async getQuestions() {
    const questions = await (this.http.get('question')
      .toPromise() as Promise<any[]>);
    this.filteredQuestions = this.questions = questions.map(this.createQuestionModel);
  }

  async createQuestion(question: Question): Promise<any> {
    await this.http.post('questions', question).toPromise();
  }

  /*async getIssue(issueId: number): Promise<Issue> {
    const issue = await (this.http.get(`issues/${issueId}`)
      .toPromise() as Promise<any>);
    return this.createIssueModel(issue);
  }

  async createIssue(issue: Issue): Promise<any> {
    await this.http.post('issues', issue).toPromise();
  }

  async modifyIssue(issue: Issue): Promise<any> {
    await this.http.patch(`issues/${issue.id}`, issue).toPromise();
  }

  filterChange(filterValue: string) {
    if (typeof filterValue === 'string') {
      if (filterValue === '') {
        this.filteredIssues = this.issues;
      } else {
        // Lehet ciklussal is :)
        this.filteredIssues = this.issues.filter(issue => {
          return issue.status === filterValue;
        });
      }
    }
  }
*/
  private createQuestionModel(question: any): Question {
    return {
      ...question
    } as Question;
  }
}
