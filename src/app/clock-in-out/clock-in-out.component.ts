import { Component, OnInit } from '@angular/core';
import { CalculateTime } from '../calculateTime';

@Component({
  selector: 'app-clock-in-out',
  templateUrl: './clock-in-out.component.html',
  styleUrls: ['./clock-in-out.component.css']
})
export class ClockInOutComponent implements OnInit {

  clockInTime:any;
  clockOutTime:any;
  totalTime:any;
  runningTime:any;
  clockedInHours:any;
  clockedInMinutes:any;
  clockedInSeconds:any;
  clockedInMilliseconds:any;

  counter: number;
  timerRef;
  running: boolean = false;
  startText = 'Start';

  constructor() {
    this.totalTime = 0;
    this.clockedInHours = 0;
    this.clockedInMinutes = 0;
    this.clockedInSeconds = 0;
    this.clockedInMilliseconds = 0;
   }

  ngOnInit() {
  }

  clockIn() { 
    //this.clockInTime = CalculateTime.originalHours;
    this.clockInTime = new Date(Date.now());
    //alert("Clocked In At: " + this.clockInTime);
    //this.clockInTime = CalculateTime.originalHours;
    this.runningTime = 0;
    this.startTimer();

 }

 clockOut() { 
  this.clockOutTime = new Date(Date.now());
  this.totalTime = this.totalTime + (this.clockOutTime - this.clockInTime)/1000;
  //alert("Clocked Out At: " + this.clockOutTime);
  
  this.startTimer();
}

startTimer() {
  this.running = !this.running;
  if (this.running) {
    this.startText = 'Stop';
    const startTime = Date.now() - (this.counter || 0);
    this.timerRef = setInterval(() => {
      this.counter = Date.now() - startTime;
      this.clockedInMilliseconds = (this.counter % 1000)/100;
      this.clockedInSeconds = Math.floor(this.counter/1000)%60;
      this.clockedInMinutes = Math.floor((this.counter/(1000*60))%60);
      this.clockedInHours = Math.floor((this.counter/(1000*60*60))%24);

      this.clockedInHours = (this.clockedInHours < 10) ? "0" + this.clockedInHours : this.clockedInHours;
      this.clockedInMinutes = (this.clockedInMinutes < 10) ? "0" + this.clockedInMinutes : this.clockedInMinutes;
      this.clockedInSeconds = (this.clockedInSeconds < 10) ? "0" + this.clockedInSeconds : this.clockedInSeconds;
    
    });
    //this.clockedInMilliseconds = this.counter % 

  } 
  else {
    this.startText = 'Resume';
    clearInterval(this.timerRef);
  }
}

clearTimer() {
  this.running = false;
  this.startText = 'Start';
  this.counter = undefined;
  clearInterval(this.timerRef);
}

ngOnDestroy() {
  clearInterval(this.timerRef);
}

}
