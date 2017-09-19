import { Injectable } from '@angular/core';

@Injectable()
export class ActivityImportService {
  getLaps(){
    return ['lap1', 'lap2', 'lap3']
  }
  constructor() { }

}
