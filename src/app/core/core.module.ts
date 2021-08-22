import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { Page404Component } from './pages/page404.component';

@NgModule({
  declarations: [
    HeaderComponent,
    Page404Component
  ],
  imports: [
    RouterModule, FormsModule

  ],
  exports: [
    HeaderComponent
  ]
})

export class CoreModule { }
