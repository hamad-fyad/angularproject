import { User } from "./user";

export class cartitem{
username :string;
title : string;
img : string;
price : number;
constructor (username:string,title:string,price :number,img:string){
    this.username=username
    this.title=title;
    this.img=img;
    this.price=price;
}


}