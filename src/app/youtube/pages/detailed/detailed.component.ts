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

  constructor(private activateRoute: ActivatedRoute, private dataService: DataService, private _location: Location, private locationStrategy: LocationStrategy) {
    this.id = activateRoute.snapshot.params['id'];
    //console.log("this.id ", this.id);
    this.currentItem = dataService.getItem(this.id);
    console.log("currentItem ", this.currentItem);
  }

  public back(): void {
    //this._location.back();
    this.locationStrategy.back();
  }

}
