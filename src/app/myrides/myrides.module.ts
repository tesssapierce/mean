import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddNewRideComponent } from '../add-new-ride/add-new-ride.component'
import { MyridesComponent } from './myrides.component'
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';


@NgModule({
  declarations: [ AppComponent, AddNewRideComponent ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class MyRidesModule { }
