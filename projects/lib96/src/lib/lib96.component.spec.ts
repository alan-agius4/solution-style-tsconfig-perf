import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib96Component } from './lib96.component';

describe('Lib96Component', () => {
  let component: Lib96Component;
  let fixture: ComponentFixture<Lib96Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib96Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib96Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
