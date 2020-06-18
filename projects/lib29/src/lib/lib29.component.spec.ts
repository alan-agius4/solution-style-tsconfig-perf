import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib29Component } from './lib29.component';

describe('Lib29Component', () => {
  let component: Lib29Component;
  let fixture: ComponentFixture<Lib29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib29Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
