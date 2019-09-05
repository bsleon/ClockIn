import { Component, OnInit, Output, EventEmitter, HostBinding } from '@angular/core';
import { ClockInOutComponent } from '../clock-in-out/clock-in-out.component';
import { ServeTimeService } from '../serve-time.service';

@Component({
  selector: 'app-clock-table',
  templateUrl: './clock-table.component.html',
  styleUrls: ['./clock-table.component.scss']
})
export class ClockTableComponent implements OnInit {
  columns: string[];
  dateNow = new Date();
  uptoDate = new Date();

  constructor(private serveTime:ServeTimeService) { }

  ngOnInit() {
    this.columns = ["Date", "Clocked_In", "Clocked_Out"];
    this.serveTime.rows = [];
    this.dateNow = new Date();
    this.uptoDate.setDate( this.dateNow.getDate() + 3 );
  }


}
