import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib27Component } from './lib27.component';

describe('Lib27Component', () => {
  let component: Lib27Component;
  let fixture: ComponentFixture<Lib27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib27Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
