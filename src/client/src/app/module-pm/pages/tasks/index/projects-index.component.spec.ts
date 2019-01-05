import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksIndexComponent } from './tasks-index.component';

describe('ProjectsIndexComponent', () => {
  let component: TasksIndexComponent;
  let fixture: ComponentFixture<TasksIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
