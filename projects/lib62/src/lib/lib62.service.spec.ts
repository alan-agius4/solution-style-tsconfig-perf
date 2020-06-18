import { TestBed } from '@angular/core/testing';

import { Lib62Service } from './lib62.service';

describe('Lib62Service', () => {
  let service: Lib62Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib62Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
