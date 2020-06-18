import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib73Component } from './lib73.component';

describe('Lib73Component', () => {
  let component: Lib73Component;
  let fixture: ComponentFixture<Lib73Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib73Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib73Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
