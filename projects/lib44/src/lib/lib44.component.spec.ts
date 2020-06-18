import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib44Component } from './lib44.component';

describe('Lib44Component', () => {
  let component: Lib44Component;
  let fixture: ComponentFixture<Lib44Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib44Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
