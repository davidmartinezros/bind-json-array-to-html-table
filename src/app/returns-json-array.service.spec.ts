/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ReturnsJsonArrayService } from './returns-json-array.service';

describe('Service: ReturnsJsonArray', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReturnsJsonArrayService]
    });
  });

  it('should ...', inject([ReturnsJsonArrayService], (service: ReturnsJsonArrayService) => {
    expect(service).toBeTruthy();
  }));
});
