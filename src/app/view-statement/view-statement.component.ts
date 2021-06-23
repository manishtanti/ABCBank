import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CustomerService } from '../customer.service';

@Component({
    selector: 'app-view-statement',
    templateUrl: './view-statement.component.html',
    styleUrls: ['./view-statement.component.css']
})
export class ViewStatementComponent implements OnInit {
    private customerId: any;
    public customerName: any;
    public accounts: any = [];

    constructor(private router: Router, private customerService: CustomerService, private auth: AuthService, private r: ActivatedRoute) { }

    ngOnInit(): void {
        this.customerId = sessionStorage.getItem("customerId");
        this.customerName = sessionStorage.getItem("customerName");
        this.customerService.getAccounts(this.customerId).subscribe((data: any) => {
            this.accounts = data;
        })
    }

    public showDetails(data: any) {
        sessionStorage.removeItem("accountNumber");
        sessionStorage.setItem("accountNumber", data);
        this.router.navigate(['../statementDetails'], { relativeTo: this.r });
    }

}




