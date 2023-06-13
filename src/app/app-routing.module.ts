import { NgModule,Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Home/dashboard/dashboard.component';
import { LoginComponent } from './Accounts/login/login.component';

import { CreateLoanComponent } from './Loan/create-loan/create-loan.component';
import { ViewLoanComponent } from './Loan/view-loan/view-loan.component';
// import { EditloanComponent } from './Loan/editloan/editloan.component';

import { ViewPaymentComponent } from './Payment/view-payment/view-payment.component';
import { CreatePaymentComponent } from './Payment/create-payment/create-payment.component';

import { CreateCustomerComponent } from './Customer/create-customer/create-customer.component';
import { ViewCustomerComponent } from './Customer/view-customer/view-customer.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },

  { path: 'create-loan', component: CreateLoanComponent },
  { path: 'view-loan', component: ViewLoanComponent },
  // { path: 'editloan', component: EditloanComponent },

  { path: 'view-payment', component: ViewPaymentComponent },
  { path: 'create-payment', component: CreatePaymentComponent },

  { path: 'create-customer', component: CreateCustomerComponent },
  { path: 'view-customer', component: ViewCustomerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
