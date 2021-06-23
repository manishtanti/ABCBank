import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { NotificationsService } from 'angular2-notifications';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})
export class NavComponent {

    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
        .pipe(
            map(result => result.matches),
            shareReplay()
        );

    constructor(private breakpointObserver: BreakpointObserver, private auth: AuthService, private notification: NotificationsService, private router: Router) { }

    logOut() {
        sessionStorage.removeItem("customerId");
        sessionStorage.removeItem("customerName");
        sessionStorage.removeItem("accountNumber");
        this.auth.setLoginStatus(false);
        this.notification.success("Success", "Logged out Successfully");
        this.router.navigate(['login']);
    }
}