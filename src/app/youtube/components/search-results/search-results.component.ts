import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataService } from 'src/app/core/services/data.service';
import { State } from '../../../redux/reducers';
import { SearchItem } from '../../models/search-item.model';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})

export class SearchResultComponent implements OnInit {

  public searchString: string = '';
  public searchClicked: boolean = false;
  public isFilterDate: boolean = false;
  public isFilterViews: boolean = false;
  public sortString: string = '';

  result: SearchItem[] = [];
  customItems: SearchItem[] = [];
  customResult: Observable<SearchItem[]> = this.store.pipe(map((r: any) => {
    return [...r.youtube.customCards];
  }));
  constructor(private dataService: DataService, private filterService: FilterService, private store: Store<State>) {
    this.dataService.onSearch.subscribe(searchStr => {
      this.searchClicked = true;
      this.result = [...this.customItems, ...searchStr];
    });
    this.filterService.dateFiltering.subscribe(dateDirection => {
      this.isFilterDate = dateDirection;
    });
    this.filterService.viewFiltering.subscribe(viewDirection => {
      this.isFilterViews = viewDirection;
    });
    this.filterService.wordFilter.subscribe(word => this.sortString = word);
    this.customResult.subscribe(d => {
      this.customItems = [...d];
      if (this.result.length === 0) this.result = d

    });
  }

  ngOnInit(): void {
    this.dataService.currentData.subscribe(data => {
      if (data?.length != 0) {
        this.searchClicked = true;
        this.result = [...this.customItems, ...data];
      } else if (this.result.length !== 0) {
        this.searchClicked = true;
      }
    });
  }

}

