import { Component } from '@angular/core';
import { HttpService } from '../../service/http.service';

@Component({
  selector: 'app-basket',
  standalone: false,
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.css'
})
export class BasketComponent {

  products:any;

  constructor(private service:HttpService){
this.getBaketProduct();
  }

  getBaketProduct(){
    this.service.getBasketProduct().subscribe((data:any) =>{
this.products = data;
console.log(this.products);

    })
  };

  deleteProduct(id:number){
    this.service.getDeletedProduct(id).subscribe(
      (response)=>{
        alert('delete');
        this.getBaketProduct();
      },
      (error) =>{
        console.error(error)
      }
    )
  };

  incrementProduct(product:any){
     let newQuantity = product.quantity;
     newQuantity ++;

     let newPrice = product.product.price * newQuantity;


    const putProduct = {
      quantity: newQuantity,
      price: newPrice,
      productId: product.product.id,
    };

    this.service.getPutProduct(putProduct).subscribe(
      (response) => {
        this.getBaketProduct()
      },
      (error) =>{
        console.error(error);
      }
    )
  }

}
