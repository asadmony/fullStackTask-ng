import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crick-info',
  templateUrl:'./crick-info.component.html',
  styleUrls: ['./crick-info.component.css']
})
export class CrickInfoComponent implements OnInit {
  constructor() { }
  live : boolean = true;
  result : boolean = false;

  tablivebutton() {
    this.live = true
    this.result = false
  }
  tabresultbutton() {
    this.live = false
    this.result = true
  }
  ngOnInit(): void {
  }

}
