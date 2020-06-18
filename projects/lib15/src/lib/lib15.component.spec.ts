import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib15Component } from './lib15.component';

describe('Lib15Component', () => {
  let component: Lib15Component;
  let fixture: ComponentFixture<Lib15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
