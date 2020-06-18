import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib24Component } from './lib24.component';

describe('Lib24Component', () => {
  let component: Lib24Component;
  let fixture: ComponentFixture<Lib24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
