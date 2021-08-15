import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/auth/services/login.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public show!: boolean;
  public userName: string | undefined;


  constructor(private router: Router, private loginService: LoginService) { }

  public logout(): void {
    this.loginService.logout();
    this.router.navigate(['login']);
  }

  public ngOnInit(): void {
    //this.loginService.currentLoginState.subscribe((data) => { this.show = data; });
    if (localStorage.getItem('status') === 'loggedin') {
      //this.show = "true";
      this.userName = 'Hello, ' + localStorage.user;
    }
  }
  /* @Output() clickSearch = new EventEmitter<NgForm>();
   search(form: NgForm) {
     this.clickSearch.emit(form);
   }
   @Output() clickFilter = new EventEmitter<void>();

   openFilter() {
     this.clickFilter.emit();

   }*/
  /*
    search(form: NgForm): void{
      console.log("Click Form ", form.value.search);
    }
  */

}
