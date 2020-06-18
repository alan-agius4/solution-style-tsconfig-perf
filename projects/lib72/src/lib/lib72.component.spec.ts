import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib72Component } from './lib72.component';

describe('Lib72Component', () => {
  let component: Lib72Component;
  let fixture: ComponentFixture<Lib72Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib72Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib72Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
