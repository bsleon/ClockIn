import { Component, OnInit } from '@angular/core';
import { CalculateTime } from '../calculateTime';

@Component({
  selector: 'app-analog-clock',
  templateUrl: './analog-clock.component.html',
  styleUrls: ['./analog-clock.component.scss']
})
export class AnalogClockComponent implements OnInit {
  canvas:any;
  ctx:any;
  radius:number;
  offset:number;
  radiusOffset:number
  analogIsOn:boolean = true;

  ngOnInit() {
    this.offset = 5; //change to increase/decrease size of clock
    this.canvas = document.getElementById("canvas"); 
    this.ctx = this.canvas.getContext("2d");
    this.radius = (this.canvas.height/2);
    this.radiusOffset = this.radius - this.offset;
    this.ctx.translate(this.radius, this.radius);
    this.updateClock();
  }

  private updateClock() {
    setInterval(() => {
      this.drawClock();
    }, 1000);
  }

  private drawClock() {
    this.drawFace(this.ctx, this.radiusOffset);
    this.drawNumbers(this.ctx, this.radiusOffset);
    this.drawTime(this.ctx, this.radiusOffset);
  }
  
  private drawFace(ctx, radius){
    var grad;
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2*Math.PI);
    ctx.fillStyle = '#F7DA9A'; //clock face
    ctx.fill();
    grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
    grad.addColorStop(0, '#13A48E'); //inner rim gradient
    grad.addColorStop(0.5, 'white'); //middle rim gradient
    grad.addColorStop(1, '#13A48E'); //outer rim gradient
    ctx.strokeStyle = grad;
    ctx.lineWidth = radius*0.1;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
    ctx.fillStyle = '#C8102E'; //numbers and center dot
    ctx.fill();
  }
  
   private drawNumbers(ctx, radius) {
    var ang;
    var num;
    ctx.font = "bold " + radius*0.15 + "px arial";
    ctx.textBaseline="middle";
    ctx.textAlign="center";
    for(num = 1; num < 13; num++){
      ang = num * Math.PI / 6;
      ctx.rotate(ang);
      ctx.translate(0, -radius*0.85);
      ctx.rotate(-ang);
      ctx.fillText(num.toString(), 0, 0);
      ctx.rotate(ang);
      ctx.translate(0, radius*0.85);
      ctx.rotate(-ang);
    }
  }
  
   private drawTime(ctx, radius){
      var now = new Date();
      var hour = parseInt(CalculateTime.currentHours);
      var minute = parseInt(CalculateTime.currentMinutes);
      var second = parseInt(CalculateTime.currentSeconds);
      //hour
      //hour=hour%12;
      hour=(hour*Math.PI/6)+
      (minute*Math.PI/(6*60))+
      (second*Math.PI/(360*60));
      this.drawHand(ctx, hour, radius*0.5, radius*0.07);
      //minute
      minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
      this.drawHand(ctx, minute, radius*0.8, radius*0.07);
      // second
      second=(second*Math.PI/30);
      this.drawHand(ctx, second, radius*0.9, radius*0.02);
  }
  
   private drawHand(ctx, pos, length, width) {
      ctx.beginPath();
      ctx.lineWidth = width;
      ctx.lineCap = "round";
      ctx.moveTo(0,0);
      ctx.rotate(pos);
      ctx.lineTo(0, -length);
      ctx.stroke();
      ctx.rotate(-pos);
  }

  toggleAnalogClock(){
    this.analogIsOn = !this.analogIsOn;
  }

}
