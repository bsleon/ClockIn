import { Component, OnInit, Input } from '@angular/core';
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

  constructor(public serveTime:ServeTimeService) { 
 
  }

  ngOnInit() {
  }

}
