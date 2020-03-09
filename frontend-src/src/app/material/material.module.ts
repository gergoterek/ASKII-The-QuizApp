import { NgModule } from '@angular/core';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';




const material =
[
  MatButtonModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatCardModule,
  MatInputModule,
  MatIconModule
];


@NgModule({
  imports: [material],
  exports: [material]
})

export class MaterialModule { }
