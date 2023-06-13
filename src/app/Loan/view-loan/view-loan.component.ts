import { Component, OnInit } from '@angular/core';
import { LoanService } from 'src/app/Services/loan.service';


@Component({
  selector: 'app-view-loan',
  templateUrl: './view-loan.component.html',
  styleUrls: ['./view-loan.component.css']
})

export class ViewLoanComponent implements OnInit  {
   
  loans: any;
  currentLoan = null;
  
  currentIndex = -1;
  idNumber ='';

  constructor( private loanService: LoanService){}

  ngOnInit() : void { 
    this.retrieveLoan();
  } 

  

  retrieveLoan() : void {
    this.loanService.findPendingLoans()
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




