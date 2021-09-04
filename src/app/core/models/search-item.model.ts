import { IdItemModel } from './id-item.model';
import { SnippedItemModel } from './snipped-item.model';
import { StatisticsItemModel } from './statistics-item.model';

export class SearchItemModel {
    public etag: string;
    public id: IdItemModel;
    public kind: string;
    public snippet: SnippedItemModel;
    public statistics: StatisticsItemModel;

    public titel?: string;
    public description?: string;
    public img?: string;
    public linkVideo?: string;
    public date?: string;
}
