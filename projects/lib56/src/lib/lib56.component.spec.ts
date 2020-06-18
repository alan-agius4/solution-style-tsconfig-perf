import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib56Component } from './lib56.component';

describe('Lib56Component', () => {
  let component: Lib56Component;
  let fixture: ComponentFixture<Lib56Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib56Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib56Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
