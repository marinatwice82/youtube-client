import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../models/search-item.model';

@Pipe({
  name: 'filterDate'
})

export class FilterDatePipe implements PipeTransform {

  transform(items: SearchItem[], direction: boolean): SearchItem[] {
    let resArr: SearchItem[] = [...items];
    if (direction) {
      resArr = items.reverse();
    }
    else {
      resArr = items.sort((a, b): number => {
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
    return resArr;
  }

}
