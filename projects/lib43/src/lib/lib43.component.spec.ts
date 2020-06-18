import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib43Component } from './lib43.component';

describe('Lib43Component', () => {
  let component: Lib43Component;
  let fixture: ComponentFixture<Lib43Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib43Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
