import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib12Component } from './lib12.component';

describe('Lib12Component', () => {
  let component: Lib12Component;
  let fixture: ComponentFixture<Lib12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
