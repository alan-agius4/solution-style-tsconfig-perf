import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib59Component } from './lib59.component';

describe('Lib59Component', () => {
  let component: Lib59Component;
  let fixture: ComponentFixture<Lib59Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib59Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib59Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
