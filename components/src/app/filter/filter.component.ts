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
  @Output() filterDate = new EventEmitter<void>();
  onDate() {
    this.filterDate.emit();
  }
}
