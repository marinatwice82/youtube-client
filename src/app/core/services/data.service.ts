import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { SearchItem } from 'src/app/youtube/models/search-item.model';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})

export class DataService {
    private show: boolean = false;
    private dataResult: SearchItem[] = [];

    private readonly userApi: string = environment.TOKEN;
    private listUrl!: string;

    constructor(private httpClient: HttpClient) { }

    public clickChange: EventEmitter<boolean> = new EventEmitter();
    public onSearch: EventEmitter<SearchItem[]> = new EventEmitter();

    public onClicked(): void {
        this.show = !this.show;
        this.clickChange.emit(this.show);
    }

    public searchClicked(searchStr: string): void {
        //this.onSearch.emit(searchStr);
        //console.log("searchClicked");
        this.listUrl =
            'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q='
            + searchStr + '&type=video&key=' + this.userApi;

        this.httpClient.get(this.listUrl)
            .pipe(
                map((value: any) => {
                    /*
                    this.dataResult = value.items.map((item: any) => {
                        //const str = item.snippet.title;
                        return {
                            kind: item.kind,
                            etag: item.etag,
                            id: item.id.videoId,
                            title: item.snippet.title,
                            img: item.snippet.thumbnails.medium.url,
                            viewCount: item.statistics.viewCount,
                            likeCount: item.statistics.likeCount,
                            dislikeCount: item.statistics.dislikeCount,
                            commentCount: item.statistics.commentCount,
                            publishedAt: item.snippet.publishedAt,
                            description: item.snippet.description
                        }
                    });
                    */
                    //const {items} = value;
                    // return items.map(item => item.id.videoId);
                    console.log("value ", value);
                    return value.items.map((el: any) => el.id.videoId);
                })
            ).subscribe(data => {
                console.log('data ', data);
                this.searchYoutubeVideo(data);

                //this.newData = data;
                //this.searchYoutubeVideo(this.newData);
            }
            );
    }

    public searchYoutubeVideo(newData: string): void {
        //let req: string = newData.join(',');

        this.listUrl =
            'https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id='
            + newData + '&key=' + this.userApi;

        this.httpClient.get(this.listUrl)
            .pipe(
                map((value: any) => {
                    // const { items } = value;
                    // return items;
                    console.log("this.dataResult ", value);

                    this.dataResult = value.items.map((item: any) => {
                        //const str = item.snippet.title;
                        return {
                            kind: item.kind,
                            etag: item.etag,
                            id: item.id,
                            title: item.snippet.title,
                            img: item.snippet.thumbnails.medium.url,
                            viewCount: item.statistics.viewCount,
                            likeCount: item.statistics.likeCount,
                            dislikeCount: item.statistics.dislikeCount,
                            commentCount: item.statistics.commentCount,
                            publishedAt: item.snippet.publishedAt,
                            description: item.snippet.description
                        }
                    });

                    return this.dataResult
                }))
            .subscribe((data: SearchItem[]) =>
                //data => this.itemsResp2.next(data)
                this.onSearch.emit(data)
            );
    }

    public fillData(data: SearchItem[]): void {
        this.dataResult = [...data];
    }

    public getItem(id: string): SearchItem {
        return this.dataResult.filter((elem) => {
            if (elem.id === id) return true
            else return false;
        })[0];
    }
}
