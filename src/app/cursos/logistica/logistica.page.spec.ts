import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticaPage } from './logistica.page';

describe('LogisticaPage', () => {
  let component: LogisticaPage;
  let fixture: ComponentFixture<LogisticaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogisticaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogisticaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
