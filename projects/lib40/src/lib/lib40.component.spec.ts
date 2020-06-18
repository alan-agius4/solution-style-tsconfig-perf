import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib40Component } from './lib40.component';

describe('Lib40Component', () => {
  let component: Lib40Component;
  let fixture: ComponentFixture<Lib40Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib40Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
