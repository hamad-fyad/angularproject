import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  _type : any ;
  constructor() { }

  ngOnInit(): void {
  }
  setGenre(type : any){
    this._type = type
  }

}
