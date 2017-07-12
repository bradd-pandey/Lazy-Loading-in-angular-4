import { TestBed, inject } from '@angular/core/testing';

import { JsonPlaceHolderService } from './json-place-holder.service';

describe('JsonPlaceHolderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JsonPlaceHolderService]
    });
  });

  it('should be created', inject([JsonPlaceHolderService], (service: JsonPlaceHolderService) => {
    expect(service).toBeTruthy();
  }));
});
