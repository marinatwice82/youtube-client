import { Component } from '@angular/core';
import { NgForm} from '@angular/forms';
import { EXP } from './mock-exp-items';
import { SearchItem } from './search/search-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'components';
  public result: SearchItem[] = [];
  clickSearch(form: NgForm){
    //console.log("Main Component ", form.value.search);
    //console.log("EXP ", EXP[0].snippet.title);
    this.result = [];
    
    EXP.map((item)=>{
      const str = item.snippet.title; 
      if(str.toLowerCase().includes(form.value.search.toLowerCase())){
        this.result.push({
          kind: item.kind,
          etag: item.etag,
          id: item.id,
          title: item.snippet.title,
          img: item.snippet.thumbnails.standard.url,
          viewCount: item.statistics.viewCount,
          likeCount: item.statistics.likeCount,
          dislikeCount: item.statistics.dislikeCount,
          commentCount: item.statistics.commentCount
        });
      }
    });
    
    console.log('Res ', this.result);
  }
}
