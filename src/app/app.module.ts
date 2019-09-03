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
    BrowserAnimationsModule
  ],
  providers: [
    ServeTimeService, 
    TitleBlinkerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
