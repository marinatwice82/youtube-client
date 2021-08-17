import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {

  public login: string = '';
  public password: string = '';
  public show!: boolean;

  constructor(private loginService: LoginService, private router: Router) {
    if (this.loginService.loggedIn) {
      this.router.navigate(['main']);
    }
  }

  public auth(form: NgForm): void {
    this.loginService.auth(form.value.login, form.value.password);
    this.router.navigate(['main']);
  }

}
