import { NgModule } from '@angular/core';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';



const material =
[
  MatButtonModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatCardModule
];


@NgModule({
  imports: [material],
  exports: [material]
})

export class MaterialModule { }
