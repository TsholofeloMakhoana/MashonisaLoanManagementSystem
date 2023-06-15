import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signupUsers: any[] = [];
  signupobj: any = {
    userName:'',
    email:'',
    password:'',
  };

  loginobj: any = {
    userName:'',
    password:''
  };

  constructor() {}

  ngOnInit(): void {
    const localData = localStorage.getItem("signUpUsers");
    if(localData != null) {
      this.signupUsers = JSON.parse(localData);
    }
  }
 
  onSignUp(){
    this.signupUsers.push(this.loginobj);
    localStorage.setItem('signUpUsers',JSON.stringify(this.signupUsers));
    this.signupobj = {
      userName:'',
      email:'',
      password:''
  };
  }
  onLogin(){
    const isUserExist =this.signupUsers.find(m => m.userName == this.loginobj.userName && m.password == this.loginobj.password);
    if(isUserExist != undefined) {
      alert('user Login Successfully');
    } else {
      alert('Wrong Credentials');
    }
  }

}
