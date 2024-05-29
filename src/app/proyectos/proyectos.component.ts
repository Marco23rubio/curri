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
      descripcion: 'El código de la página web que estás viendo, desarrollado con Angular y TailwindCSS, enfocado en un buen diseño y una buena experiencia de usuario.',
      titulo: 'Currículum Vitae',
      imagen: 'https://res.cloudinary.com/dvzucfpbk/image/upload/v1717012148/curri1_aauw3o.jpg',
      link: 'https://github.com/Marco23rubio/curri'
    },
    {
      descripcion: 'Proyecto en Python para obtener el punto óptimo de los paneles solares para extraer la mayor cantidad de energía a través de cálculos matemáticos y físicos.',
      titulo: 'Paneles solares',
      md: 'col-span-2',
      imagen: 'https://res.cloudinary.com/dvzucfpbk/image/upload/v1717012154/paneles4_cnzedo.jpg',
      link: 'https://github.com/Marco23rubio/Solares'
    },
    {
      descripcion: 'Ejercicios enfocados en el análisis de datos con Python, utilizando librerías como Pandas, Numpy, Matplotlib, Seaborn, Scikit-learn, etc.',
      titulo: 'Google Colab y Jupyter Notebooks',
      md: 'col-span-2',
      imagen: 'https://res.cloudinary.com/dvzucfpbk/image/upload/v1717012151/jupyter2_swytgs.png',
      link: 'https://github.com/Marco23rubio/JupyterNotebooks'
    },
    {
      descripcion: 'Resolución de diferentes problemas con Python para la plataforma HackerRank, enfocados en la lógica de programación.',
      titulo: 'HackerRank',
      imagen: 'https://res.cloudinary.com/dvzucfpbk/image/upload/v1717012150/hr4_yzudjs.png',
      link: 'https://github.com/Marco23rubio/HackerRank'
    },
    {
      descripcion: 'Repositorio enfocado en el transcurso de aprendizaje en Python con diferentes dificultades para mejorar el entendimiento del lenguaje.',
      titulo: 'Aprendizaje de Python',
      imagen: 'https://res.cloudinary.com/dvzucfpbk/image/upload/v1717012156/py_ybmsas.webp',
      link: 'https://github.com/Marco23rubio/Python'
    },
    {
      descripcion: 'Aquí se encuentran mis inicios, enfocados principalmente en la lógica basada en diagramas de flujo y principios básicos de programación.',
      titulo: 'Fundamentos de programación',
      md: 'col-span-2',
      imagen: 'https://res.cloudinary.com/dvzucfpbk/image/upload/v1717012155/prog3_uky7qr.jpg',
      link: 'https://github.com/Marco23rubio/fundamentos-de-programacion'
    }
  ];

  enviarAlMenu() {
    this.router.navigate(['/menu']);
  }
  
}
