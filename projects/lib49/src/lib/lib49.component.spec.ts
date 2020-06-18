import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib49Component } from './lib49.component';

describe('Lib49Component', () => {
  let component: Lib49Component;
  let fixture: ComponentFixture<Lib49Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib49Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
