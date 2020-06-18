import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib64Component } from './lib64.component';

describe('Lib64Component', () => {
  let component: Lib64Component;
  let fixture: ComponentFixture<Lib64Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib64Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib64Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
