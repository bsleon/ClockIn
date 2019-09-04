import { Injectable } from '@angular/core';
import { ClockTableComponent } from './clock-table/clock-table.component';
import { ClockInOutComponent } from './clock-in-out/clock-in-out.component';

@Injectable({
  providedIn: 'root'
})
export class ServeTimeService {

  clockInTime:any;
  clockOutTime:any;
  rows: any[];

  constructor() { }

  tableDate() {

    const date = new Date();
    const weekDay = date.toLocaleDateString('default', {weekday: 'long'});
    const dayOfMonth = date.getDate();
    const month = date.toLocaleDateString('default', {month: 'long'});
    var currentDate = weekDay + ", " + month + " " + dayOfMonth;
    
    return currentDate;
  }

}
