import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crick-info',
  templateUrl:'./crick-info.component.html',
  styleUrls: ['./crick-info.component.css']
})
export class CrickInfoComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
  live: boolean;
  result: boolean;
  button(){
    this.live = !this.live
    this.result = !this.result
  }

}
