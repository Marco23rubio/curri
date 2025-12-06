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

    const lang = this.lenguajeService.getLanguage();
    this.idioma = lang;

    this.translationService.changeLanguage(lang);


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

  changeLanguage(language: 'es' | 'en') {


    this.lenguajeService.setLanguage(language);


    this.translationService.changeLanguage(language);

   
    this.idioma = language;
  }
  items = [
    {
      descripcion: 'Página web personal creada para mostrar mi trayectoria profesional de forma clara y visual. El objetivo fue ofrecer una presentación moderna y fácil de navegar, mejorando la experiencia de quien consulta mi información laboral.',
      descripcioningles: 'Personal website developed to showcase my professional career in a clear and visual way, providing a modern and easy-to-navigate presentation of my work experience.',
      titulo: 'Currículum Vitae',
      tituloingles: 'Curriculum Vitae',
      imagen: 'https://res.cloudinary.com/dvzucfpbk/image/upload/v1717012148/curri1_aauw3o.jpg',
      link: 'https://github.com/Marco23rubio/curri'
    },
    {
      descripcion: 'Proyectos donde desarrollé diferentes modelos de Inteligencia Artificial para que una computadora pudiera aprender patrones y hacer predicciones. El objetivo fue resolver problemas como clasificar información o estimar resultados a partir de datos reales.',
      descripcioningles: 'Projects where I developed different Artificial Intelligence models so that a computer could learn patterns and make predictions, solving problems such as classifying information or estimating outcomes from real data.',
      titulo: 'Machine Learning',
      tituloingles: 'Machine Learning',
      imagen: 'https://res.cloudinary.com/dvzucfpbk/image/upload/v1764831037/ia5_kclpix.jpg',
      link: 'https://github.com/Marco23rubio/IA'
    },
    {
      descripcion: 'Código en Python para analizar el valor de acciones de empresas. El objetivo fue calcular si una acción estaba cara o barata usando métricas financieras y tendencias del mercado, facilitando decisiones de inversión.',
      descripcioningles: 'Python code to analyze the value of company stocks, calculating whether a stock is overvalued or undervalued using financial metrics and market trends to aid investment decisions.',
      titulo: 'Valoración de Stocks',
      tituloingles: 'Stock Valuation',
      imagen: 'https://res.cloudinary.com/dvzucfpbk/image/upload/v1764828422/stocks_aqmgkc.webp',
      link: 'https://github.com/Marco23rubio/Stocks/blob/master/stocks.ipynb'
    },
    {
      descripcion: 'Resolución de ejercicios de programación para mejorar mi lógica y capacidad para resolver problemas. El objetivo fue fortalecer bases técnicas necesarias para el desarrollo de software y análisis de datos.',
      descripcioningles: 'Solving programming exercises to enhance my logic and problem-solving skills, strengthening the technical foundations necessary for software development and data analysis.',
      titulo: 'HackerRank',
      tituloingles: 'HackerRank',
      imagen: 'https://res.cloudinary.com/dvzucfpbk/image/upload/v1717012150/hr4_yzudjs.png',
      link: 'https://github.com/Marco23rubio/HackerRank'
    },
        {
      descripcion: 'Proyecto para calcular la posición ideal de paneles solares y así obtener la mayor cantidad de energía posible. El objetivo fue aplicar matemáticas y programación para mejorar el rendimiento energético de un sistema solar.',
      descripcioningles: 'Project to calculate the optimal position of solar panels to maximize energy capture, applying mathematics and programming to enhance the energy efficiency of a solar system.',
      titulo: 'Paneles solares',
      tituloingles: 'Solar panels',
      md: 'col-span-2',
      imagen: 'https://res.cloudinary.com/dvzucfpbk/image/upload/v1717012154/paneles4_cnzedo.jpg',
      link: 'https://github.com/Marco23rubio/SolarPanels/blob/master/solares-back'
    },
  ];

  enviarAlMenu() {
    this.router.navigate(['/menu'], { queryParamsHandling: 'preserve' });
  }
  
}
