import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Vendor and their Products';

  constructor(private router:Router)
  {

  }

 goToLogin()
 {
   this.router.navigate(['login']);
 }

 
}


