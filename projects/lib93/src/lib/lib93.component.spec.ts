import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib93Component } from './lib93.component';

describe('Lib93Component', () => {
  let component: Lib93Component;
  let fixture: ComponentFixture<Lib93Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib93Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib93Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
