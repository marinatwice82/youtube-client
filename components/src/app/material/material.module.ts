import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';




@NgModule({
  declarations: [],
  imports: [CommonModule, MatInputModule, MatButtonModule, MatIconModule, MatCardModule],
  exports: [MatInputModule, MatButtonModule, MatIconModule, MatCardModule],
})
export class MaterialModule { }
