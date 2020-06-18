import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib77Component } from './lib77.component';

describe('Lib77Component', () => {
  let component: Lib77Component;
  let fixture: ComponentFixture<Lib77Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib77Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib77Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
