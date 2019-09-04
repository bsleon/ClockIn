import { Component, OnInit, Output, EventEmitter, HostBinding } from '@angular/core';
import { ClockInOutComponent } from '../clock-in-out/clock-in-out.component';
import { ServeTimeService } from '../serve-time.service';

@Component({
  selector: 'app-clock-table',
  templateUrl: './clock-table.component.html',
  styleUrls: ['./clock-table.component.scss']
})
export class ClockTableComponent implements OnInit {
  clockInComp:ClockInOutComponent;
  columns: string[];
  date = new Date();
  uptoDate = new Date();

  constructor(private serveTime:ServeTimeService) { }

  ngOnInit() {
    //this.clockInComp = new ClockInOutComponent();
    this.columns = ["Date", "Clocked_In", "Clocked_Out"];
    this.serveTime.rows = [];
    this.date = new Date();
    this.uptoDate.setDate( this.date.getDate() + 3 );
  }


}
