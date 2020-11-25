import { Component, OnInit } from '@angular/core';
import { CrickInfoService } from '../crick-info.service';

@Component({
  selector: 'app-live-update',
  templateUrl: './live-update.component.html',
  styleUrls: ['./live-update.component.css']
})
export class LiveUpdateComponent implements OnInit {

  constructor(private crickService: CrickInfoService) { }
  matches: any;
  ngOnInit(): void {
    this.crickService.getUpcomingUpdate().subscribe(res => {
      this.matches = res.response.items;
    })
  }
  dateformat(value : any){
    const date = new Date(value)
    var month = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ][date.getMonth()];
    return date.getDate() + " " + month + ", " + date.getFullYear();
  }

}
