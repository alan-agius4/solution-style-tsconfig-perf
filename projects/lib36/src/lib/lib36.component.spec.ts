import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib36Component } from './lib36.component';

describe('Lib36Component', () => {
  let component: Lib36Component;
  let fixture: ComponentFixture<Lib36Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib36Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
