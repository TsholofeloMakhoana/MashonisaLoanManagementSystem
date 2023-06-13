import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FormGroup,  FormBuilder,  Validators,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Home/dashboard/dashboard.component';
import { RegisterComponent } from './Accounts/register/register.component';
import { LoginComponent } from './Accounts/login/login.component';
import { HeaderComponent } from './Home/header/header.component';
import { SidebarComponent } from './Home/sidebar/sidebar.component';
import { CreateLoanComponent } from './Loan/create-loan/create-loan.component';
import { ViewLoanComponent } from './Loan/view-loan/view-loan.component';
import { ViewPaymentComponent } from './Payment/view-payment/view-payment.component';
import { CreatePaymentComponent } from './Payment/create-payment/create-payment.component';
import { CreateCustomerComponent } from './Customer/create-customer/create-customer.component';
import { ViewCustomerComponent } from './Customer/view-customer/view-customer.component';
import { EditloanComponent } from './Loan/editloan/editloan.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    SidebarComponent,
    CreateLoanComponent,
    ViewLoanComponent,
    ViewPaymentComponent,
    CreatePaymentComponent,
    CreateCustomerComponent,
    ViewCustomerComponent,
    EditloanComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
 
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  title = 'Angular Form Validation ';
   angForm: FormGroup | undefined;
   constructor(private fb: FormBuilder) {
    this.createForm();
  }
   createForm() {
    this.angForm = this.fb.group({
       name: ['', Validators.required ]
    });
  }

}
