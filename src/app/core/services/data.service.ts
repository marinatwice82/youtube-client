import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { SearchItem } from 'src/app/youtube/models/search-item.model';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})

export class DataService {
    private show: boolean = false;
    private dataResult: SearchItem[] = [];
    public currentData: Observable<SearchItem[]> = new Observable(sub => sub.next(this.dataResult));

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
        this.listUrl =
            'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q='
            + searchStr + '&type=video&key=' + this.userApi;

        this.httpClient.get(this.listUrl)
            .pipe(
                map((value: any) => {
                    return value.items.map((el: any) => el.id.videoId);
                })
            ).subscribe(data => {
                this.searchYoutubeVideo(data);
            }
            );
    }

    public searchYoutubeVideo(newData: string): void {

        this.listUrl =
            'https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id='
            + newData + '&key=' + this.userApi;

        this.httpClient.get(this.listUrl)
            .pipe(
                map((value: any) => {
                    this.dataResult = value.items.map((item: any) => {
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
