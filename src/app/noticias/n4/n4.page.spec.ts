import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { N4Page } from './n4.page';

describe('N4Page', () => {
  let component: N4Page;
  let fixture: ComponentFixture<N4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ N4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(N4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
