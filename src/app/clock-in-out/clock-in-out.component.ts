import { Component, OnInit, HostListener, Input } from '@angular/core';
import { CalculateTime } from '../calculateTime';
import { ServeTimeService } from '../serve-time.service';
import { TitleBlinkerService } from '../title-blinker.service';
import { timeout } from 'q';

@Component({
  selector: 'app-clock-in-out',
  templateUrl: './clock-in-out.component.html',
  styleUrls: ['./clock-in-out.component.scss']
})
export class ClockInOutComponent implements OnInit {

  public clockInTime: any;
  public clockOutTime: any;
  public workEndTime: Date;
  public startTime: Date;
  public breakEventIn: Date;
  public breakEventOut: Date;
  public timeSpan: Date;
  savedTime: number;
  savedClock: number;
  clockedIn: boolean;
  working: boolean = false;
  break: boolean = false;
  start: boolean = false;
  interval;
  timeOut: number;

  clockHoursPrediction: any;

  constructor(private serveTime: ServeTimeService, private titleBlinker: TitleBlinkerService) {

  }

  ngOnInit() {
    this.savedTime = localStorage.saveTheTime;
    this.savedClock = localStorage.saveClock;
  }

  clockIn() {
    if (!this.serveTime.clockedIn) {
      this.clockInTime = new Date();
      if (!this.start) {
        this.start = !this.start;
        this.startTime = new Date();
      }
      if (!this.working) {
        this.working = !this.working;
        this.workEndTime = new Date();
        if (this.timeOut = 0) {
          this.workEndTime.setHours(this.workEndTime.getHours() + 8);
        }
        else {
          this.workEndTime.setHours(this.workEndTime.getHours() + 8);
          this.workEndTime.setSeconds(this.workEndTime.getSeconds() + this.timeOut);
        }
      }
      this.serveTime.runningTime = 0;
      this.serveTime.toggleTimer();
      CalculateTime.setCurrentTime();
      this.serveTime.clockInTime = CalculateTime.currentTime;
      this.serveTime.workEndTime = this.workEndTime;
      if (typeof (Storage) != "undefined") {
        localStorage.saveClock = this.serveTime.clockInTime;
      }
      this.serveTime.rows.push(
        {
          Date: this.serveTime.tableDate(),
          Clocked_In: this.serveTime.clockInTime,
        }
      );
      alert(this.timeOut);

      this.serveTime.calculateDailyProgress();

    }
  }

  clockOut() {
    if (this.serveTime.clockedIn) {
      this.clockOutTime = new Date();
      this.serveTime.toggleTimer();
      this.serveTime.clockOutTime = this.clockOutTime;
      CalculateTime.setCurrentTime();
      this.serveTime.clockOutTime = CalculateTime.currentTime;

      this.serveTime.rows.pop();
      this.serveTime.rows.push(
        {
          Date: this.serveTime.tableDate(),
          Clocked_In: this.serveTime.clockInTime,
          Clocked_Out: this.serveTime.clockOutTime,
        }
      );

      this.serveTime.calculateDailyProgress();
    }
  }

  saveTime() {
    if (typeof (Storage) != "undefined") {
      if (localStorage.saveTheTime) {
        localStorage.saveTheTime = this.serveTime.counter;
      }
      else localStorage.saveTheTime = 0;
    }
  }

  clearTimer() {
    this.serveTime.clockedIn = false;
    this.serveTime.counter = undefined;
    clearInterval(this.serveTime.timerRef);
  }

  ngOnDestroy() {
    clearInterval(this.serveTime.timerRef);
  }

  startTimer() {
    this.timeOut = 0;
    this.interval = setInterval(() => {
      if (this.timeOut <= 100000) {
        this.timeOut++;
      }
    }, 1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }
}