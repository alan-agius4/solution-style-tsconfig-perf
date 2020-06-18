import { TestBed } from '@angular/core/testing';

import { Lib65Service } from './lib65.service';

describe('Lib65Service', () => {
  let service: Lib65Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib65Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
