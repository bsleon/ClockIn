import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { ClockTableComponent } from './clock-table/clock-table.component';
import { ClockInOutComponent } from './clock-in-out/clock-in-out.component';
import { ServeTimeService } from '../serve-time.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'clock-in-out-angular-app';
}
