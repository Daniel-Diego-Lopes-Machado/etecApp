import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformaticaPage } from './informatica.page';

describe('InformaticaPage', () => {
  let component: InformaticaPage;
  let fixture: ComponentFixture<InformaticaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformaticaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformaticaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
