import { ICustomState, initialCustomState } from './custom.state';
import { initialSearchState, ISearchState } from './search.state';

export interface IAppState {
  searchData: ISearchState;
  customItem: ICustomState;
}

export const initialAppState: IAppState = {
  searchData: initialSearchState,
  customItem: initialCustomState
};
