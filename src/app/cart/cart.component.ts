import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ActivatedRoute, Router } from '@angular/router';

import { cartproduct } from '../models/cart';
import { Building } from '../models/building';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  building: cartproduct[] = [];
  total :number=0
  user = sessionStorage.getItem("user");
  user2=localStorage.getItem("mail")||"";


  constructor(private actRoute:ActivatedRoute,private cartService: CartService, private router: Router) { 

  }
  
  ngOnInit(): void {
    this.calculateTotal();
    this.building = this.cartService.getitem()
    this.total = this.cartService.cart.total
  }
  
 
  calculateTotal() {
    this.total = 0;
    for (const b of this.building) {
      this.total += b.buidlings.price * b.qty;
    }
  }
  clear(){
    this.cartService.clear()
    this.building = []
    this.total = this.cartService.cart.total
  }
  pay(){
    //here we use the post method to save the cart inside the json.db mock server
    if(localStorage.getItem("mail")){
    this.cartService.pay().subscribe(data=>{
      console.log(data)
    })
    this.clear()
    }
    else{//here it moves the user to component inside the other nested component 
      this.router.navigate(['/profile/userDetails',this.user2]);
    }
  }
  subQty(product : Building){
    this.cartService.removeFromCart(product)
    this.total = this.cartService.cart.total
  }
  addQty(product : Building){
    this.cartService.addToCart(product)
    this.total = this.cartService.cart.total
  }
}