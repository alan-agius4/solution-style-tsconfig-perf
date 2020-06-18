import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib90Component } from './lib90.component';

describe('Lib90Component', () => {
  let component: Lib90Component;
  let fixture: ComponentFixture<Lib90Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib90Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib90Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
