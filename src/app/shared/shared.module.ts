import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    FormsModule
  ],
  exports: [
    //CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    FormsModule
  ]
})
export class SharedModule { }
