import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib26Component } from './lib26.component';

describe('Lib26Component', () => {
  let component: Lib26Component;
  let fixture: ComponentFixture<Lib26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib26Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
