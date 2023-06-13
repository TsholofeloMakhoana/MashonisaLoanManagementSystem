// import { Component, Input ,OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { Router } from 'express';
// import { Loan } from 'src/app/Services/Models/loan.model';
// import { LoanService } from 'src/app/Services/loan.service';





import { Component } from '@angular/core';

@Component({
  selector: 'app-create-customer',
  templateUrl: './editloan.component.html',
  styleUrls: ['./editloan.component.css']
})
export class EditloanComponent {

}

// @Component({
//   selector: 'app-editloan',
//   templateUrl: './editloan.component.html',
//   styleUrls: ['./editloan.component.css']
// })
// export class EditloanComponent implements OnInit {

// @Input() viewMode = false;
// @Input() currentLoan: Loan = {
//     name : '',
//     id : '',
//     surname : '',
//     idNumber:'',
//     phonenumber : 0,
//     email:'',
//     homeaddress : '',
//     loantype : '',
//     numberofmonth:0,
//     amountrequired :0,
//     reasonforloan:'',
//     loanstatus : ''
// }

// message = '';

// constructor(
//   private loanService: LoanService,
//   private route: ActivatedRoute,
//   private router: Router) { }

// ngOnInit(): void {
//   if (!this.viewMode) {
//     this.message = '';
//     this.getLoan(this.route.snapshot.params["id"]);
//   }
// } 

// getLoan(id:any) : void{
//   this.loanService.get(id)
//   .subscribe (
//     data =>{
//       this.currentLoan = data;
//       console.log(data);
//     },
//     error =>{
//       console.log(error)
//     });
// }

// // updateStatus(status): void {
// //   const data ={
// //     status: status
// //   };

// //   this.loanService.update(this,this.currentLoan.id, data)
// //   .subscribe(
// //     response => {
// //       this.currentLoan.status= status;
// //       console.log(response);
// //     },
// //     error => {
// //       console.log(error);
// //     }
// //   )
// // }

// }
