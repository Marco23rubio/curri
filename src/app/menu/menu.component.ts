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
      titulo: 'Experiencia laboral',
      imagen: 'assets/training.png',
      alt: 'Experiencia laboral',
      link: 'experiencia',
      hover:'hover:border-green-500/10 hover:shadow-green-500/10'
    },
    {
      titulo: 'Educación',
      imagen: 'assets/reading.png',
      alt: 'Educación',
      link: 'educacion',
      hover:'hover:border-yellow-500/10 hover:shadow-yellow-500/10'
    },
    {
      titulo: 'Cursos y certificaciones',
      imagen: 'assets/certificate.png',
      alt: 'Cursos y certificaciones',
      link: 'cursos',
      hover:'hover:border-pink-500/10 hover:shadow-pink-500/10'
    },
    {
      titulo: 'Proyectos personales',
      imagen: 'assets/web-programming.png',
      alt: 'Proyectos personales',
      link: 'proyectos',
      hover:'hover:border-red-500/10 hover:shadow-red-500/10'
    },
    {
      titulo: 'Acerca de mí',
      imagen: 'assets/man.png',
      alt:'Acerca de mí',
      link: 'sobremi',
      hover:'hover:border-blue-500/10 hover:shadow-blue-500/10'
    },
    {
      titulo: 'Contacto',
      imagen: 'assets/mobile.png',
      alt: 'Contacto',
      link: 'contacto',
      hover:'hover:border-indigo-500/10 hover:shadow-indigo-500/10'
    }
  ]

  ngOnInit() {
  }

  descargarCV() {
    console.log('Descargando CV');
  }

}
