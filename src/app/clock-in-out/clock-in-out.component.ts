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
  savedTime: number;
  savedClock: number;
  //startText = 'Start';
  //private clockedIn: boolean = false;
  clockedIn: boolean;

  constructor(private serveTime:ServeTimeService, private titleBlinker:TitleBlinkerService) {

  }

  ngOnInit() {
    this.savedTime = localStorage.saveTheTime;
    this.savedClock = localStorage.saveClock;
  }

  clockIn() {
    if (!this.serveTime.clockedIn) {
      this.clockInTime = new Date();
      //this.totalTime = 0;
      this.serveTime.runningTime = 0;
      this.serveTime.toggleTimer();
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
    if (this.serveTime.clockedIn) {
      this.clockOutTime = new Date(Date.now());
      //this.totalTime += ((this.clockOutTime - this.clockInTime) / 1000).toFixed(2);
      this.serveTime.toggleTimer();
      this.serveTime.clockOutTime = this.clockOutTime;
      CalculateTime.setCurrentTime();
      this.serveTime.clockOutTime = CalculateTime.currentTime;
    }
    this.serveTime.rows.fill(
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
        localStorage.saveTheTime = this.serveTime.counter;
      }
      else localStorage.saveTheTime = 0;
    }
    alert("Save Time is: " + localStorage.saveTheTime);
  }

  clearTimer() {
    this.serveTime.clockedIn = false;
    //this.startText = 'Start';
    this.serveTime.counter = undefined;
    clearInterval(this.serveTime.timerRef);
  }

  ngOnDestroy() {
    clearInterval(this.serveTime.timerRef);
  }

}