import { TestBed } from '@angular/core/testing';

import { MailServiceImpl } from './mail-service-impl';

describe('MailServiceImpl', () => {
  let service: MailServiceImpl;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MailServiceImpl);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
