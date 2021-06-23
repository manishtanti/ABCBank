import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { AuthService } from '../auth.service';
import { CustomerService } from '../customer.service';

@Component({
    selector: 'app-cheque-request',
    templateUrl: './cheque-request.component.html',
    styleUrls: ['./cheque-request.component.css']
})
export class ChequeRequestComponent implements OnInit {

    private customerId: any;
    public customerName: any;
    public accounts: any = [];

    constructor(private auth: AuthService, private router: Router, private customerService: CustomerService, private notification: NotificationsService, private r: ActivatedRoute) { }

    ngOnInit(): void {
        this.customerId = sessionStorage.getItem("customerId");
        this.customerName = sessionStorage.getItem("customerName");
        this.customerService.getAccounts(this.customerId).subscribe((data: any) => {
            this.accounts = data;
        })
    }



    public chequeRequest = {
        "account": "",
        "chequeLeaves": "20",
        "status": "pending",
        "requestDate": new Date()
    }
    public onSubmit() {
        this.customerService.saveChequeRequest(this.chequeRequest).subscribe((result: any) => {
            if (result['status'] == 200) {
                this.notification.success("Success", result['message']);
                this.router.navigate(['../'], { relativeTo: this.r });
            } else {
                this.notification.error("Error", result['message']);
            }
        })
    }
}
