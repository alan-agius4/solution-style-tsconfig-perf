import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib19Component } from './lib19.component';

describe('Lib19Component', () => {
  let component: Lib19Component;
  let fixture: ComponentFixture<Lib19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
