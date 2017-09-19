import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ActivitySummaryComponent } from './activity-summary/activity-summary.component';

@NgModule({
  declarations: [
    AppComponent, 
    ActivitySummaryComponent
   
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
