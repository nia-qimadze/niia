import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { FullinfoComponent } from './fullinfo/fullinfo.component';
import { ProductsComponent } from './products/products.component';
import { CategoryComponent } from './category/category.component';
import { CategoryproductsComponent } from './categoryproducts/categoryproducts.component';
import { BasketComponent } from './basket/basket.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ErrorComponent,
    HomeComponent,
    FullinfoComponent,
    ProductsComponent,
    CategoryComponent,
    CategoryproductsComponent,
    BasketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
