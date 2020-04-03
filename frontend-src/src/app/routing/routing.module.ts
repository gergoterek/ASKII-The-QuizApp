import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { QuestionComponent } from '../questions/question/question.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/question',
    pathMatch: 'full'
  },
  {
    path: 'question',
    component: QuestionComponent
  },

  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)  ],
  exports: [ RouterModule ],
  declarations: []
})
export class RoutingModule { }
