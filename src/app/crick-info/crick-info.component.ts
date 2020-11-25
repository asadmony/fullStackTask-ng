import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crick-info',
  templateUrl:'./crick-info.component.html',
  styleUrls: ['./crick-info.component.css']
})
export class CrickInfoComponent implements OnInit {
  constructor() { }
  live : boolean = true;

  tabbutton() {
    this.live = !this.live
  }
  ngOnInit(): void {
  }

}
