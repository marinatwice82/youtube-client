import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../models/search-item.model';

@Pipe({
  name: 'filterString'
})
export class FilterStringPipe implements PipeTransform {

  transform(items: SearchItem[], sortStr: string): SearchItem[] {
    let resArr: SearchItem[] = items.sort((a, b): number => {
      //str.toLowerCase().includes(form.value.search.toLowerCase()
      if (a.title.toLowerCase().includes(sortStr)) return -1
      else if (b.title.toLowerCase().includes(sortStr)) return 1
      else return 0
    });
    return resArr;
  }

}
