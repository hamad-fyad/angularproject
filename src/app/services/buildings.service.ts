import { Injectable } from "@angular/core";
import { Building } from "../models/building";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
    providedIn:'root'
  })
  
export class Buildingservice {
  baseURL:string='http://localhost:8000/';
  headers= {'content-type':'application/json'};
  constructor(private http:HttpClient) { 
  }
  getAllBuildings(){
    return this.http.get(this.baseURL + 'allBuilding')

  }
    getBuildings(){
      return this.http.get(this.baseURL +'allBuilding/'+ 'Building')

    }
    getVilla(){
      return this.http.get(this.baseURL +'allBuilding/'+ 'villa')
    }
    getApartment(){
      return this.http.get(this.baseURL +'allBuilding/'+ 'apartment')
    }
    
  }
  
 