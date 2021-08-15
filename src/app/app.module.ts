import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent
    /*HeaderComponent,
    SearchItemComponent,
    SearchResultComponent,
    SearchPipe,
    FilterComponent,
    FilterDatePipe,
    FilterStringPipe,
    FilterViewsCountPipe,
    BorderHighlightDirective,*/
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    AppRoutingModule,
    CoreModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
