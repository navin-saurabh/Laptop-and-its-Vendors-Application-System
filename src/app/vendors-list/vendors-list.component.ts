import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendors } from '../vendors';
import { VendorsService } from '../vendors.service';

@Component({
  selector: 'app-vendors-list',
  templateUrl: './vendors-list.component.html',
  styleUrls: ['./vendors-list.component.css']
})
export class VendorsListComponent implements OnInit {

  vendors:Vendors[]=[];

  constructor(private vendorService : VendorsService,
    private router : Router) { 

    }

  ngOnInit(): void
   {
     this.getVendors();
  }

  private getVendors()
  {
    this.vendorService.getVendorList().subscribe(data=>{
      this.vendors=data;
    })
  }

  
  deleteVendor(vendorId:number)
  {
   this.vendorService.deleteVendor(vendorId).subscribe(data=>{
    console.log(data);
    this.getVendors();
   });
  }



  updateVendor(vendorId:number)
  {
   this.router.navigate(['update-vendor-details',vendorId]);
  }


  

  viewVendor(vendorId:number)
  {
    this.router.navigate(['vendor-details',vendorId]);
  }

}
