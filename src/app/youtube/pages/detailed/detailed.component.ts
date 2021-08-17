import { Location, LocationStrategy } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/core/services/data.service';
import { SearchItem } from '../../models/search-item.model';

@Component({
  selector: 'app-detailed',
  templateUrl: './detailed.component.html',
  styleUrls: ['./detailed.component.scss']
})
export class DetailedComponent {
  public id: string = '';
  public currentItem!: SearchItem;
  public color: string = '';
  public borderColor: string = '';
  public buttonColor: string = '';

  constructor(private activateRoute: ActivatedRoute, private dataService: DataService, private _location: Location, private locationStrategy: LocationStrategy) {
    this.id = activateRoute.snapshot.params['id'];
    this.currentItem = dataService.getItem(this.id);
    this.color = this.getColor();
    this.borderColor = '5px solid ' + this.color;
  }

  public back(): void {
    this.locationStrategy.back();
  }

  public getColor(): string {
    let currentDate = new Date();
    let itemDate = new Date(this.currentItem.publishedAt);
    let daysLag = Math.ceil(Math.abs(currentDate.getTime() - itemDate.getTime()) / (1000 * 3600 * 24));

    if (daysLag < 7) return 'blue'
    else if (daysLag < 30 && daysLag > 7) return 'green'
    else if (daysLag > 30 && daysLag < 180) return 'yellow'
    else return 'red'
  }

}
