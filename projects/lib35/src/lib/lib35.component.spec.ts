import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib35Component } from './lib35.component';

describe('Lib35Component', () => {
  let component: Lib35Component;
  let fixture: ComponentFixture<Lib35Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib35Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
