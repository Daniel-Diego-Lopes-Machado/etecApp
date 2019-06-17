import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { N3Page } from './n3.page';

describe('N3Page', () => {
  let component: N3Page;
  let fixture: ComponentFixture<N3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ N3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(N3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
