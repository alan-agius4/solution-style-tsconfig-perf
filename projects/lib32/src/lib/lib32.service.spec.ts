import { TestBed } from '@angular/core/testing';

import { Lib32Service } from './lib32.service';

describe('Lib32Service', () => {
  let service: Lib32Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib32Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
