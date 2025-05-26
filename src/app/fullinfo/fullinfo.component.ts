import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fullinfo',
  standalone: false,
  templateUrl: './fullinfo.component.html',
  styleUrl: './fullinfo.component.css'
})
export class FullinfoComponent {


  product:any;
  
  constructor(private route:ActivatedRoute){
    this.route.queryParams.subscribe((data:any) => {
     this.product = data;
     console.log(this.product);    
      
    })
  }

}
