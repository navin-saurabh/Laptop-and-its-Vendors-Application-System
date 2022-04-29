import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

modelId!:any;
product!:any;

  constructor(private route:ActivatedRoute,private productService:ProductServiceService,
    private router:Router) { }

  ngOnInit(): void {

    this.modelId=this.route.snapshot.params['modelId'];

    this.product=new Product();
    this.productService.getProductById(this.modelId).subscribe(data=>{
    console.log(data);
    this.product=data;
    });

  }

  
  goToUpdatePage(modelId:number)
  {
   this.router.navigate(['update-details',modelId]);
  }

  goBack()
  {
    this.router.navigate(['/products']);
  }

}
