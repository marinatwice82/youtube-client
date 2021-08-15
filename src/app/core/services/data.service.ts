import { EventEmitter, Injectable } from '@angular/core';


@Injectable()

export class DataService {
    private show: boolean = false;

    public clickChange: EventEmitter<boolean> = new EventEmitter();

    public onClicked(): void {
        this.show = !this.show;
        this.clickChange.emit(this.show);
    }
}
