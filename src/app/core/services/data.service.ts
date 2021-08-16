import { EventEmitter, Injectable } from '@angular/core';
import { SearchItem } from 'src/app/youtube/models/search-item.model';

@Injectable({
    providedIn: 'root'
})

export class DataService {
    private show: boolean = false;
    private dataResult: SearchItem[] = [];

    public clickChange: EventEmitter<boolean> = new EventEmitter();
    public onSearch: EventEmitter<string> = new EventEmitter();

    public onClicked(): void {
        this.show = !this.show;
        this.clickChange.emit(this.show);
    }

    public searchClicked(searchStr: string): void {
        this.onSearch.emit(searchStr);
    }

    public fillData(data: SearchItem[]): void {
        this.dataResult = [...data];
        console.log('fillData ', this.dataResult);
    }

    public getItem(id: string): SearchItem {
        return this.dataResult.filter((elem) => {
            if (elem.id === id) return true
            else return false;
        })[0];
    }
}
