import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib53Component } from './lib53.component';

describe('Lib53Component', () => {
  let component: Lib53Component;
  let fixture: ComponentFixture<Lib53Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib53Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib53Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
