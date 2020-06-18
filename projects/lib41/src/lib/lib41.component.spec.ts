import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib41Component } from './lib41.component';

describe('Lib41Component', () => {
  let component: Lib41Component;
  let fixture: ComponentFixture<Lib41Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib41Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
