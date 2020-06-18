import { TestBed } from '@angular/core/testing';

import { Lib28Service } from './lib28.service';

describe('Lib28Service', () => {
  let service: Lib28Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib28Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
