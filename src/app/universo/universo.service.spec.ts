import { TestBed, inject } from '@angular/core/testing';

import { UniversoService } from './universo.service';

describe('UniversoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UniversoService]
    });
  });

  it('should be created', inject([UniversoService], (service: UniversoService) => {
    expect(service).toBeTruthy();
  }));
});
