import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SearchInterceptor } from './interceptors/search.interceptor';
import { Page404Component } from './pages/page404.component';

@NgModule({
  declarations: [
    HeaderComponent,
    Page404Component
  ],
  imports: [
    RouterModule, FormsModule, HttpClientModule, ReactiveFormsModule

  ],
  exports: [
    HeaderComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SearchInterceptor,
      multi: true
    }
  ]
})

export class CoreModule { }
