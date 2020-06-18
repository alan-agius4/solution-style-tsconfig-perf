import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib79Component } from './lib79.component';

describe('Lib79Component', () => {
  let component: Lib79Component;
  let fixture: ComponentFixture<Lib79Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lib79Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib79Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
