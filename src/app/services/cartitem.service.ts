import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Building } from '../models/building';
import {  cartitem } from "../models/cartitems";
@Injectable({
  providedIn: 'root'
})
export class CartitemService {
  baseURL:string='http://localhost:8000/';
  headers= {'content-type':'application/json'};
  constructor(private http:HttpClient) { }

add(product:Building):Observable<any>{
  let user=sessionStorage.getItem("user")||"";
let cartitem2=new cartitem(user,product.title,product.price,product.img);
console.log(cartitem2);
let body=JSON.stringify(cartitem2);
return this.http.post(this.baseURL + "checkout/add",body,{
  headers:this.headers,
})
}
}
export { cartitem };

