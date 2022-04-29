import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vendors } from './vendors';

@Injectable({
  providedIn: 'root'
})
export class VendorsService {

  private vendorUrl:string;

  constructor(private http:HttpClient) { 
    this.vendorUrl="http://localhost:8080/api/v2/vendors";
  }

  getVendorList():Observable<any>
  {
    return this.http.get<Vendors[]>((this.vendorUrl));
  }




  createVendor(vendor:Vendors):Observable<any>
  {
    return this.http.post(this.vendorUrl,vendor);
  }



  getVendorById(vendorId:any):Observable<any>
  {
    const url = `${this.vendorUrl}/${vendorId}`;

    return this.http.get<any>(url);
  }



  updateVendor(vendorId:number,vendor:Vendors):Observable<any>{
    const url = `${this.vendorUrl}/${vendorId}`;
    return this.http.put(url,vendor);
  }




  
  deleteVendor(vendorId:number):Observable<any>
  {
    const url=`${this.vendorUrl}/${vendorId}`;
    return this.http.delete(url);
  }

 
  
}
