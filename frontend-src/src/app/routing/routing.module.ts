import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { QuestionsControllerComponent } from '../questions/questions-controller/questions-controller.component';
import { AddQuestionComponent } from '../questions/add-question/add-question.component';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/question',
    pathMatch: 'full'
  },
  {
    path: 'question',
    component: QuestionsControllerComponent
  },
  {
    path: 'add-question',
    component: AddQuestionComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
 /* {
    path: 'question/:id',
    component: ElementDetailComponent,
  },*/

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
