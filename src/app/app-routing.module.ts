import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ChequeRequestComponent } from './cheque-request/cheque-request.component';
import { GreetComponent } from './greet/greet.component';
import { LoginComponent } from './login/login.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { NavComponent } from './nav/nav.component';
import { QueryRequestComponent } from './query-request/query-request.component';
import { ReportStolenCardComponent } from './report-stolen-card/report-stolen-card.component';
import { StatementDetailsComponent } from './statement-details/statement-details.component';
import { ViewServiceRequestComponent } from './view-service-request/view-service-request.component';
import { ViewStatementComponent } from './view-statement/view-statement.component';

const routes: Routes = [
    {
        path: "login",
        component: LoginComponent,
    },
    {
        path: "home",
        component: NavComponent, canActivate: [AuthGuard],
        children: [
            {
                path: "",
                component: GreetComponent, canActivate: [AuthGuard],
            },
            {
                path: "profile",
                component: MyProfileComponent, canActivate: [AuthGuard],
            },
            {
                path: "changePassword",
                component: ChangePasswordComponent, canActivate: [AuthGuard],
            },
            {
                path: "viewStatement",
                component: ViewStatementComponent, canActivate: [AuthGuard],
            },
            {
                path: "statementDetails",
                component: StatementDetailsComponent, canActivate: [AuthGuard],
            },
            {
                path: "chequeRequest",
                component: ChequeRequestComponent, canActivate: [AuthGuard],
            },
            {
                path: "reportStolenCard",
                component: ReportStolenCardComponent, canActivate: [AuthGuard],
            },
            {
                path: "queryRequest",
                component: QueryRequestComponent, canActivate: [AuthGuard],
            },
            {
                path: "viewServiceRequest",
                component: ViewServiceRequestComponent, canActivate: [AuthGuard],
            },
        ]
    },

    {
        path: "**",
        component: LoginComponent,
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
