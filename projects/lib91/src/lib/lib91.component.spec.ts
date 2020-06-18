import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib91Component } from './lib91.component';

describe('Lib91Component', () => {
  let component: Lib91Component;
  let fixture: ComponentFixture<Lib91Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib91Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib91Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
