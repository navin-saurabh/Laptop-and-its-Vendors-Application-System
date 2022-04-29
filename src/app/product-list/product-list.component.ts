import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit 
{

  products:Product[]=[];
  
  constructor(private productService: ProductServiceService,
    private router:Router
    ) 
  { 
   
  }

  ngOnInit(): void
  {

    this.getProducts();
  }

  private getProducts()
  {
    this.productService.getProductList().subscribe(data=>{
     this.products=data;
    });
  }



  deleteProduct(modelId:number)
  {
   this.productService.deleteProduct(modelId).subscribe(data=>{
    console.log(data);
    this.getProducts();
   });
  }



  updateProduct(modelId:number)
  {
   this.router.navigate(['update-details',modelId]);
  }


  

  viewProduct(modelId:number)
  {
    this.router.navigate(['product-details',modelId]);
  }
}
