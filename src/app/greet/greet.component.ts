import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-greet',
    templateUrl: './greet.component.html',
    styleUrls: ['./greet.component.css']
})
export class GreetComponent implements OnInit {
    public customerName: any;
    constructor(private auth: AuthService, private router: Router) { }

    ngOnInit(): void {
        this.customerName = sessionStorage.getItem("customerName");
    }


}
