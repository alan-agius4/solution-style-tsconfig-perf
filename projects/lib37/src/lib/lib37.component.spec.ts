import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib37Component } from './lib37.component';

describe('Lib37Component', () => {
  let component: Lib37Component;
  let fixture: ComponentFixture<Lib37Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib37Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
