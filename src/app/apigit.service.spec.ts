import { TestBed, inject } from '@angular/core/testing';

import { ApigitService } from './apigit.service';

describe('ApigitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApigitService]
    });
  });

  it('should be created', inject([ApigitService], (service: ApigitService) => {
    expect(service).toBeTruthy();
  }));
});
