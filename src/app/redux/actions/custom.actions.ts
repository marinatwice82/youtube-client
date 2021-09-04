import { Action } from '@ngrx/store';
import { CustomItemModel } from '../../core/models/custom-item.model';

export enum ECustomActions {
    SetCustom = 'Set Custom',
    AddToCustom = 'Add To Custom'
}

export class SetCustom implements Action {
    // tslint:disable-next-line:typedef
    public readonly type = ECustomActions.SetCustom;
}


export class AddToCustom implements Action {
    // tslint:disable-next-line:typedef
    public readonly type = ECustomActions.AddToCustom;
    constructor(public payload: CustomItemModel) { }
}

export type CustomActions = SetCustom | AddToCustom;
