import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ActivitySummaryComponent } from './activity-summary/activity-summary.component';
import { ActivityImportService } from './activity-import.service';
import { NavbarComponent } from './navbar/navbar.component';
import { WeekSummaryComponent } from './week-summary/week-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    ActivitySummaryComponent,
    NavbarComponent,
    WeekSummaryComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ActivityImportService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
