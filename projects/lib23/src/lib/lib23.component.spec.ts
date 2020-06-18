import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib23Component } from './lib23.component';

describe('Lib23Component', () => {
  let component: Lib23Component;
  let fixture: ComponentFixture<Lib23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
