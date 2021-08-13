import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { SearchItem } from '../search-item.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit, DoCheck {

  @Input() item!: SearchItem;
  borderColor: string = '';

  isFilterDate: boolean = true;

  constructor() { }
  ngOnInit(): void {
    //let currentDate = new Date();
    /*
    let currentYear = currentDate.getFullYear();
    let currentMouth = currentDate.getMonth();
    let currentDay = currentDate.getDate();
    */
    /*
     let itemDate = new Date(this.item.publishedAt);
     let daysLag = Math.ceil(Math.abs(currentDate.getTime() - itemDate.getTime()) / (1000 * 3600 * 24));
     console.log("daysLag ", daysLag);
     if (daysLag < 7) this.borderColor = '5px solid blue';
     if (daysLag < 30 && daysLag > 7) this.borderColor = '5px solid green';
     if (daysLag > 180) this.borderColor = '5px solid red';
 */
    //console.log("ngOnInit ", currentDate, ' ', currentMouth, ' ', currentDay);
    //throw new Error('Method not implemented.');
  }

  ngDoCheck() {
    //let myDate = new Date();
    //console.log("ngDoCheck ", Date.now());
  }


}
