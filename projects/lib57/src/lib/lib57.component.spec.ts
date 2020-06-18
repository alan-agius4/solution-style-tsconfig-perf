import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib57Component } from './lib57.component';

describe('Lib57Component', () => {
  let component: Lib57Component;
  let fixture: ComponentFixture<Lib57Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib57Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib57Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
