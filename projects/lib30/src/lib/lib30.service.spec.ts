import { TestBed } from '@angular/core/testing';

import { Lib30Service } from './lib30.service';

describe('Lib30Service', () => {
  let service: Lib30Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib30Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
