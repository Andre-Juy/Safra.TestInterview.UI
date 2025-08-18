import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleViewList } from './people-view-list';

describe('PeopleViewList', () => {
  let component: PeopleViewList;
  let fixture: ComponentFixture<PeopleViewList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeopleViewList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeopleViewList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
