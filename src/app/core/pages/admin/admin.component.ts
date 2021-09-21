import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { addCustomCard } from 'src/app/redux/actions';
import { v4 as uuidv4 } from 'uuid';
import { State } from '../../../redux/reducers';
import { SearchItem } from '../../../youtube/models/search-item.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  title: string = '';
  description: string = '';
  img: string = '';
  video: string = '';
  currentD: any;
  d: SearchItem[] = [];

  public searchItems1: Observable<any> = this.store.pipe(map((r: any) => {
    return [...r.youtube.customCards, ...r.youtube.searchCards, r.youtube.test];
  }));

  constructor(private store: Store<State>, private router: Router) { }

  ngOnInit(): void {
    //this.store.select('customCards').subscribe(d => { this.d = d; console.log("Store  ", d) });
    //this.searchItems1.subscribe(d => console.log("R ", d));
  }

  onSubmit(form: NgForm) {
    this.title = form.value.title?.trim();
    this.description = form.value.description?.trim();
    this.img = form.value.img?.trim();
    this.video = form.value.video?.trim();
    let date: string = new Date().toISOString();

    if (this.title && this.description && this.img && this.video) {
      this.store.dispatch(addCustomCard({ title: this.title, description: this.description, img: this.img, video: this.video, date: date, id: uuidv4() }));
      form.resetForm();
      this.router.navigate(['/main']);
    } else {
      alert("Please, fill in all fields!");
    }
  }

}


