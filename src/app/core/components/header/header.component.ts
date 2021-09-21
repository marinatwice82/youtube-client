import { Component, DoCheck, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { debounceTime, filter } from 'rxjs/operators';
import { LoginService } from 'src/app/auth/services/login.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements DoCheck, OnInit {
  public show!: boolean;
  public userName: string | undefined = 'Your Name';
  public searchStr: FormControl = new FormControl('');
  public log: string = "LogIn";

  constructor(private router: Router, private loginService: LoginService, private dataService: DataService, private store: Store) { }

  public logout(): void {
    this.loginService.logout();
    this.router.navigate(['login']);
  }

  public ngDoCheck(): void {
    if (localStorage.getItem('status') === 'loggedin') {
      this.userName = localStorage.user;
    }
    else {
      this.userName = 'Your Name';
    }
  }

  public ngOnInit() {
    this.searchStr.valueChanges.pipe(debounceTime(300), filter((val: string) => (val.length >= 3)))
      .subscribe(queryField => { this.dataService.searchClicked(queryField); });
    this.loginService.logined.subscribe((logined) => this.log = logined ? "LogOut" : "LogIn");
    this.store
  }


  public search(form: NgForm): void {
    this.dataService.searchClicked(form.value.search);
  }

  public openFilter(): void {
    this.dataService.onClicked();

  }

}
