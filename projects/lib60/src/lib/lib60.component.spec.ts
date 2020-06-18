import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib60Component } from './lib60.component';

describe('Lib60Component', () => {
  let component: Lib60Component;
  let fixture: ComponentFixture<Lib60Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib60Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib60Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
