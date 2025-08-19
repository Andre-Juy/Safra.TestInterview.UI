import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleEdit } from './people-edit';

describe('PeopleEdit', () => {
  let component: PeopleEdit;
  let fixture: ComponentFixture<PeopleEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeopleEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeopleEdit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
