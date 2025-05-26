import { Component } from '@angular/core';
import { HttpService } from '../../service/http.service';

@Component({
  selector: 'app-category',
  standalone: false,
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {

category:any;

  constructor(private service:HttpService){
    this.getCategory();
  }

  getCategory(){
    this.service.getCategory().subscribe((data:any) =>{
this.category = data;
console.log(this.category);

    })
  }
}
