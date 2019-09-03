import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock-table',
  templateUrl: './clock-table.component.html',
  styleUrls: ['./clock-table.component.scss']
})
export class ClockTableComponent implements OnInit {

  columns: string[];
  rows: any[];

  constructor() { }

  ngOnInit() {
    this.columns = ["first", "second", "third"];
    this.rows = [
      {
        first: 'firstdata',
        second: 'seconddata',
        third: 'thirddata'
      },
      {
        first: 'fourthdata',
        second: 'fifthdata',
        third: 'sixthdata'
      }
    ];

  }

  addColumn(){
    this.columns.push("anotherCol");
    this.rows.push({first: 'test', second: 'test', third: 'test'});
  }

}
