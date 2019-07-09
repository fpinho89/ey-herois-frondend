import { TestBed, inject } from '@angular/core/testing';

import { PoderService } from './poder.service';

describe('PoderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PoderService]
    });
  });

  it('should be created', inject([PoderService], (service: PoderService) => {
    expect(service).toBeTruthy();
  }));
});
