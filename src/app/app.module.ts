import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//Clock Stuff
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DigitalClockComponent } from './digitalClock/digitalClock.component';
import { AnalogClockComponent } from './analog-clock/analog-clock.component';
import { ClockInOutComponent } from './clock-in-out/clock-in-out.component';

//Spark Stuff
import { SparkAngularModule } from "@sparkdesignsystem/spark-angular";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DigitalClockComponent,
    AnalogClockComponent,
    ClockInOutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SparkAngularModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
