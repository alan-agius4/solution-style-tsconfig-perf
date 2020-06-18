import { TestBed } from '@angular/core/testing';

import { Lib17Service } from './lib17.service';

describe('Lib17Service', () => {
  let service: Lib17Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib17Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
