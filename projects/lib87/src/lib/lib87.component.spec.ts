import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib87Component } from './lib87.component';

describe('Lib87Component', () => {
  let component: Lib87Component;
  let fixture: ComponentFixture<Lib87Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib87Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib87Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
