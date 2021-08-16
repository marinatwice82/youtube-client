import { Component, Input, OnInit } from '@angular/core';
import { EXP } from '../../mock-exp-items';
import { SearchItem } from '../search-item.model';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultComponent implements OnInit {
  @Input() searchString: string = '';
  @Input() searchClicked: boolean = false;
  @Input() isFilterDate: boolean = false;
  @Input() isFilterViews: boolean = false;
  @Input() sortString: string = '';

  result: SearchItem[] = [];
  //result: any[] = EXP;
  constructor() { }

  ngOnInit(): void {
    //console.log('result ', this.result);
    EXP.items.map((item) => {
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
        publishedAt: item.snippet.publishedAt
      });
      //}
    });
  }

}

