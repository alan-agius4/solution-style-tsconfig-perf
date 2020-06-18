import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib7Component } from './lib7.component';

describe('Lib7Component', () => {
  let component: Lib7Component;
  let fixture: ComponentFixture<Lib7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
