import { TestBed } from '@angular/core/testing';

import { Lib50Service } from './lib50.service';

describe('Lib50Service', () => {
  let service: Lib50Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib50Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
