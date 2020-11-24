import { Component, OnInit } from '@angular/core';
import { CrickInfoService } from '../crick-info.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private crickService: CrickInfoService) { }
  results: any;
  ngOnInit(): void {
    this.crickService.getResults().subscribe(res => {
      this.results = res.response.items;
    })
  }

}
