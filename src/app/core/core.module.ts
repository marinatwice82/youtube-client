import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    RouterModule, FormsModule

  ],
  exports: [
    HeaderComponent
  ]
})
export class CoreModule { }
