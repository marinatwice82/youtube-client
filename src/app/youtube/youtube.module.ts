import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
//import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { SearchItemComponent } from '../youtube/components/search-item/search-item.component';
import { SearchResultComponent } from '../youtube/components/search-results/search-results.component';
import { BorderHighlightDirective } from '../youtube/directives/border-highlight.directive';
import { FilterComponent } from './components/filter/filter.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { FilterDatePipe } from './pipes/filter-date.pipe';
import { FilterStringPipe } from './pipes/filter-string.pipe';
import { FilterViewsCountPipe } from './pipes/filter-views-count.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { YoutubeRoutingModule } from './youtube-routing.module';

@NgModule({
  imports: [
    SharedModule,
    YoutubeRoutingModule,
    CommonModule
    //MaterialModule,
    //BrowserModule
  ],
  declarations: [
    SearchResultComponent,
    SearchItemComponent,
    FilterComponent,
    MainPageComponent,
    BorderHighlightDirective,
    FilterDatePipe,
    FilterStringPipe,
    FilterViewsCountPipe,
    SearchPipe
  ],
  providers: [

  ],
})
export class YoutubeModule { }
