import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Vendors } from '../vendors';
import { VendorsService } from '../vendors.service';

@Component({
  selector: 'app-update-vendors',
  templateUrl: './update-vendors.component.html',
  styleUrls: ['./update-vendors.component.css']
})
export class UpdateVendorsComponent implements OnInit {

  vendorId!:number;
  vendor:Vendors=new Vendors();

  constructor(private vendorService:VendorsService,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void
   {
      this.vendorId=this.route.snapshot.params['vendorId'];

      this.vendorService.getVendorById(this.vendorId).subscribe(data=>{
        this.vendor=data;
      },error=>console.log(error));

   }

   onSubmit()
  {
    this.vendorService.updateVendor(this.vendorId,this.vendor).subscribe(data=>{
      this.goToVendorList();
    },error=>console.log(error));
    
  }

  goToVendorList()
 {
   this.router.navigate(['/vendors']);
 }

 

}
