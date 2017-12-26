import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolAuthorityComponent } from './school-authority.component';

describe('SchoolAuthorityComponent', () => {
  let component: SchoolAuthorityComponent;
  let fixture: ComponentFixture<SchoolAuthorityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolAuthorityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolAuthorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
