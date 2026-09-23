import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  imports: [RouterLink]
})
export class SideBarComponent implements OnInit {
  dataMenu = [
    { title: 'Inicio', icon: 'home.png', route: '/home' },
    { title: 'Sesiones', icon: 'sessions.png', route: '/sessions' },
    { title: 'Catálogo', icon: 'catalog.png', route: '/catalog' },
    { title: 'Reportes', icon: 'reports.png', route: '/reports' },
    { title: 'Personas', icon: 'people.png', route: '/people' },
    { title: 'Administración', icon: 'administration.png', route: '/administration' }
  ]
  constructor() { }

  ngOnInit() {
  }

}
