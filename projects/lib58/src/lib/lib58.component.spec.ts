import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib58Component } from './lib58.component';

describe('Lib58Component', () => {
  let component: Lib58Component;
  let fixture: ComponentFixture<Lib58Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib58Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib58Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
