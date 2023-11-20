import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logFunction() {
    if (sessionStorage.getItem("user")) {
      sessionStorage.removeItem("user");
      this.router.navigateByUrl("profile/login");
    } else {
      this.router.navigateByUrl("profile/login");
    }
  }
  get logStatus():string {
    return sessionStorage.getItem("user") ? "Logout" : "Login";
  }
}