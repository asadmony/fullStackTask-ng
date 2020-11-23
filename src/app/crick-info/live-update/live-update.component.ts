import { Component, OnInit } from '@angular/core';
import { CrickInfoService } from '../crick-info.service';

@Component({
  selector: 'app-live-update',
  templateUrl: './live-update.component.html',
  styleUrls: ['./live-update.component.css']
})
export class LiveUpdateComponent implements OnInit {

  constructor(private crickService: CrickInfoService) { }

  ngOnInit(): void {
    this.crickService.getLiveUpdate().subscribe(res => {
      console.log(res);
    })
  }

}
