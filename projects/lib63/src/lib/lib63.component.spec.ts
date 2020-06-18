import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib63Component } from './lib63.component';

describe('Lib63Component', () => {
  let component: Lib63Component;
  let fixture: ComponentFixture<Lib63Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib63Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib63Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
