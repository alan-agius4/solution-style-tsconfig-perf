import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib95Component } from './lib95.component';

describe('Lib95Component', () => {
  let component: Lib95Component;
  let fixture: ComponentFixture<Lib95Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib95Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib95Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
