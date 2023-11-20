import { Component, Input, OnInit } from '@angular/core';
import { Buildingservice } from '../services/buildings.service';
import { Building } from '../models/building';
 //injection 
import { CartService } from '../services/cart.service';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.css']
})

export class BuildingsComponent implements OnInit {
  btype : any = []
   p1 : any=[]
// here the comp recieves the input from the parent comp (catalog) and checks the type of buildings  
  @Input() 
  set type(type: any) {
    console.log(type)
    this.btype = type
    if(type=='Building')
      this.p1=this.getBuilding()
    else if (type=='villa')
      this.p1 = this.getvilla()
    else if(type=='apartment')
      this.p1 = this.getApartment()
      else
      this.p1=this.getAllBuildings()
  }
    get type(): string { return this.btype }
  

 
  
  constructor(private service:Buildingservice,private cartService : CartService ) { }
  //first thing that actives in the comp
  ngOnInit(): void {
    this.p1 = this.service.getAllBuildings()
    this.getAllBuildings() 
  }

  getBuilding(){            //subscribe is func in Observable class that allows to show the data or save in var 
this.service.getBuildings().subscribe((data)=>{
console.log(data);
this.p1=data;
})
  }
  getvilla(){
    this.service.getVilla().subscribe((data)=>{
      console.log(data);
      this.p1=data;
  })
}
getAllBuildings(){
  this.service.getAllBuildings().subscribe((data)=>{
    console.log(data);
    this.p1=data;
})
}
getApartment(){
  this.service.getApartment().subscribe((data)=>{
    console.log(data);
    this.p1=data;
})
}
  addToCart(building : any){
    this.cartService.addToCart(building)
  }

}
