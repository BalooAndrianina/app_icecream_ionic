import { TestBed } from '@angular/core/testing';

import { StockRepositoryDummyImpl } from './stock-repository-dummy-impl';

describe('StockRepositoryDummyImpl', () => {
  let service: StockRepositoryDummyImpl;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockRepositoryDummyImpl);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
