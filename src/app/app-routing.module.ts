import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './create-product/create-product.component';
import { CreateVendorsComponent } from './create-vendors/create-vendors.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RegisterComponent } from './register/register.component';
import { UpdateProductComponent } from './update-product/update-product.component'
import { UpdateVendorsComponent } from './update-vendors/update-vendors.component';
import { VendorDetailsComponent } from './vendor-details/vendor-details.component';
import { VendorsListComponent } from './vendors-list/vendors-list.component';





const routes: Routes = [
  {path : 'login' , component : LoginComponent},
  {path: '', redirectTo:'login',pathMatch:'full'},
  {path: 'registration' , component : RegisterComponent},
  {path: 'login/registration', redirectTo:'registration',pathMatch:'full'},
  {path :'products', component : ProductListComponent},
  {path:"create-product" , component : CreateProductComponent},
  {path:"product-details/:modelId" , component:ProductDetailsComponent},
  {path:"update-details/:modelId" , component:UpdateProductComponent},
  {path:"vendors" , component : VendorsListComponent},
  {path:"update-vendor-details/:vendorId" , component:UpdateVendorsComponent},
  {path:"vendor-details/:vendorId" , component : VendorDetailsComponent},
  {path:"create-vendor" , component : CreateVendorsComponent},
  {path:'home' , component : HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
