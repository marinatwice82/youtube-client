import { Pipe, PipeTransform } from '@angular/core';
import { DateTime } from 'luxon';
import { SearchItem } from '../models/search-item.model';


@Pipe({
  name: 'filterDate'
})

export class FilterDatePipe implements PipeTransform {

  transform(items: SearchItem[], direction: boolean): SearchItem[] {
    if (direction) {
      return items.sort((a, b) => {
        const diff: number = DateTime.fromISO(a.publishedAt).diff(DateTime.fromISO(b.publishedAt)).as("seconds");
        if (diff === 0) { return 0 }
        return diff > 0 ? -1 : 1
      });

    }
    else {
      return items.reverse();
    }
  }

}
