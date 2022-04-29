import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService 
{
  private baseURL: string; 

  // private root_url:string="http://laptopvendor-env.eba-pnizbg93.us-west-2.elasticbeanstalk.com/";

  

  constructor(private http: HttpClient) { 
    this.baseURL="http://localhost:8080/api/v1/products";
  }

  getProductList():Observable<Product[]>
  {
    return this.http.get<Product[]>((this.baseURL));
  }

  
  createProduct(product:Product):Observable<Object>
  {
    return this.http.post(this.baseURL,product);
  }



  getProductById(modelId:any):Observable<Product>
  {
    const url = `${this.baseURL}/${modelId}`;

    return this.http.get<Product>(url);
  }

  updateProduct(modelId:number,product:Product):Observable<Object>{
    const url = `${this.baseURL}/${modelId}`;
    return this.http.put(url,product);
  }

  deleteProduct(modelId:number):Observable<Object>
  {
    const url = `${this.baseURL}/${modelId}`;
    return this.http.delete(url);
  }
  

 

}
