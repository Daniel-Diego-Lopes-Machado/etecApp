import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretariadoPage } from './secretariado.page';

describe('SecretariadoPage', () => {
  let component: SecretariadoPage;
  let fixture: ComponentFixture<SecretariadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecretariadoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecretariadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
