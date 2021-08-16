import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../models/search-item.model';

@Pipe({
  name: 'search'
})

export class SearchPipe implements PipeTransform {

  transform(items: SearchItem[], strSearch: string): SearchItem[] | any[] {
    let result: SearchItem[] = [];
    items.map((elem) => {
      if (elem.title.toLowerCase().includes(strSearch.toLowerCase())) {
        result.push(elem);
      }
    });
    return result;
  }

}
