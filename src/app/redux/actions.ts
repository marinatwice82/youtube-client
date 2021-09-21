import { createAction, props } from '@ngrx/store';
import { SearchResponse } from '../youtube/models/search-response.model';

export const addCustomCard = createAction(
    'Custom Card',
    props<{ title: string; description: string; img: string; video: string, date: string, id: string }>()
);

export const addSearchCards = createAction(
    'Search Cards',
    props<SearchResponse>()
);

