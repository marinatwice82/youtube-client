import { CustomItemModel } from '../../core/models/custom-item.model';

export interface ICustomState {
    customItems: CustomItemModel[];
}

export const initialCustomState: ICustomState = {
    customItems: []
};
