import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Building } from "../models/building";
import { cart } from "../models/cart";
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  baseURL:string='http://localhost:8000/';
  headers= {'content-type':'application/json'};
 constructor(private http:HttpClient) { }
 
cart: cart=new cart();

addToCart(product : Building){
  this.cart.add(product);
}

getitem() {
  return this.cart.buildings;
}
updateUser(user:User){
  this.cart.user = user
}
  removeFromCart(product : Building){
  this.cart.remove(product);
}
pay(): Observable<any> {
  console.log(this.cart);
  const body = {
    user: this.cart.user,
    buildings: this.cart.buildings,
    sum: this.cart.total,
    isPaid: true
  };
  return this.http.post(this.baseURL + 'cart/add', body, { headers: this.headers });
}
clear(){
  this.cart = new cart()
}
}

