import { TestBed, inject } from '@angular/core/testing';

import { ActivityImportService } from './activity-import.service';

describe('ActivityImportService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActivityImportService]
    });
  });

  it('should be created', inject([ActivityImportService], (service: ActivityImportService) => {
    expect(service).toBeTruthy();
  }));
});
