import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib47Component } from './lib47.component';

describe('Lib47Component', () => {
  let component: Lib47Component;
  let fixture: ComponentFixture<Lib47Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib47Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
