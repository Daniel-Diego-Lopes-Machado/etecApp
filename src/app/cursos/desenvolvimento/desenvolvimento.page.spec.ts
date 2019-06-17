import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesenvolvimentoPage } from './desenvolvimento.page';

describe('DesenvolvimentoPage', () => {
  let component: DesenvolvimentoPage;
  let fixture: ComponentFixture<DesenvolvimentoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesenvolvimentoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesenvolvimentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
