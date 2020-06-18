import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib66Component } from './lib66.component';

describe('Lib66Component', () => {
  let component: Lib66Component;
  let fixture: ComponentFixture<Lib66Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib66Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib66Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
