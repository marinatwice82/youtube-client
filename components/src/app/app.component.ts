import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EXP } from './mock-exp-items';
import { SearchItem } from './search/search-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'components';
  isFilterDate: boolean = true;
  isFilterViews: boolean = true;
  showFilter: boolean = false;
  //isFilterDate: boolean = true;
  public result: SearchItem[] = [];

  clickSearch(form: NgForm) {
    //console.log("Main Component ", form.value.search);
    //console.log("EXP ", EXP[0].snippet.title);
    this.result = [];

    EXP.map((item) => {
      const str = item.snippet.title;
      if (str.toLowerCase().includes(form.value.search.toLowerCase())) {
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
      }
    });

    //console.log('Res ', this.result);
  }

  filterDate() {
    this.isFilterDate = !this.isFilterDate;
    if (this.isFilterDate) {
      this.result.reverse();
    }
    else {
      console.log('isFilterDate ', this.isFilterDate);
      let arrStr = this.result[0].publishedAt.split('T');
      let date = arrStr[0].split('-');
      console.log('arrStr ', date);
      this.result.sort((a, b): number => {
        let arrStrA = a.publishedAt.split('T');
        let dateA = arrStrA[0].split('-');
        let arrStrB = b.publishedAt.split('T');
        let dateB = arrStrB[0].split('-');
        if (parseInt(dateA[0]) > parseInt(dateB[0])) {
          return -1
        }
        else if (parseInt(dateA[0]) == parseInt(dateB[0]) && parseInt(dateA[1]) > parseInt(dateB[1])) {
          return -1
        }
        else if (parseInt(dateA[1]) == parseInt(dateB[1]) && parseInt(dateA[2]) > parseInt(dateB[2])) {
          return -1
        }
        else { return 0 }
      });
    }

  }

  filterViews() {
    this.isFilterViews = !this.isFilterViews;
    this.result.sort((a, b): number => {
      if (this.isFilterViews) return parseInt(a.viewCount) - parseInt(b.viewCount)
      else return parseInt(b.viewCount) - parseInt(a.viewCount)
    });
  }

  filterWord(value: string) {
    //console.log('filterWord ', value);
    this.result.sort((a, b): number => {
      //str.toLowerCase().includes(form.value.search.toLowerCase()
      if (a.title.toLowerCase().includes(value)) return -1
      else if (b.title.toLowerCase().includes(value)) return 1
      else return 0
    });
    
  }

  clickFilter() {
    this.showFilter = !this.showFilter;
  }
}
