import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CustomerService {

    constructor(private http: HttpClient) { }

    public getCustomer(data: any) {
        return this.http.post("http://localhost:4444/abcbank/customerValidation", data);
    }

    public getCustomerDetailsById(id: number) {
        return this.http.get("http://localhost:4444/abcbank/getCustomerById/" + id);
    }

    public updateCustomerDetails(data: any) {
        return this.http.put("http://localhost:4444/abcbank/updateCustomer", data);
    }

    public getAccounts(id: number) {
        return this.http.get("http://localhost:4444/abcbank/getAccounts/" + id);
    }

    public getStatements(id: number) {
        return this.http.get("http://localhost:4444/abcbank/getStatements/" + id);
    }

    public changePassword(data: any) {
        return this.http.put("http://localhost:4444/abcbank/changePassword", data);
    }

    public saveChequeRequest(data: any) {
        return this.http.post("http://localhost:4444/abcbank/saveChequeRequest", data);
    }
    public saveLostCardRequest(data: any) {
        return this.http.post("http://localhost:4444/abcbank/saveLostCardRequest", data);
    }
    public saveQueryRequest(data: any) {
        return this.http.post("http://localhost:4444/abcbank/saveQueryRequest", data);
    }

    public getChequeRequests(id: number) {
        return this.http.get("http://localhost:4444/abcbank/getChequeRequests/" + id);
    }

    public getLostCardReports(id: number) {
        return this.http.get("http://localhost:4444/abcbank/getLostCardReports/" + id);
    }

    public getQueries(id: number) {
        return this.http.get("http://localhost:4444/abcbank/getQueries/" + id);
    }
}
