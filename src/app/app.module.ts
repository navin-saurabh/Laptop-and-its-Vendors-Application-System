import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { FormsModule } from '@angular/forms';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { VendorsListComponent } from './vendors-list/vendors-list.component';
import { UpdateVendorsComponent } from './update-vendors/update-vendors.component';
import { CreateVendorsComponent } from './create-vendors/create-vendors.component';
import { VendorDetailsComponent } from './vendor-details/vendor-details.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';





@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CreateProductComponent,
    ProductDetailsComponent,
    UpdateProductComponent,
    VendorsListComponent,
    UpdateVendorsComponent,
    CreateVendorsComponent,
    VendorDetailsComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
