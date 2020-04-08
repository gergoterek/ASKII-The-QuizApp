import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { QuestionsControllerComponent } from '../questions/questions-controller/questions-controller.component';

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
