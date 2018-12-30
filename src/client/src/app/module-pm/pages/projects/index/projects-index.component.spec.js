import { async, TestBed } from '@angular/core/testing';
import { ProjectsIndexComponent } from './projects-index.component';
describe('ProjectsIndexComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ProjectsIndexComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ProjectsIndexComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=projects-index.component.spec.js.mapmap