import { Component } from '@angular/core';
import { AuthService } from './auth.service';
AuthService

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})


export class AppComponent {
    title = 'abcbank';

    constructor(private auth: AuthService) {
    }
}


