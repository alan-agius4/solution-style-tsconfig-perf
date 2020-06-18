import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib50Component } from './lib50.component';

describe('Lib50Component', () => {
  let component: Lib50Component;
  let fixture: ComponentFixture<Lib50Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib50Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib50Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
