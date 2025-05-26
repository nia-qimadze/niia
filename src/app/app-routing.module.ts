import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BasketComponent } from './basket/basket.component';
import { ErrorComponent } from './error/error.component';
import { FullinfoComponent } from './fullinfo/fullinfo.component';
import { CategoryproductsComponent } from './categoryproducts/categoryproducts.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"basket",component:BasketComponent},
  {path:"details",component:FullinfoComponent},
  {path:"products/:id",component:CategoryproductsComponent},


  {path:"**",component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
