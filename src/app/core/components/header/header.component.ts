import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/auth/services/login.service';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  public show!: boolean;
  public userName: string | undefined = 'Your Name';


  constructor(private router: Router, private loginService: LoginService, private dataService: DataService) { }

  public logout(): void {
    this.loginService.logout();
    this.router.navigate(['login']);
  }

  public ngOnInit(): void {
    if (localStorage.getItem('status') === 'loggedin') {
      this.userName = localStorage.user;
    }
  }

  public search(form: NgForm): void {
    this.dataService.searchClicked(form.value.search);
  }
  public openFilter(): void {
    this.dataService.onClicked();

  }

}
