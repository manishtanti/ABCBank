import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CustomerService } from '../customer.service';



@Component({
    selector: 'app-view-service-request',
    templateUrl: './view-service-request.component.html',
    styleUrls: ['./view-service-request.component.css']
})

export class ViewServiceRequestComponent implements OnInit {

    private customerId: any;
    public customerName: any;
    public accounts: any = [];
    public cheque: any = [];
    public stolenCard: any = [];
    public query: any = [];

    constructor(private router: Router, private customerService: CustomerService, private auth: AuthService) { }

    ngOnInit(): void {
        this.customerId = sessionStorage.getItem("customerId");
        this.customerName = sessionStorage.getItem("customerName");

        this.customerService.getAccounts(this.customerId).subscribe((result: any) => {
            this.accounts = result;

            for (let i = 0; i < this.accounts.length; i++) {
                this.customerService.getChequeRequests(this.accounts[i].accountNumber).subscribe((chequeData: any) => {
                    this.cheque.push(...chequeData);
                });
                this.customerService.getLostCardReports(this.accounts[i].accountNumber).subscribe((cardData: any) => {
                    this.stolenCard.push(...cardData);
                });
                this.customerService.getQueries(this.accounts[i].accountNumber).subscribe((queryData: any) => {
                    this.query.push(...queryData);
                });
            }
        });
    }

    dataSource: any = this.cheque;
    totalRecords = 0;
    page: number = 1



    public changeCat(val: string) {
        if (val == 'cheque') {
            this.cheque.sort((a: any, b: any) => new Date(b.requestDate).getTime() - new Date(a.requestDate).getTime());
            this.dataSource = this.cheque;
        } else if (val == 'stolenCard') {
            this.stolenCard.sort((a: any, b: any) => new Date(b.requestDate).getTime() - new Date(a.requestDate).getTime());
            this.dataSource = this.stolenCard;
        } else if (val == 'query') {
            this.query.sort((a: any, b: any) => new Date(b.requestDate).getTime() - new Date(a.requestDate).getTime());
            this.dataSource = this.query;
        }
        this.totalRecords = this.dataSource.length;
    }

}
