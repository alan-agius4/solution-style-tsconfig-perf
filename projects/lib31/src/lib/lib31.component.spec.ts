import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib31Component } from './lib31.component';

describe('Lib31Component', () => {
  let component: Lib31Component;
  let fixture: ComponentFixture<Lib31Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib31Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
