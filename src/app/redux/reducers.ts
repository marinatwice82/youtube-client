import { Action, createReducer, on } from '@ngrx/store';
import { SearchItem } from '../youtube/models/search-item.model';
import * as YoutubeActions from './actions';

export interface State {
    customCards: SearchItem[];
    searchCards: SearchItem[] | undefined;
}

export const initialState: State = {
    customCards: [],
    searchCards: []
};

const youtubeReducer = createReducer(
    initialState,
    on(YoutubeActions.addCustomCard, (state, { title, description, img, date, id }) => ({ ...state, customCards: [...state.customCards, { kind: '', etag: '', id: id, title: title, img: img, viewCount: '', likeCount: '', dislikeCount: '', commentCount: '', publishedAt: date, description: description }] })),
    on(YoutubeActions.addSearchCards, (state, { items }) => ({ ...state, searchCards: items }))
);

export function reducer(state: State | undefined, action: Action) {
    return youtubeReducer(state, action);
}
