import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib74Component } from './lib74.component';

describe('Lib74Component', () => {
  let component: Lib74Component;
  let fixture: ComponentFixture<Lib74Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib74Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib74Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
