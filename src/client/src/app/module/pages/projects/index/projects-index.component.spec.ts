import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsIndexComponent } from './projects-index.component';

describe('ProjectsIndexComponent', () => {
  let component: ProjectsIndexComponent;
  let fixture: ComponentFixture<ProjectsIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
