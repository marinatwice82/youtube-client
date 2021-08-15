import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class MainGuard implements CanActivate {

    constructor(private router: Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if (this.isLoggedIn()) {
            return true;
        }
        this.router.navigate(['login']);
        return false;
    }
    public isLoggedIn(): boolean {
        let status: boolean;
        status = false;
        if (localStorage.getItem('status') === 'loggedin') {
            status = true;
        } else {
            status = false;
        }
        return status;
    }
}
