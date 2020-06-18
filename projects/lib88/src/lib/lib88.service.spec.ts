import { TestBed } from '@angular/core/testing';

import { Lib88Service } from './lib88.service';

describe('Lib88Service', () => {
  let service: Lib88Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib88Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
