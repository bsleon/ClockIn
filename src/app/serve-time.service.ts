import { Injectable } from '@angular/core';
import { ClockTableComponent } from './clock-table/clock-table.component';
import { ClockInOutComponent } from './clock-in-out/clock-in-out.component';
import { OptionsDisplayComponent } from './options-display/options-display.component';

@Injectable({
  providedIn: 'root'
})
export class ServeTimeService {

  clockInTime:any;
  clockOutTime:any;
  rows: any[];
  clockTable:ClockTableComponent;
  clockInOut:ClockInOutComponent;
  optionsDisplay:OptionsDisplayComponent;
  runningTime: any;
  clockedInHours: any;
  clockedInMinutes: any;
  clockedInSeconds: any;
  clockedInMilliseconds: any;
  currentTime: any;
  
  counter: number;
  timerRef;
  clockedIn: boolean = false;

  constructor() {
    this.counter = 0;
    //this.totalTime = 0;
    this.clockedInHours = 0;
    this.clockedInMinutes = 0;
    this.clockedInSeconds = 0;
    this.clockedInMilliseconds = 0;
   }

  tableDate() {

    const date = new Date();
    const weekDay = date.toLocaleDateString('default', {weekday: 'long'});
    const dayOfMonth = date.getDate();
    const month = date.toLocaleDateString('default', {month: 'long'});
    var currentDate = weekDay + ", " + month + " " + dayOfMonth;
    
    return currentDate;
  }

  toggleTimer() {
    this.clockedIn = !this.clockedIn;
    if (this.clockedIn) {
      //this.startText = 'Stop';
      const startTime = Date.now() - (this.counter || 0);
      this.timerRef = setInterval(() => {
        this.counter = Date.now() - startTime;
        this.clockedInMilliseconds = (this.counter % 1000) / 100;
        this.clockedInSeconds = Math.floor(this.counter / 1000) % 60;
        this.clockedInMinutes = Math.floor((this.counter / (1000 * 60)) % 60);
        this.clockedInHours = Math.floor((this.counter / (1000 * 60 * 60)) % 24);

        this.clockedInHours = (this.clockedInHours < 10) ? "0" + this.clockedInHours : this.clockedInHours;
        this.clockedInMinutes = (this.clockedInMinutes < 10) ? "0" + this.clockedInMinutes : this.clockedInMinutes;
        this.clockedInSeconds = (this.clockedInSeconds < 10) ? "0" + this.clockedInSeconds : this.clockedInSeconds;
      });

    }
    else {
      //this.startText = 'Resume';
      clearInterval(this.timerRef);
    }

  }

  getCounter(){
    return this.counter;
  }

  setClockedIn(){
    return this.clockedIn
  }

}
