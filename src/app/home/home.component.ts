import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  productList()
  {
    this.router.navigate(['products']);
  }

  addProduct()
  {
    this.router.navigate(['create-product']);
  }


  vendorList()
  {
    this.router.navigate(['vendors']);
  }

  addVendor()
  {
    this.router.navigate(['create-vendor']);
  }
}
