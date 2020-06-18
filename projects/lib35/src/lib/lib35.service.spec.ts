import { TestBed } from '@angular/core/testing';

import { Lib35Service } from './lib35.service';

describe('Lib35Service', () => {
  let service: Lib35Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib35Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
