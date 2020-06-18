import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib45Component } from './lib45.component';

describe('Lib45Component', () => {
  let component: Lib45Component;
  let fixture: ComponentFixture<Lib45Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib45Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
