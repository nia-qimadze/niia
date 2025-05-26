import { Component } from '@angular/core';
import { HttpService } from '../../service/http.service';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  products:any;

  constructor(private service:HttpService){
this.getProducts()
  }

  getProducts(){
    this.service.getAllProduct().subscribe((data:any) =>{
      this.products = data;
      console.log(this.products);
      
    })
  }

}
