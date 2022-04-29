import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:User=new User();

  constructor(private registrationService:RegistrationService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }
  onSubmit()
  {
    this.registerUser();
  }

  registerUser()
  {
    this.registrationService.registerUserForLoginCredentials(this.user).subscribe(data=>
      {
       this.router.navigate(['login']);
      });
  }

}
