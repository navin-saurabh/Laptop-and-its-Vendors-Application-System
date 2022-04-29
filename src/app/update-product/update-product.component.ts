import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

modelId!:number;
product:Product=new Product();

  constructor(private productService:ProductServiceService,
    private router:Router,
    private route:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.modelId=this.route.snapshot.params['modelId'];

   this.productService.getProductById(this.modelId).subscribe(data=>{
     this.product=data;
    },error=>console.log(error));
  }

 

 onSubmit()
  {
    this.productService.updateProduct(this.modelId,this.product).subscribe(data=>{
      this.goToProductList();
    },error=>console.log(error));
    
  }

  goToProductList()
 {
   this.router.navigate(['/products']);
 }
}
