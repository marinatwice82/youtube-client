import { Component, OnInit, Input } from '@angular/core';
import { SearchItem } from '../search-item.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {

  @Input()
  result!: SearchItem[];

  constructor() { }
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }


}
