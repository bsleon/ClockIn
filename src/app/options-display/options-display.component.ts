import { Component, OnInit } from '@angular/core';
import { CalculateTime } from '../calculateTime';
import { timeout } from 'q';

@Component({
  selector: 'app-options-display',
  templateUrl: './options-display.component.html',
  styleUrls: ['./options-display.component.scss']
})
export class OptionsDisplayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
