import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib42Component } from './lib42.component';

describe('Lib42Component', () => {
  let component: Lib42Component;
  let fixture: ComponentFixture<Lib42Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib42Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
