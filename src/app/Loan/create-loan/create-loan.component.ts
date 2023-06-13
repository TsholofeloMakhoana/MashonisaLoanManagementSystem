import { Component, OnInit, NgZone } from '@angular/core';
import { LoanService } from 'src/app/Services/loan.service';
import {  Router } from '@angular/router';
@Component({
  selector: 'app-create-loan',
  templateUrl: './create-loan.component.html',
  styleUrls: ['./create-loan.component.css']
})
export class CreateLoanComponent implements OnInit  {
  
loan = {
  name:'',
  surname : '',
  idNumber:'',
  phonenumber : 123456789,
  email:'',
  homeaddress : '',
  loantype : '',
  numberofmonth:24,
  amountrequired : 1000.00,
  reasonforloan:'',
  loanstatus : "pending"
};
submitted = false;

  
constructor( private loanService: LoanService,private router : Router){}

ngOnInit() : void { } 

saveNewLoan() : void {
  const data = {
    name : this.loan.name,
    surname : this.loan.surname,
    idNumber:this.loan.idNumber,
    phonenumber : this.loan.phonenumber,
    email:this.loan.email,
    homeaddress : this.loan.homeaddress,
    loantype : this.loan.loantype,
    numberofmonth:this.loan.numberofmonth,
    amountrequired : this.loan.amountrequired,
    reasonforloan:this.loan.reasonforloan,
    loanstatus : "pending"
  }; 

  this.loanService.create(data).subscribe(
      response => {
        console.log(response);
        alert("loan successfully added");
        this.router.navigateByUrl('/view-loan');
        this.submitted = true;
      },
      error =>{
        console.log(error);
      });
  }
  saveLoan(): void {
      this.submitted = false;  
  }
}

