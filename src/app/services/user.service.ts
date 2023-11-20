import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { stringify } from 'querystring';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseURL:string='http://localhost:8000/';
  headers= {'content-type':'application/json'};
  obsv: any = this.getobserv();
  users:any=[]
constructor(private http:HttpClient){
  this.users=this.getallusers()
}
getusers():Observable<any>{
  return this.http.get<User[]>(this.baseURL) 
}
adduser(user:User):Observable<any>{
  let body =JSON.stringify(user);
  return this.http.post<User>(this.baseURL+'users'+"/add",body,{'headers':this.headers});
}
getobserv(){
  return this.http.get(this.baseURL + 'users')
}
getallusers(){
  this.getobserv().subscribe((data)=>{
    console.log(data)
    this.users=data
  })
}
  getUser(mail: any) {
    
    for (let user of this.users) {
      if (user.email == mail) {
        return user;
      }
    }
    return null;
  }

  isExist(mail: any) {
    for (let user of this.users) {
      if (user.email === mail) {
        return true;
      }
    }
    return false;
  }

  isValidPassword(mail: any, password: any) {
    for (let user of this.users) {
      if (user.email === mail && user.password === password) {
        return true;
      }
    }
    return false;
  }

  addUser(name: any, mail: any, password: any, gender: any, date: any): Observable<any> {
    let user = new User(name, mail, password, gender, date);
    let body = JSON.stringify(user);
    return this.http.post(this.baseURL + 'users'+'/add', body, {
      headers: this.headers,});
  }
  
}