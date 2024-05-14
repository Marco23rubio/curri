import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent {


  constructor(
    private router: Router,
  ) {}

  items = [
    {
      descripcion: 'Texto prueba chiquito',
      titulo: 'Curriculum Vitae',
      imagen: 'assets/curri1.jpg',
      link: 'https://github.com/Marco23rubio/Cursos'
    },
    {
      descripcion: 'Texto prueba',
      titulo: 'Paneles solares',
      md :'col-span-2',
      imagen: 'assets/paneles4.jpeg',
      link: 'https://github.com/Marco23rubio/Cursos'
    },
    {
      descripcion: 'Texto prueba',
      titulo: 'Google Coolab y Jupyter Notebooks',
      md :'col-span-2',
      imagen: 'assets/jupyter2.png',
      link: 'https://github.com/Marco23rubio/Cursos'
    },
    {
      descripcion: 'Texto prueba chiquito',
      titulo: 'HackerRank',
      imagen: 'assets/hr2.png',
      link: 'https://github.com/Marco23rubio/Cursos'
    },
    {
      descripcion: 'Texto prueba chiquito',
      titulo: 'Aprendizaje de python',
      imagen: 'assets/py.webp',
      link: 'https://github.com/Marco23rubio/Cursos'
    },
    {
      descripcion: 'Texto prueba',
      titulo: 'Fundamentos de programación',
      md :'col-span-2',
      imagen: 'assets/prog3.jpg',
      link: 'https://github.com/Marco23rubio/Cursos'
    },
  ]

  enviarAlMenu() {
    this.router.navigate(['/menu']);
  }
  
}
