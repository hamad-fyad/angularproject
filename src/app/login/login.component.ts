import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  mail: any;
  pass: any;
  refresh: any = sessionStorage.getItem('refresh');
users :any=[]
//formBuilder is in the reactive forms we use to shortcut the Formsarrays/formsgroup/formscontrol 
  constructor(private builder: FormBuilder, private router: Router, private userService: UserService) { }
  ngOnInit(): void {
    this.refreshFunc();
    this.createLoginForm();
    this.users=this.userService.getallusers();
  }
  createLoginForm() {
    this.loginForm = this.builder.group({
      mail: [''],
      password: ['']
    });
  }

  refreshFunc() {
    if (this.refresh === 'false') {
      sessionStorage.setItem('refresh', 'true');
      this.router.navigate(['/profile']);
    }
  }
  onSubmit() {
    if (this.loginForm) {
      if (this.loginForm.valid) {
        let mail = this.loginForm.value.mail;//name proprty in the html (froms)
        let password = this.loginForm.value.password;
        if (this.userService.isExist(mail) && this.userService.isValidPassword(mail, password)) {
          localStorage.setItem("mail", JSON.stringify(mail));
        sessionStorage.setItem("user", mail);
        sessionStorage.setItem("refresh", "false");
        this.router.navigate(['/profile/userDetails',mail]);
      } else {
        alert("wrong password or email");
        }
        }
        }
        }

        back() {
        this.router.navigateByUrl("profile/register");
        }
        }
        
    