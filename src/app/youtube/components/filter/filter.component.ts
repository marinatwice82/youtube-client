import { Component, EventEmitter, Output } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})

export class FilterComponent {
  public isShow: boolean = false;

  constructor(private dataService: DataService, private filterService: FilterService) {
    this.dataService.clickChange.subscribe(show => {
      this.isShow = show;
    });
  }

  public value: string = '';
  @Output() filterDate = new EventEmitter<void>();
  @Output() filterViews = new EventEmitter<void>();
  @Output() filterWord = new EventEmitter<string>();

  onDate() {
    this.filterService.filterDate();
  }

  onViews() {
    this.filterService.filterView();
  }

  onWord(value: string) {
    this.filterService.filterWord(value);
  }

}
