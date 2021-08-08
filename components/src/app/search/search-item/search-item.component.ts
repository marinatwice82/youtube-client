import { Component, OnInit, Input } from '@angular/core';
import { SearchItem } from '../search-item.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {
 
  @Input() item!: SearchItem;
  borderColor: string = '';
  isFilterDate: boolean = true;

  constructor() { }
  ngOnInit(): void {
    let currentDate = new Date();
    let itemDate = new Date(this.item.publishedAt);
    let daysLag = Math.ceil(Math.abs(currentDate.getTime() - itemDate.getTime()) / (1000 * 3600 * 24));
    if (daysLag < 7) this.borderColor = '5px solid blue';
    if (daysLag < 30 && daysLag > 7) this.borderColor = '5px solid green';
    if (daysLag > 30 && daysLag < 180) this.borderColor = '5px solid yellow';
    if (daysLag > 180) this.borderColor = '5px solid red';
  }

}
