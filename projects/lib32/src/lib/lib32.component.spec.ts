import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib32Component } from './lib32.component';

describe('Lib32Component', () => {
  let component: Lib32Component;
  let fixture: ComponentFixture<Lib32Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib32Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
