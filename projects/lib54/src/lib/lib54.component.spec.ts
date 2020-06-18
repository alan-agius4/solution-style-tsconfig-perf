import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib54Component } from './lib54.component';

describe('Lib54Component', () => {
  let component: Lib54Component;
  let fixture: ComponentFixture<Lib54Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib54Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib54Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
