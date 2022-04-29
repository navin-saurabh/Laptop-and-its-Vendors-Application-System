import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vendors } from '../vendors';
import { VendorsService } from '../vendors.service';

@Component({
  selector: 'app-vendor-details',
  templateUrl: './vendor-details.component.html',
  styleUrls: ['./vendor-details.component.css']
})
export class VendorDetailsComponent implements OnInit {

  vendorId!:number;
  vendor!:any;

  constructor(private vendorService : VendorsService,
    private route : ActivatedRoute) { }

  ngOnInit(): void {

    this.vendorId=this.route.snapshot.params['vendorId'];
    this.vendor=new Vendors();
    this.vendorService.getVendorById(this.vendorId).subscribe(data=>{
      console.log(data);
      this.vendor=data;
    })


  }

}
