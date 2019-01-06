import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {EntityTableListComponent} from './entity-table-list.component';


describe('EntityTableListComponent', () => {
  let component: EntityTableListComponent;
  let fixture: ComponentFixture<EntityTableListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityTableListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityTableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
