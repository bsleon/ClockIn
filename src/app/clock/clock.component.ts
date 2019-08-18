import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
  hours: string;
  minutes: string;
  seconds: string;
  ampm: string;
  private timerId = null;

  ngOnInit() {
    this.setCurrentTime();
    this.timerId = this.updateTime();
  }

  ngOnDestroy() {
    clearInterval(this.timerId);
  }

  private setCurrentTime() {
    const time = new Date(Date.now());
    var hour = time.getHours();
    var ampm = hour >= 12 ? "PM" : "AM";
    hour = hour % 12;
    hour = hour ? hour : 12;

    //this.hours = this.addSpace(hour);
    //this.hours = this.addZero(hour);
    this.hours = (hour + 0).toString();
    this.minutes = this.addZero(time.getMinutes());
    this.seconds = this.addZero(time.getSeconds());
    this.ampm = ampm;
  }

  private updateTime() {
    setInterval(() => {
      this.setCurrentTime();
    }, 1000);
  }

  private addZero(num: number) {
    return num < 10 ? `0${num}` : num.toString();
  }

  private addNothing(num:number){
    return num < 10 ? `${num}` : num.toString();
  }


}
