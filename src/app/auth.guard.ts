import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private auth: AuthService, private router: Router) { }

    public canActivate(): boolean {
        if (this.auth.getLoginStatus()) {
            return true;
        } else {
            this.router.navigate(['login']);
        }
        return false;
    }

}
