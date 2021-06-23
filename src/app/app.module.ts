import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FooterComponent } from './footer/footer.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { ViewStatementComponent } from './view-statement/view-statement.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ViewServiceRequestComponent } from './view-service-request/view-service-request.component';
import { StatementDetailsComponent } from './statement-details/statement-details.component';
import { MatMenuModule } from '@angular/material/menu';
import { ChequeRequestComponent } from './cheque-request/cheque-request.component';
import { ReportStolenCardComponent } from './report-stolen-card/report-stolen-card.component';
import { QueryRequestComponent } from './query-request/query-request.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { LoginComponent } from './login/login.component';
import { GreetComponent } from './greet/greet.component';

@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        FooterComponent,
        MyProfileComponent,
        ViewStatementComponent,
        ChangePasswordComponent,
        ViewServiceRequestComponent,
        StatementDetailsComponent,
        ChequeRequestComponent,
        ReportStolenCardComponent,
        QueryRequestComponent,
        LoginComponent,
        GreetComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatMenuModule,
        NgxPaginationModule,
        FormsModule,
        HttpClientModule,
        SimpleNotificationsModule.forRoot({ position: ['top', 'right'], timeOut: 5000, showProgressBar: true })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
