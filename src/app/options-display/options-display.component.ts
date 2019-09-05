import { Component, OnInit } from '@angular/core';
import { CalculateTime } from '../calculateTime';
import { timeout } from 'q';
import { ServeTimeService } from '../serve-time.service';

@Component({
  selector: 'app-options-display',
  templateUrl: './options-display.component.html',
  styleUrls: ['./options-display.component.scss']
})
export class OptionsDisplayComponent implements OnInit {

  count:any;
  clockedInHours:any;
  clockedInMinutes:any;
  clockedInSeconds:any;
  clockedInTime:any;

  constructor(public serveTime:ServeTimeService) { 
 
  }

  ngOnInit() {
    //this.clockedInTime = localStorage.saveClock;
  }

}
