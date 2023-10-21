import { TestBed } from '@angular/core/testing';

import { PkCardsService } from './pk-cards.service';

describe('PkCardsService', () => {
  let service: PkCardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PkCardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
