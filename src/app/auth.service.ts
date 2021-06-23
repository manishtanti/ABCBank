import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor() { }

    private isLoggedIn: boolean = false;

    public getLoginStatus() {
        return this.isLoggedIn;
    }

    public setLoginStatus(val: boolean) {
        this.isLoggedIn = val;
    }
}
