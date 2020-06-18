import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib62Component } from './lib62.component';

describe('Lib62Component', () => {
  let component: Lib62Component;
  let fixture: ComponentFixture<Lib62Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib62Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib62Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
