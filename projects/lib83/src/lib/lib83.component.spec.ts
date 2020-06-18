import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib83Component } from './lib83.component';

describe('Lib83Component', () => {
  let component: Lib83Component;
  let fixture: ComponentFixture<Lib83Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib83Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib83Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
