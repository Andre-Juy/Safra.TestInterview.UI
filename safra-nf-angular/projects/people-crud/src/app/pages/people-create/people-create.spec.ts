import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleCreate } from './people-create';

describe('PeopleCreate', () => {
  let component: PeopleCreate;
  let fixture: ComponentFixture<PeopleCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeopleCreate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeopleCreate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
