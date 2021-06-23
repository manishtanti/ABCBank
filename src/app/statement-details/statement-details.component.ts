import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CustomerService } from '../customer.service';


@Component({
    selector: 'app-statement-details',
    templateUrl: './statement-details.component.html',
    styleUrls: ['./statement-details.component.css']
})
export class StatementDetailsComponent implements OnInit {
    public accountNumber: any;
    public statements: any = [];
    constructor(private customerService: CustomerService, private auth: AuthService, private router: Router) { }

    ngOnInit(): void {
        this.accountNumber = sessionStorage.getItem("accountNumber");
        this.customerService.getStatements(this.accountNumber).subscribe((result: any) => {
            this.statements = result;
        })
    }

    totalRecords = this.statements.length;
    page: number = 1

}
