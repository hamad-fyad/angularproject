import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
registerForm! : FormGroup
users :any=[]
  constructor(private  service : UserService,private route:Router) { }

  ngOnInit(): void {
    this.createRegisterForm()
    this.users=this.service.getallusers();
  }
createRegisterForm(){
  this.registerForm= new FormGroup(
    {
    name : new FormControl('',[Validators.required]),
    mail : new FormControl('',[Validators.required,Validators.email]),
    password : new FormControl('',[Validators.required,Validators.minLength(4)]),
    confirmpassword:new FormControl('',[Validators.required,Validators.minLength(4)]),
    gender : new FormControl(),
    date : new FormControl()
    }
  )
}
onSubmit(){
  let mail =this.registerForm.value.mail;
  let passwords=this.registerForm.value.password;
  let confirmpassword=this.registerForm.value.confirmpassword;
  if(this.service.isExist(mail)){
    alert("user already exists")  
  }
  else if (passwords!=confirmpassword){
alert("the confirm password is not the same check it ");
  }
  else{
let name=this.registerForm.value.name;
let password=this.registerForm.value.password;
let mail=this.registerForm.value.mail;
let  date =this.registerForm.value.date
let gender =this.registerForm.value.gender
this.service.addUser(name,mail,password,gender,date).subscribe((data)=>{
  console.log(data);
this.service.getallusers()
});
alert("new user add");
this.route.navigateByUrl("profile/login");
  }

}
back(){
    this.route.navigateByUrl("profile/login");
}
}
