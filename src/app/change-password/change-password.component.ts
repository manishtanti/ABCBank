import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { AuthService } from '../auth.service';
import { CustomerService } from '../customer.service';

@Component({
    selector: 'app-change-password',
    templateUrl: './change-password.component.html',
    styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
    public user: any;
    public customerName: any;
    public customerId: any;
    constructor(private customerService: CustomerService, private router: Router, private auth: AuthService, private notification: NotificationsService, private r: ActivatedRoute) { }

    ngOnInit(): void {
        this.customerName = sessionStorage.getItem("customerName");
        this.customerId = sessionStorage.getItem("customerId");
        this.user = {
            "id": this.customerId,
            "oldPassword": "",
            "newPassword": "",
            "confirmPassword": ""
        }
    }

    public changePassword() {
        this.customerService.changePassword(this.user).subscribe((result: any) => {
            if (result['status'] == 200) {
                this.notification.success("Success", "Your password Changed Successfully");
                this.auth.setLoginStatus(false);
                this.router.navigate(['../'], { relativeTo: this.r });
            } else {
                this.notification.error("Error", result['message']);
            }
        });
    }

}
