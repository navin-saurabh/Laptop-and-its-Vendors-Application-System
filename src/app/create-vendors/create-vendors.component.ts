import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendors } from '../vendors';
import { VendorsService } from '../vendors.service';

@Component({
  selector: 'app-create-vendors',
  templateUrl: './create-vendors.component.html',
  styleUrls: ['./create-vendors.component.css']
})
export class CreateVendorsComponent implements OnInit {

  vendor:Vendors=new Vendors();

  constructor(private vendorService:VendorsService,
    private router:Router) { }

  ngOnInit(): void {
  }


  saveVendor()
  {
    this.vendorService.createVendor(this.vendor).subscribe(data=>{
    console.log(data);
    this.goToVendorList();
    })
  }

  goToVendorList()
  {
    this.router.navigate(['/vendors']);
  }

  onSubmit()
  {
    this.saveVendor();
  }
}
