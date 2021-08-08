import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
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
