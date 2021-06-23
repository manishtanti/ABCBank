import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { AuthService } from '../auth.service';
import { CustomerService } from '../customer.service';

@Component({
    selector: 'app-my-profile',
    templateUrl: './my-profile.component.html',
    styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
    public customerDetails: any;
    public customerName: any;
    private customerId: any;
    constructor(private customerService: CustomerService, private auth: AuthService, private router: Router, private notification: NotificationsService, private r: ActivatedRoute) { }

    ngOnInit(): void {
        this.customerId = sessionStorage.getItem("customerId");
        this.customerName = sessionStorage.getItem("customerName");
        this.fetchUserInfo();
    }
    private fetchUserInfo() {
        if (this.customerId > 0) {
            this.customerService.getCustomerDetailsById(this.customerId).subscribe((result: any) => {
                this.customerDetails = result;
            });
        }
    }


    public onUpdate() {
        this.customerService.updateCustomerDetails(this.customerDetails).subscribe((result: any) => {
            if (result['status'] == 200) {
                this.notification.success("Success", "Your profile updated successfully");
                this.router.navigate(['../'], { relativeTo: this.r });
            } else {
                this.notification.error("Error", "Some error occured");
            }
        });
    }
}
