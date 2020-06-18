import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib10Component } from './lib10.component';

describe('Lib10Component', () => {
  let component: Lib10Component;
  let fixture: ComponentFixture<Lib10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
