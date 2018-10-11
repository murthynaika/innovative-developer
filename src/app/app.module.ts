import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DatePickerModule } from '@progress/kendo-angular-dateinputs';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DatePickerModule
  ],
  providers: [],
  exports: [DatePickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
