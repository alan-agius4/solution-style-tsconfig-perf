import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib88Component } from './lib88.component';

describe('Lib88Component', () => {
  let component: Lib88Component;
  let fixture: ComponentFixture<Lib88Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib88Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib88Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
