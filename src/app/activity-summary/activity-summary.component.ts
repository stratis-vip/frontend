import { Component, OnInit, NgModule } from '@angular/core';
import { ActivityImportService } from '../activity-import.service';

@Component({
  selector: 'app-activity-summary',
  templateUrl: './activity-summary.component.html',
  styleUrls: ['./activity-summary.component.css']
})

@NgModule({
  imports: [],
  exports: [],
  declarations: [ActivitySummaryComponent],
  providers: [],
})

export class ActivitySummaryComponent implements OnInit {
  public startTime:Date = new Date()
  private _distance:number
  private _laps:Array<string>
  constructor() { 
    let service = new ActivityImportService()
    this._laps = service.getLaps()
  }
  

  get laps (){
    return this._laps
  }

  set laps(x) {
    this._laps = x
  }
  get distance (){
    return this._distance
  }

  set distance (x) {
    x!== this._distance ? this._distance = x : this._distance 
  }

   getDistance = () => {
     this._distance = 342
     return  this._distance 
  }

  ngOnInit() {
    this._distance = 15
  }
  

}
