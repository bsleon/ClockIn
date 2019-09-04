import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//Clock Stuff
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DigitalClockComponent } from './digitalClock/digitalClock.component';
import { AnalogClockComponent } from './analog-clock/analog-clock.component';
import { ClockInOutComponent } from './clock-in-out/clock-in-out.component';
import { ServeTimeService } from './serve-time.service';
import { TitleBlinkerService } from './title-blinker.service';

//Spark Stuff
import { SparkAngularModule } from "@sparkdesignsystem/spark-angular";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClockTableComponent } from './clock-table/clock-table.component';
import { OptionsDisplayComponent } from './options-display/options-display.component';

// Import ng-circle-progress
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    AppComponent,
    DigitalClockComponent,
    AnalogClockComponent,
    ClockInOutComponent,
    ClockTableComponent,
    OptionsDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SparkAngularModule,
    BrowserAnimationsModule,
    // Specify ng-circle-progress as an import
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
      //showSubtitle: false,
      subtitle: [
        "Daily Progress",
      ],
      //titleFontSize: "10"
    })
  ],
  providers: [
    ServeTimeService,
    TitleBlinkerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
