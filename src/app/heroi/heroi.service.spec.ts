import { TestBed, inject } from '@angular/core/testing';

import { HeroiService } from './heroi.service';

describe('HeroiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroiService]
    });
  });

  it('should be created', inject([HeroiService], (service: HeroiService) => {
    expect(service).toBeTruthy();
  }));
});
