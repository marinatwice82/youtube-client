import { Component, EventEmitter, Output } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  public isShow: boolean = false;

  constructor(private dataService: DataService) {
    this.dataService.clickChange.subscribe(show => {
      this.isShow = show;
      console.log("isShow ", this.isShow);
    });
  }

  public value: string = '';
  @Output() filterDate = new EventEmitter<void>();
  @Output() filterViews = new EventEmitter<void>();
  @Output() filterWord = new EventEmitter<string>();

  onDate() {
    this.filterDate.emit();
  }
  onViews() {
    this.filterViews.emit();
  }

  onWord(value: string) {
    this.filterWord.emit(value);
  }
}
