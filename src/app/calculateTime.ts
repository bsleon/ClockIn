import { OnInit } from '@angular/core';

export class CalculateTime{
    static originalHours: number;
    static hours: string;
    static minutes: string;
    static seconds: string;
    static ampm: string;

    public static setCurrentTime() {
      const time = new Date(Date.now());
      this.originalHours = time.getHours();
      var hour = this.originalHours;
      var ampm = hour >= 12 ? "PM" : "AM";
      hour = hour % 12;
      hour = hour ? hour : 12;

      this.hours = (hour + 0).toString();
      this.minutes = this.addZero(time.getMinutes());
      this.seconds = this.addZero(time.getSeconds());
      this.ampm = ampm;
    }
  
    public static updateTime() {
      setInterval(() => {
        this.setCurrentTime();
      }, 1000);
    }
  
    public static addZero(num: number) {
      return num < 10 ? `0${num}` : num.toString();
    }

  }
  