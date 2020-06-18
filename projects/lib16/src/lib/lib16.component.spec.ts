import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib16Component } from './lib16.component';

describe('Lib16Component', () => {
  let component: Lib16Component;
  let fixture: ComponentFixture<Lib16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
