import { Action } from '@ngrx/store';
import { SearchItem } from '../../youtube/models/search-item.model';


export enum ESearchActions {
    GetSearchData = 'Get Search Data',
    GetSearchDataSuccess = 'Get Search Data Success',
}

export class GetSearchData implements Action {
    // tslint:disable-next-line:typedef
    public readonly type = ESearchActions.GetSearchData;
}
export class GetSearchDataSuccess implements Action {
    // tslint:disable-next-line:typedef
    public readonly type = ESearchActions.GetSearchDataSuccess;
    constructor(public payload: SearchItem[]) { }
}

export type SearchActions = GetSearchData | GetSearchDataSuccess;
