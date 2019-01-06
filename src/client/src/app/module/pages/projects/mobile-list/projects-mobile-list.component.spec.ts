import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsMobileListComponent } from './projects-mobile-list.component';

describe('ProjectsMobileListComponent', () => {
  let component: ProjectsMobileListComponent;
  let fixture: ComponentFixture<ProjectsMobileListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsMobileListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsMobileListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
