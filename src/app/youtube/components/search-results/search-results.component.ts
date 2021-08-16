import { Component, Input, OnInit } from '@angular/core';
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
  //@Input() searchString: string = '';
  //@Input() searchClicked: boolean = false;
  //@Input() isFilterDate: boolean = false;
  //@Input() isFilterViews: boolean = false;
  @Input() sortString: string = '';

  public searchString: string = '';
  public searchClicked: boolean = false;
  public isFilterDate: boolean = false;
  public isFilterViews: boolean = false;

  result: SearchItem[] = [];
  //result: any[] = EXP;
  constructor(private dataService: DataService, private filterService: FilterService) {
    this.dataService.onSearch.subscribe(searchStr => {
      this.searchClicked = true;
      this.searchString = searchStr;
      //console.log('searchString ', this.searchString);
    });
    this.filterService.dateFiltering.subscribe(dateDirection => {
      this.isFilterDate = dateDirection;
    });
    this.filterService.viewFiltering.subscribe(viewDirection => {
      this.isFilterViews = viewDirection;
    });
  }

  ngOnInit(): void {
    //console.log('result ', this.result);
    EXP.items.map((item: any) => {
      const str = item.snippet.title;
      //if (str.toLowerCase().includes(strSearch.toLowerCase())) {
      this.result.push({
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
      });
      //}
    });
    this.dataService.fillData(this.result);
  }

}

