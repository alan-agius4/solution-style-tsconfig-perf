import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib81Component } from './lib81.component';

describe('Lib81Component', () => {
  let component: Lib81Component;
  let fixture: ComponentFixture<Lib81Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib81Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib81Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
