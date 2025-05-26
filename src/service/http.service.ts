import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  _ALLPRODUCTS_URL:string = "https://restaurant.stepprojects.ge/api/Products/GetAll";
  _CATEGORY_URL:string = "https://restaurant.stepprojects.ge/api/Categories/GetAll";
  _PRODUCTOFCATEGORY_RL:string = "https://restaurant.stepprojects.ge/api/Categories/GetCategory"
  _POST_URL:string = "https://restaurant.stepprojects.ge/api/Baskets/AddToBasket";
  _BASKET_URL:string = "https://restaurant.stepprojects.ge/api/Baskets/GetAll";
  _DELETEPRODUCT_URL:string = "https://restaurant.stepprojects.ge/api/Baskets/DeleteProduct";
  _PUTPRODUCT_URL:string = "https://restaurant.stepprojects.ge/api/Baskets/UpdateBasket";


  getAllProduct():Observable<any>{
    return this.http.get(this._ALLPRODUCTS_URL);
  };
  getCategory():Observable<any>{
    return this.http.get(this._CATEGORY_URL);
  }

  getProductsOfCategory(id:number):Observable<any>{
    return this.http.get(`${this._PRODUCTOFCATEGORY_RL}/${id}`)
  }

  getPostProduct(product:any):Observable<any>{
return this.http.post(this._POST_URL,product)
  };
  getBasketProduct():Observable<any>{
    return this.http.get(this._BASKET_URL);
  };
  getDeletedProduct(id:number):Observable<any>{
    return this.http.delete(`${this._DELETEPRODUCT_URL}/${id}`);
  };

  getPutProduct(product:any):Observable<any>{
    return this.http.put(this._PUTPRODUCT_URL,product);
  }


}
