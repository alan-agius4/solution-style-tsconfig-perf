import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib85Component } from './lib85.component';

describe('Lib85Component', () => {
  let component: Lib85Component;
  let fixture: ComponentFixture<Lib85Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib85Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib85Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
