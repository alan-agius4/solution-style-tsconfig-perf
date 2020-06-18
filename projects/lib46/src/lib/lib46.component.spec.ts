import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib46Component } from './lib46.component';

describe('Lib46Component', () => {
  let component: Lib46Component;
  let fixture: ComponentFixture<Lib46Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib46Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
