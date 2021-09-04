import { SearchItemModel } from '../../core/models/search-item.model';

export interface ISearchState {
  searchData: SearchItemModel[];
}

export const initialSearchState: ISearchState = {
  searchData: []
};
