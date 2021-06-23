import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { AuthService } from '../auth.service';
import { CustomerService } from '../customer.service';

@Component({
    selector: 'app-query-request',
    templateUrl: './query-request.component.html',
    styleUrls: ['./query-request.component.css']
})
export class QueryRequestComponent implements OnInit {

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



    public queryRequest = {
        "account": "",
        "query": "",
        "status": "pending",
        "requestDate": new Date()
    }
    public onSubmit() {
        this.customerService.saveQueryRequest(this.queryRequest).subscribe((result: any) => {
            if (result['status'] == 200) {
                this.notification.success("Success", result['message']);
                this.router.navigate(['../'], { relativeTo: this.r });
            } else {
                this.notification.error("Error", result['message']);
            }
        })
    }
}
