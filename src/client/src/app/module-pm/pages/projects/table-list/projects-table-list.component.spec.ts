import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {ProjectsTableListComponent} from '@app/module-pm/pages/projects/table-list/projects-table-list.component';


describe('ProjectsTableListComponent', () => {
  let component: ProjectsTableListComponent;
  let fixture: ComponentFixture<ProjectsTableListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsTableListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsTableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
