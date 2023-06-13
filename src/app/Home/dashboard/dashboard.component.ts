import { Component, OnInit } from '@angular/core';
import { LoanService } from 'src/app/Services/loan.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {
   
  loans: any;
  approvedLoans: any;
  rejectedLoans: any;
  pendingLoans: any;

  currentLoan = null;
  
  currentIndex = -1;


  constructor( private loanService: LoanService){}

  ngOnInit() : void { 
    this.pendingLoan();
    this.retrieveLoan();
    this.approvedLoan();
    this.rejectedLoan();
   
  } 

  retrieveLoan() : void {
    this.loanService.getAll()
    .subscribe(
      data => {
        this.loans = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }
 
  approvedLoan() : void {
    this.loanService.findApprovedLoans()
    .subscribe(
      data => {
        this.approvedLoans = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }
  rejectedLoan() : void {
    this.loanService.findRejecetdLoans()
    .subscribe(
      data => {
        this.rejectedLoans = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

  pendingLoan() : void {
    this.loanService.findPendingLoans()
    .subscribe(
      data => {
        this.pendingLoans = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }
}




