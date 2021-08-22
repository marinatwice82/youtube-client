import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';
import { EXP } from '../../../mock-exp-items';
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
  constructor(private dataService: DataService, private filterService: FilterService) {
    this.dataService.onSearch.subscribe(searchStr => {
      this.searchClicked = true;
      this.searchString = searchStr;
    });
    this.filterService.dateFiltering.subscribe(dateDirection => {
      this.isFilterDate = dateDirection;
    });
    this.filterService.viewFiltering.subscribe(viewDirection => {
      this.isFilterViews = viewDirection;
    });
    this.filterService.wordFilter.subscribe(word => this.sortString = word);
  }

  ngOnInit(): void {
    this.result = EXP.items.map((item: any) => {
      const str = item.snippet.title;
      return {
        kind: item.kind,
        etag: item.etag,
        id: item.id,
        title: item.snippet.title,
        img: item.snippet.thumbnails.standard.url,
        viewCount: item.statistics.viewCount,
        likeCount: item.statistics.likeCount,
        dislikeCount: item.statistics.dislikeCount,
        commentCount: item.statistics.commentCount,
        publishedAt: item.snippet.publishedAt,
        description: item.snippet.description
      }
    });
    this.dataService.fillData(this.result);
  }

}

