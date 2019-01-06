import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityMobileListComponent } from './entity-mobile-list.component';

describe('ProjectsMobileListComponent', () => {
  let component: EntityMobileListComponent;
  let fixture: ComponentFixture<EntityMobileListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityMobileListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityMobileListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
