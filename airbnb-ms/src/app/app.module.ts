import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewPropertyComponent } from './new-property/new-property.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PropertyListComponent } from './property-list/property-list.component';
import { DetailComponent } from './detail/detail.component';
import { BookingComponent } from './booking/booking.component';

@NgModule({
  declarations: [
    AppComponent,
    NewPropertyComponent,
    PropertyListComponent,
    DetailComponent,
    BookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
