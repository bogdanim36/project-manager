import {Component, forwardRef, Inject, OnInit} from '@angular/core';
import {ProjectsIndexComponent} from '@app/module-pm/pages/projects/index/projects-index.component';

@Component({
  selector: 'app-projects-mobile-list',
  templateUrl: './projects-mobile-list.component.html',
  styleUrls: ['./projects-mobile-list.component.scss']
})
export class ProjectsMobileListComponent implements OnInit {

  constructor(@Inject(forwardRef(() => ProjectsIndexComponent)) public parent: ProjectsIndexComponent) { }

  ngOnInit() {
  }

}
