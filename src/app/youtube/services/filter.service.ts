import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class FilterService {
    public dateDirection: boolean = false;
    public dateFiltering: EventEmitter<boolean> = new EventEmitter();

    constructor() { }

    public filterDate() {
        this.dateDirection = !this.dateDirection;
        this.dateFiltering.emit(this.dateDirection);
    }


}
