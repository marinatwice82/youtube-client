import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class FilterService {
    public dateDirection: boolean = false;
    public viewDirection: boolean = false;
    public dateFiltering: EventEmitter<boolean> = new EventEmitter();
    public viewFiltering: EventEmitter<boolean> = new EventEmitter();
    public wordFilter: EventEmitter<string> = new EventEmitter();

    constructor() { }

    public filterDate() {
        this.dateDirection = !this.dateDirection;
        this.dateFiltering.emit(this.dateDirection);
    }

    public filterView() {
        this.viewDirection = !this.viewDirection;
        this.viewFiltering.emit(this.viewDirection);
    }

    public filterWord(word: string) {
        this.wordFilter.emit(word);
    }


}
