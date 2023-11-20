import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }
  ID1=316511609;
  ID2=211584594;
  background="dark";
  email1="shady@gmail.com";
  email2="hamad@gmail.com";
  name1="Shady salaha";
  name2="hamad fyad";
  imgurl1="https://www.biography.com/.image/t_share/MTQ3NjM5MTEzMTc5MjEwODI2/eminem_photo_by_dave_j_hogan_getty_images_entertainment_getty_187596325.jpg"
  imgurl2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThqIegAWWZ1KSsP2d9Yrw9xa-BmAFCUZ7E2w&usqp=CAU"
  styling='dark';
  isBright:boolean=true;
  change(){
  this.isBright=!this.isBright;
  if(!this.isBright){
  this.styling='dark-mode';
  this.background="bright";
  }
  else{
    this.styling='bright';
   this.background="dark";
  }
  
  }
  
  ngOnInit(): void {
  }

}
