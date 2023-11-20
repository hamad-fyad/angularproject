import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  mail:any='';
  name:any ="";
  gender:any="";
  birthday:any="";
  img : any = "";
  refresh : any = sessionStorage.getItem('refresh')
  constructor(private actRoute:ActivatedRoute,private service:UserService) { }

  ngOnInit(): void {
    this.showUsers();
    this.mail=this.actRoute.snapshot.params["mail"];
    let user = this.service.getUser(this.mail)
    if(user != null){
      this.name = user.name
      this.gender = user.gender
      this.birthday = user.date
      this.img = user.img
    }
  }
  showUsers() {
    return this.service.getUser.toString ;
  }
 




}
