import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FilterComponent } from './filter/filter.component';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from './material/material.module';
import { SearchItemComponent } from './search/search-item/search-item.component';
import { BorderHighlightDirective } from './search/search-results/border-highlight.directive';
import { FilterDatePipe } from './search/search-results/filter-date.pipe';
import { FilterStringPipe } from './search/search-results/filter-string.pipe';
import { FilterViewsCountPipe } from './search/search-results/filter-views-count.pipe';
import { SearchResultComponent } from './search/search-results/search-results.component';
import { SearchPipe } from './search/search-results/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchItemComponent,
    SearchResultComponent,
    SearchPipe,
    FilterComponent,
    FilterDatePipe,
    FilterStringPipe,
    FilterViewsCountPipe,
    BorderHighlightDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
