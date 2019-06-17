import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { N2Page } from './n2.page';

describe('N2Page', () => {
  let component: N2Page;
  let fixture: ComponentFixture<N2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ N2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(N2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
