import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../models/search-item.model';


@Pipe({
  name: 'filterViewsCount'
})
export class FilterViewsCountPipe implements PipeTransform {

  transform(items: SearchItem[], direction: boolean): SearchItem[] {
    let resArr: SearchItem[] = [];
    resArr = items.sort((a, b): number => {
      if (direction) return parseInt(a.viewCount) - parseInt(b.viewCount)
      else return parseInt(b.viewCount) - parseInt(a.viewCount)
    });
    return resArr;
  }

}
