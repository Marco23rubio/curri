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
      descripcion: 'El código de la página web que estás viendo,desarrollado con Angular y tailwindcss, enfocado en un buen diseño y una buena experiencia de usuario.',
      titulo: 'Curriculum Vitae',
      imagen: 'assets/curri1.jpg',
      link: 'https://github.com/Marco23rubio/Cursos'
    },
    {
      descripcion: 'Proyecto en python para obtener el punto óptimo de los paneles solares para extraer la mayor cantidad de energía a través de cálculos matemáticos y físicos.',
      titulo: 'Paneles solares',
      md :'col-span-2',
      imagen: 'assets/paneles4.jpeg',
      link: 'https://github.com/Marco23rubio/Cursos'
    },
    {
      descripcion: 'Ejercicios enfocados en el análisis de datos con Python, utilizando librerías como Pandas, Numpy, Matplotlib, Seaborn, Scikit-learn, etc.',
      titulo: 'Google Coolab y Jupyter Notebooks',
      md :'col-span-2',
      imagen: 'assets/jupyter2.png',
      link: 'https://github.com/Marco23rubio/Cursos'
    },
    {
      descripcion: 'Resolución de diferentes problemas con Python para la plataforma HackerRank, enfocados en la lógica de programación.',
      titulo: 'HackerRank',
      imagen: 'assets/hr4.png',
      link: 'https://github.com/Marco23rubio/Cursos'
    },
    {
      descripcion: 'Repositorio enfocado con el transcurso de aprendizaje en python con diferentes dificultades para mejora del entendimiento del lenguaje.',
      titulo: 'Aprendizaje de python',
      imagen: 'assets/py.webp',
      link: 'https://github.com/Marco23rubio/Cursos'
    },
    {
      descripcion: 'Aqui se encuentran mis inicios , enfocado principalmente en la lógica basada en diagramas de flujo y principios básicos de programación.',
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
