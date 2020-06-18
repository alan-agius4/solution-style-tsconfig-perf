import { TestBed } from '@angular/core/testing';

import { Lib6Service } from './lib6.service';

describe('Lib6Service', () => {
  let service: Lib6Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib6Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
