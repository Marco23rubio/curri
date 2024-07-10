import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TranslationService } from '../services/translation.service';
import { LenguajeService } from '../services/lenguaje.service';

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
    private translationService: TranslationService,
    private lenguajeService: LenguajeService
  ) {}

  idioma:string;
  loading = true;
  imagesLoaded: number = 0;

  ngOnInit() {
    const savedLanguage = localStorage.getItem('language');

    if (savedLanguage) {
      this.idioma = savedLanguage;
    } else {
      this.idioma = this.lenguajeService.getLanguage();
    }
    this.changeLanguage(this.idioma);
    this.preloadImages();
  }

  preloadImages() {
    this.items.forEach((item) => {
      const img = new Image();
      img.onload = () => {
        this.imagesLoaded++;
        if (this.imagesLoaded === this.items.length) {
          this.loading = false;
        }
      };
      img.src = item.imagen;
    });
  }

  changeLanguage(language) {
    this.translationService.changeLanguage(language);
    localStorage.setItem('language', language);
  }
  items = [
    {
      descripcion: 'El código de la página web que estás viendo, desarrollado con Angular y TailwindCSS, enfocado en un buen diseño y una buena experiencia de usuario.',
      descripcioningles: 'The code of the website you are viewing, developed with Angular and TailwindCSS, focused on good design and a good user experience.',
      titulo: 'Currículum Vitae',
      tituloingles: 'Curriculum Vitae',
      imagen: 'https://res.cloudinary.com/dvzucfpbk/image/upload/v1717012148/curri1_aauw3o.jpg',
      link: 'https://github.com/Marco23rubio/curri'
    },
    {
      descripcion: 'Proyecto en Python para obtener el punto óptimo de los paneles solares para extraer la mayor cantidad de energía a través de cálculos matemáticos y físicos.',
      descripcioningles: 'Python project to obtain the optimal point of solar panels to extract the most energy through mathematical and physical calculations.',
      titulo: 'Paneles solares',
      tituloingles: 'Solar panels',
      md: 'col-span-2',
      imagen: 'https://res.cloudinary.com/dvzucfpbk/image/upload/v1717012154/paneles4_cnzedo.jpg',
      link: 'https://github.com/Marco23rubio/Solares'
    },
    {
      descripcion: 'Ejercicios enfocados en el análisis de datos con Python, utilizando librerías como Pandas, Numpy, Matplotlib, Seaborn, Scikit-learn, etc.',
      descripcioningles: 'Exercises focused on data analysis with Python, using libraries such as Pandas, Numpy, Matplotlib, Seaborn, Scikit-learn, etc.',
      titulo: 'Google Colab y Jupyter Notebooks',
      tituloingles: 'Google Colab and Jupyter Notebooks',
      md: 'col-span-2',
      imagen: 'https://res.cloudinary.com/dvzucfpbk/image/upload/v1717012151/jupyter2_swytgs.png',
      link: 'https://github.com/Marco23rubio/JupyterNotebooks'
    },
    {
      descripcion: 'Resolución de diferentes problemas con Python para la plataforma HackerRank, enfocados en la lógica de programación.',
      titulo: 'HackerRank',
      tituloingles: 'HackerRank',
      imagen: 'https://res.cloudinary.com/dvzucfpbk/image/upload/v1717012150/hr4_yzudjs.png',
      link: 'https://github.com/Marco23rubio/HackerRank'
    },
    {
      descripcion: 'Repositorio enfocado en el transcurso de aprendizaje en Python con diferentes dificultades para mejorar el entendimiento del lenguaje.',
      descripcioningles: 'Repository focused on the learning process in Python with different difficulties to improve understanding of the language.',
      titulo: 'Aprendizaje de Python',
      tituloingles: 'Python learning',
      imagen: 'https://res.cloudinary.com/dvzucfpbk/image/upload/v1717012156/py_ybmsas.webp',
      link: 'https://github.com/Marco23rubio/Python'
    },
    {
      descripcion: 'Aquí se encuentran mis inicios, enfocados principalmente en la lógica basada en diagramas de flujo y principios básicos de programación.',
      descripcioningles: 'Here are my beginnings, focused mainly on logic based on flowcharts and basic programming principles.',
      titulo: 'Fundamentos de programación',
      tituloingles: 'Programming fundamentals',
      md: 'col-span-2',
      imagen: 'https://res.cloudinary.com/dvzucfpbk/image/upload/v1717012155/prog3_uky7qr.jpg',
      link: 'https://github.com/Marco23rubio/fundamentos-de-programacion'
    }
  ];

  enviarAlMenu() {
    this.router.navigate(['/menu']);
  }
  
}
