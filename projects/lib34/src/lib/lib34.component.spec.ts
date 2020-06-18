import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib34Component } from './lib34.component';

describe('Lib34Component', () => {
  let component: Lib34Component;
  let fixture: ComponentFixture<Lib34Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib34Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
