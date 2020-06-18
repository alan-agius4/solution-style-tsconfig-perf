import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib18Component } from './lib18.component';

describe('Lib18Component', () => {
  let component: Lib18Component;
  let fixture: ComponentFixture<Lib18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
