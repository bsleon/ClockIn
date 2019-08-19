import { Component, OnInit } from '@angular/core';
import {CalculateTime} from '../calculateTime';

@Component({
  selector: 'app-digital-clock',
  templateUrl: './digitalClock.component.html',
  styleUrls: ['./digitalClock.component.css']
})
export class DigitalClockComponent implements OnInit {
  hours: string;
  minutes: string;
  seconds: string;
  ampm: string;
  private timerId = null;

  ngOnInit() {
    CalculateTime.updateTime();
    this.timerId = this.updateTime();
  }

  ngOnDestroy() {
    clearInterval(this.timerId);
  }

  private setCurrentTime() {
    this.hours = CalculateTime.hours;
    this.minutes = CalculateTime.minutes;
    this.seconds = CalculateTime.seconds;
    this.ampm = CalculateTime.ampm;

  }

  private updateTime() {
    setInterval(() => {
      this.setCurrentTime();
    }, 1000);
  }

}
