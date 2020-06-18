import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib17Component } from './lib17.component';

describe('Lib17Component', () => {
  let component: Lib17Component;
  let fixture: ComponentFixture<Lib17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
