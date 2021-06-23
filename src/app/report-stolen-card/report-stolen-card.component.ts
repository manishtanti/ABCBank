import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { AuthService } from '../auth.service';
import { CustomerService } from '../customer.service';


@Component({
    selector: 'app-report-stolen-card',
    templateUrl: './report-stolen-card.component.html',
    styleUrls: ['./report-stolen-card.component.css']
})

export class ReportStolenCardComponent implements OnInit {

    private customerId: any;
    public customerName: any;
    public accounts: any = [];

    constructor(private router: Router, private auth: AuthService, private customerService: CustomerService, private notification: NotificationsService, private r: ActivatedRoute) { }

    ngOnInit(): void {
        this.customerId = sessionStorage.getItem("customerId");
        this.customerName = sessionStorage.getItem("customerName");
        this.customerService.getAccounts(this.customerId).subscribe((data: any) => {
            this.accounts = data;
        })
    }






    model: any;

    public lostCardInfo = {
        "cardNumber": "",
        "lostOn": "",
        "account": "",
        "status": "pending",
        "requestDate": new Date()
    }
    public onSubmit() {
        if (new Date(this.lostCardInfo.lostOn).toLocaleDateString() > this.lostCardInfo.requestDate.toLocaleDateString()) {
            this.notification.warn("Warning", "Stolen date can't be future date");
            return;
        }

        this.lostCardInfo.cardNumber = this.lostCardInfo.account + "1234";
        this.customerService.saveLostCardRequest(this.lostCardInfo).subscribe((result: any) => {
            if (result['status'] == 200) {
                this.notification.success("Success", result['message']);
                this.router.navigate(['../'], { relativeTo: this.r });
            } else {
                this.notification.error("Error", result['message']);
            }
        })
    }


}
