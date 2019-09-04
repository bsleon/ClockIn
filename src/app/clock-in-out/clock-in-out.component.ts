import { Component, OnInit, HostListener, Input } from '@angular/core';
import { CalculateTime } from '../calculateTime';
import { ClockTableComponent } from '../clock-table/clock-table.component';
import { ServeTimeService } from '../serve-time.service';
import { TitleBlinkerService } from '../title-blinker.service';

@Component({
  selector: 'app-clock-in-out',
  templateUrl: './clock-in-out.component.html',
  styleUrls: ['./clock-in-out.component.scss']
})
export class ClockInOutComponent implements OnInit {

  public clockInTime: any;
  public clockOutTime: any;
  //totalTime: any;
  runningTime: any;
  clockedInHours: any;
  clockedInMinutes: any;
  clockedInSeconds: any;
  clockedInMilliseconds: any;

  counter: number;
  timerRef;
  clockedIn: boolean = false;
  savedTime: number;
  savedClock: number;
  //startText = 'Start';
  //private clockedIn: boolean = false;

  constructor(private serveTime:ServeTimeService, private titleBlinker:TitleBlinkerService) {
    this.counter = 0;
    //this.totalTime = 0;
    this.clockedInHours = 0;
    this.clockedInMinutes = 0;
    this.clockedInSeconds = 0;
    this.clockedInMilliseconds = 0;
  }

  ngOnInit() {
    this.savedTime = localStorage.saveTheTime;
    this.savedClock = localStorage.saveClock;
  }

  clockIn() {
    if (!this.clockedIn) {
      this.clockInTime = new Date();
      //this.totalTime = 0;
      this.runningTime = 0;
      this.toggleTimer();
      //this.clockTable.addColumn(this.clockInTime);
      CalculateTime.setCurrentTime();
      this.serveTime.clockInTime = CalculateTime.currentTime;
    }
    if(typeof(Storage) != "undefined"){
        localStorage.saveClock = this.serveTime.clockInTime;
    }
    this.serveTime.rows.push(
      {
        Date: this.serveTime.tableDate(),
        Clocked_In: this.serveTime.clockInTime,
        //Clocked_Out: this.serveTime.clockOutTime,
      }
    );
    alert("You clocked in at: " + localStorage.saveClock);
  }

  clockOut() {
    if (this.clockedIn) {
      this.clockOutTime = new Date(Date.now());
      //this.totalTime += ((this.clockOutTime - this.clockInTime) / 1000).toFixed(2);
      this.toggleTimer();
      this.serveTime.clockOutTime = this.clockOutTime;
      CalculateTime.setCurrentTime();
      this.serveTime.clockOutTime = CalculateTime.currentTime;
    }
    this.serveTime.rows.pop();
    this.serveTime.rows.push(
      {
        Date: this.serveTime.tableDate(),
        Clocked_In: this.serveTime.clockInTime,
        Clocked_Out: this.serveTime.clockOutTime,
      }  
    );
    alert("You clocked out at: " + localStorage.saveClock);
  }

  saveTime() {
    if(typeof(Storage) != "undefined"){
      if(localStorage.saveTheTime){
        localStorage.saveTheTime = this.counter;
      }
      else localStorage.saveTheTime = 0;
    }
    alert("Save Time is: " + localStorage.saveTheTime);
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

  clearTimer() {
    this.clockedIn = false;
    //this.startText = 'Start';
    this.counter = undefined;
    clearInterval(this.timerRef);
  }

  ngOnDestroy() {
    clearInterval(this.timerRef);
  }

}
