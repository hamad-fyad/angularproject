import { Building } from "./building";
import { User } from "./user";

export class cartproduct{
  buidlings : Building 
  qty : number=1
  constructor(buidling : Building ){
      this.buidlings = buidling
  }
 
}
export class cart{

  
    constructor(){
    }  
    userMail = sessionStorage.getItem('user');
    buildings : cartproduct []=[] 
    user !: User;
    paid:boolean = false
    total:number = 0
    add(product: Building){
        this.total += product.price
        let found : boolean = false;
        for(let item of this.buildings){
          if(item.buidlings.title == product.title){
            item.qty++
            found = true
            break
          }
        }
        if(!found)
          this.buildings.push(new cartproduct(product))
      }
    getBuildings(){
        return this.buildings;
    }
    remove(product: Building){
        this.total -= product.price
        for(let item of this.buildings){
          if(item.buidlings.title == product.title){
            item.qty--
            if(item.qty==0){
              this.delete(product)
              break
            }
          }
        }
      }
      delete(product: Building){
        let temp : cartproduct[] = []
        for(let item of this.buildings){
          let val = this.buildings.pop()
          if(val!=null){
            if(val.buidlings.title == product.title) break
            else temp.push(val)
          }
        }
        for(let item of temp)
          this.buildings.push(item)
    
      }
}
