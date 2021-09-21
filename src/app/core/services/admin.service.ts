import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CustomItemModel } from '../models/custom-item.model';

@Injectable({
    providedIn: 'root'
})
export class AdminService {
    public newCard: CustomItemModel = new CustomItemModel();

    constructor() { }

    public setNewCard(data: CustomItemModel): void {
        this.newCard = { ...data, date: new Date().toString() };
    }

    public createCard(): Observable<CustomItemModel> {
        return of(this.newCard);
    }
}
