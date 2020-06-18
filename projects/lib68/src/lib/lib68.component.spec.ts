import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib68Component } from './lib68.component';

describe('Lib68Component', () => {
  let component: Lib68Component;
  let fixture: ComponentFixture<Lib68Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib68Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib68Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
