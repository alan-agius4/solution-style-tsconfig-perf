import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib92Component } from './lib92.component';

describe('Lib92Component', () => {
  let component: Lib92Component;
  let fixture: ComponentFixture<Lib92Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib92Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib92Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
