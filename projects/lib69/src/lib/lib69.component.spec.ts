import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib69Component } from './lib69.component';

describe('Lib69Component', () => {
  let component: Lib69Component;
  let fixture: ComponentFixture<Lib69Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib69Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib69Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
