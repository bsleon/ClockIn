import { OnInit } from '@angular/core';

export class CalculateTime{
    //static originalHours: number;
    static currentHours: string;
    static currentMinutes: string;
    static currentSeconds: string;
    static ampm: string;
    static currentTime: string;

    public static setCurrentTime() {
      const time = new Date(Date.now());
      //this.originalHours = time.getHours();
      //var hour = this.originalHours;
      var hour = time.getHours();
      var ampm = hour >= 12 ? "PM" : "AM";
      hour = hour % 12;
      hour = hour ? hour : 12;

      this.currentHours = (hour + 0).toString();
      this.currentMinutes = this.addZero(time.getMinutes());
      this.currentSeconds = this.addZero(time.getSeconds());
      this.ampm = ampm;

      this.currentTime = this.currentHours + ":" + this.currentMinutes + this.ampm;
    }

    public static formatHours(hour:number){
      const time = new Date(Date.now());
      var hour = time.getHours();
      var ampm = hour >= 12 ? "PM" : "AM";
      hour = hour % 12;
      hour = hour ? hour : 12;
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
  