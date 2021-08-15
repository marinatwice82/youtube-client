import { EventEmitter, Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})

export class DataService {
    private show: boolean = false;

    public clickChange: EventEmitter<boolean> = new EventEmitter();
    public onSearch: EventEmitter<string> = new EventEmitter();

    public onClicked(): void {
        this.show = !this.show;
        this.clickChange.emit(this.show);
    }

    public searchClicked(searchStr: string): void {
        this.onSearch.emit(searchStr);
    }
}
