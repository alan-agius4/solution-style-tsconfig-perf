import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib39Component } from './lib39.component';

describe('Lib39Component', () => {
  let component: Lib39Component;
  let fixture: ComponentFixture<Lib39Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib39Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
