import { Component, OnInit } from '@angular/core';
import { Project } from './project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  project: Project[] = [
    new Project('Recipe Book','Angular16, Bootstrap3, TypeScript',
    'https://picsum.photos/id/292/3852/2556','https://app190812.firebaseapp.com'),
    new Project('Restaurant','Angular16, Bootstrap4, TypeScript',
    'https://picsum.photos/id/192/367/267','https://order-e2ff0.web.app/'),
    new Project('Tribute Page','HTML, CSS',
    'https://picsum.photos/id/112/4200/2800','https://codepen.io/cutepoo/full/pLzyPv'),
    new Project('Survey Form','HTML, CSS',
    'https://picsum.photos/id/304/367/267','https://codepen.io/cutepoo/full/xQMadO'),
    new Project('Coming soon..','Angular16, Bootstrap5, TypeScript',
    'https://picsum.photos/id/228/367/267','#')
  ];
  constructor() { }
  ngOnInit() {
  }
}
