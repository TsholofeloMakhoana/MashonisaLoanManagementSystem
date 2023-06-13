import { Component, OnInit } from '@angular/core';
import { LoanService } from 'src/app/Services/loan.service';

@Component({
  selector: 'app-view-payment',
  templateUrl: './view-payment.component.html',
  styleUrls: ['./view-payment.component.css']
})
export class ViewPaymentComponent implements OnInit  {
   
  loans: any;
  currentLoan = null;
  
  currentIndex = -1;
  idNumber ='';

  constructor( private loanService: LoanService){}

  ngOnInit() : void { 
    this.retrieveLoan();
  } 

  retrieveLoan() : void {
    this.loanService.findApprovedLoans()
    .subscribe(
      data => {
        this.loans = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }
 
  setActiveLoan(loan: null, index: number){
    this,this.currentLoan = loan
    this.currentIndex = index;    
  }

   
  searchByID(): void{
    this.loanService.findByIDNumber(this.idNumber)
    .subscribe(     
        data => {
          this.loans = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}




