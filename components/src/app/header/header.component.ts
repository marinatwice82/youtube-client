import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm} from '@angular/forms';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  @Output() clickSearch = new EventEmitter<NgForm>();
  search(form: NgForm) {
      this.clickSearch.emit(form);
  }
/*
  search(form: NgForm): void{
    console.log("Click Form ", form.value.search);
  }
*/

}
