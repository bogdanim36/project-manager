import { async, TestBed } from '@angular/core/testing';
import { UsersIndexComponent } from './users-index.component';
describe('ProjectsIndexComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [UsersIndexComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(UsersIndexComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=projects-index.component.spec.js.mapmap