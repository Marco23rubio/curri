import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  constructor(
  ) {}

  items = [
    {
      title: 'Experiencia laboral',
      image: 'assets/training.png',
      alt: 'Experiencia laboral',
      link: 'experiencia',
      color: 'green'
    },
    {
      title: 'Educación',
      image: 'assets/reading.png',
      alt: 'Educación',
      link: 'educacion',
      color: 'yellow'
    },
    {
      title: 'Cursos y certificaciones',
      image: 'assets/certificate.png',
      alt: 'Cursos y certificaciones',
      link: 'cursos',
      color: 'pink'
    },
    {
      title: 'Proyectos personales',
      image: 'assets/web-programming.png',
      alt: 'Proyectos personales',
      link: 'proyectos',
      color: 'red'
    },
    {
      title: 'Acerca de mí',
      image: 'assets/man.png',
      alt:'Acerca de mí',
      link: 'sobremi',
      color: 'blue'
    },
    {
      title: 'Contacto',
      image: 'assets/smartphone.png',
      alt: 'Contacto',
      link: 'contacto',
      color: 'indigo'
    }
  ]

  ngOnInit() {
  }

}
