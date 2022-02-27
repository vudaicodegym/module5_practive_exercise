import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TourComponent } from './tour/tour.component';
import { DetailTourComponent } from './detail-tour/detail-tour.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Service} from "./service/Service";

@NgModule({
  declarations: [
    AppComponent,
    TourComponent,
    DetailTourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],

  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
