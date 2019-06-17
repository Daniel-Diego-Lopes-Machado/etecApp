import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreadoprofessorPage } from './areadoprofessor.page';

describe('AreadoprofessorPage', () => {
  let component: AreadoprofessorPage;
  let fixture: ComponentFixture<AreadoprofessorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreadoprofessorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreadoprofessorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
