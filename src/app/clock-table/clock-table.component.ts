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

  
  constructor(private serveTime:ServeTimeService) { }

  ngOnInit() {
    //this.clockInComp = new ClockInOutComponent();
    this.columns = ["Date", "Clocked_In", "Clocked_Out"];
    this.serveTime.rows = [];
  }

  public addColumn() {
    //this.columns.push("anotherCol");
    //this.rows.push({ first: 'test', second: 'test', third: 'test' });
    this.serveTime.rows.push (
      {
        Date: this.serveTime.tableDate(),
        Clocked_In: this.serveTime.clockInTime,
        Clocked_Out: this.serveTime.clockOutTime,
      }
    );

  }


}
