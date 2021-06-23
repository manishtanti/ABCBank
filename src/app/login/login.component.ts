import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { AuthService } from '../auth.service';
import { CustomerService } from '../customer.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor(public router: Router, private auth: AuthService, private customerService: CustomerService, private notification: NotificationsService) { }

    ngOnInit(): void {
    }


    public user = {
        "username": "",
        "password": ""
    }

    public onSubmit() {
        this.customerService.getCustomer(this.user).subscribe((result: any) => {
            if (result['status'] == 200) {
                sessionStorage.removeItem("customerId");
                sessionStorage.setItem("customerId", result['customerId'].toString());
                sessionStorage.removeItem("customerName");
                sessionStorage.setItem("customerName", result['customerName']);
                this.auth.setLoginStatus(true);
                this.router.navigate(['home']);
                this.notification.success("Success", "Login Successful");
            } else {
                this.notification.error("Login Failed", "Invalid Username or Password");
            }
        },
            (error: any) => {
                this.notification.error("Error", "Connection to server Failed");
            }
        );
    }
    public getLogginStatus() {
        return this.auth.getLoginStatus();
    }
}
