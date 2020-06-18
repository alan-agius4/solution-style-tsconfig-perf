import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib75Component } from './lib75.component';

describe('Lib75Component', () => {
  let component: Lib75Component;
  let fixture: ComponentFixture<Lib75Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib75Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib75Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
