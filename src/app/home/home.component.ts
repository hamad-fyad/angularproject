import { Component, OnInit } from '@angular/core';
import { Building } from "../models/building";
import { cartproduct } from '../models/cart';
import { Buildingservice } from "../services/buildings.service";
//injection
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  b : any = []

  
  constructor(private Bservies : Buildingservice,private cartService:CartService) { }

  ngOnInit(): void {
    this.b = this.getBuildings()

  }
  getBuildings(){
    this.Bservies.getBuildings().subscribe((data)=>{
      console.log(data);
      this.b=data;
  })
}
  addToCart(building : Building){
    this.cartService.addToCart(building)
  }
}