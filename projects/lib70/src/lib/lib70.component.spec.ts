import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib70Component } from './lib70.component';

describe('Lib70Component', () => {
  let component: Lib70Component;
  let fixture: ComponentFixture<Lib70Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib70Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib70Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
