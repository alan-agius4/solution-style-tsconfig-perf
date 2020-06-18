import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib76Component } from './lib76.component';

describe('Lib76Component', () => {
  let component: Lib76Component;
  let fixture: ComponentFixture<Lib76Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib76Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib76Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
