import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User=new User();
  msg:string="";

  constructor(private registrationService :RegistrationService,
    private router:Router) { }

  ngOnInit(): void {
  }

  loginUser()
  {
    this.registrationService.loginUserForRemote(this.user).subscribe(data=>
      {
      console.log(data);
      this.goToProductList();
      },
      error=>{
        console.log("error occured");
        this.msg="You have entered bad credentials";  
      }
      );
  }

  goToProductList()
  {
    this.router.navigate(['home']);
  }
}
