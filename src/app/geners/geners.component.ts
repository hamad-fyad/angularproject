import { Component, EventEmitter,OnInit,Output } from '@angular/core';

@Component({
  selector: 'app-geners',
  templateUrl: './geners.component.html',
  styleUrls: ['./geners.component.css']
})
export class GenersComponent implements OnInit {//allows components to communicate with each other by sending and receiving custom events
    @Output() changeGenre : EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  sendallBuildings(){
    this.changeGenre.emit("allBuilding")

  }
  sendBuildings(){
    this.changeGenre.emit("Building")
  }
  sendVillas(){
    this.changeGenre.emit("villa")
  }
  sendApartments(){
    this.changeGenre.emit("apartment")
  }
}
