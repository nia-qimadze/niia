import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../service/http.service';

@Component({
  selector: 'app-categoryproducts',
  standalone: false,
  templateUrl: './categoryproducts.component.html',
  styleUrl: './categoryproducts.component.css'
})
export class CategoryproductsComponent {

  id!:number;
  products:any;
  constructor(private route:ActivatedRoute, private service:HttpService){
this.getId();
this.getProducts();
  }

  getId(){
    this.route.params.subscribe((el:any) =>{
      this.id = el.id;
      console.log(this.id);  
    })
  }
  getProducts(){
    this.service.getProductsOfCategory(this.id).subscribe((data:any) =>{
      
      this.products = data;
      
      console.log(this.products);
      
    }) };

    postProduct(item:any){
      console.log(item);

      const postObject = {
        quantity:1,
        price: item.price,
        productId:item.id
      };
      

      this.service.getPostProduct(postObject).subscribe(
        (response) =>{
          alert("prodct added")
        },
        (error) => {
          console.error(error);
        }
      )

    }

}
