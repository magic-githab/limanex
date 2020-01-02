import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContactsFilterComponent } from './main-contacts-filter.component';

describe('MainContactsFilterComponent', () => {
  let component: MainContactsFilterComponent;
  let fixture: ComponentFixture<MainContactsFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainContactsFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainContactsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
