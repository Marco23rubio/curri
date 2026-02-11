import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TranslationService } from '../services/translation.service';
import { LenguajeService } from '../services/lenguaje.service';

@Component({
  selector: 'app-educacion',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './educacion.component.html',
  styleUrl: './educacion.component.css'
})
export class EducacionComponent {

  constructor(
    private router: Router,
    private translationService: TranslationService,
    private lenguajeService: LenguajeService
  ) {}

  idioma:string;
  itemsActuales = [];

  ngOnInit() {
  const lang = this.lenguajeService.getLanguage();
  this.idioma = lang;
  this.translationService.changeLanguage(lang);
  this.actualizarItems();
    
  }

  actualizarItems() {
    this.itemsActuales = this.idioma === 'es' ? this.items : this.itemsingles;
  }

  changeLanguage(language) {
  this.lenguajeService.setLanguage(language);   
  this.translationService.changeLanguage(language);    
  this.idioma = language;
  this.actualizarItems();
  }

  items = [
    {
        'escuela': 'University of Michigan',
        'fecha': 'Diciembre 2025/Actualidad',
        'carrera': 'Redes Neuronales y Deep Learning',
        'descripcion': [
            'Formación enfocada en el desarrollo de modelos de IA y redes neuronales orientados a predicción y análisis avanzado.',
        ],
        'ruta': 'https://github.com/Marco23rubio/Cursos/tree/master/Deep%20Learning',
    },
    {
        'escuela': 'Universidad del Valle de México',
        'fecha': 'Septiembre 2023/Agosto 2025',
        'carrera': 'Maestría en Ciencia de Datos',
        'descripcion': [
            'Enfoque en modelación estadística, machine learning y construcción de pipelines analíticos para resolver problemas complejos basados en datos.',
        ],
        'ruta': 'https://github.com/Marco23rubio/Cursos/tree/master/UVM'
    },
    {
        'escuela': 'Platzi',
        'carrera': 'Fundamentos de programación y análisis de datos',
        'fecha': 'Julio 2020/Mayo 2022',
        'descripcion': [
          'Conocimientos sobre conceptos básicos de programación WEB y manejo de Bases de Datos con python',
        ],
        'ruta': 'https://github.com/Marco23rubio/Cursos/tree/master/Fundamentos%20y%20Datos'
    },
    {
        'escuela': 'Universidad Tecmilenio',
        'carrera': 'Administración Financiera',
        'fecha': 'Junio 2017/Julio 2021',
        'descripcion': [
            'Licenciatura enfocada en análisis financiero, valuación de empresas, gestión de inversiones y toma de decisiones corporativas basadas en métricas cuantitativas.',
        ],
        'ruta': 'https://github.com/Marco23rubio/Cursos/tree/master/Tecmi'
    },
    {
        'escuela': 'AMIB',
        'carrera': 'Análisis de mercados Bursátiles',
        'fecha': 'Mayo 2019/Mayo 2020',
        'descripcion': [
            'Formación en análisis de empresas bursátiles utilizando Excel, macros y herramientas cuantitativas, así como en la comprensión y operación de instrumentos financieros.',
        ],
        'ruta': 'https://github.com/Marco23rubio/Cursos/tree/master/Mercados%20Burs%C3%A1tiles'
    },
    {
        'escuela': 'Canacintra/Tec de Monterrey/Platzi',
        'carrera': 'Competencias gerenciales',
        'fecha': 'Agosto 2018/Actualidad',
        'descripcion': [
            'Formación en gestión de proyectos, liderazgo y administración de personal orientada al desarrollo de equipos y ejecución efectiva.',
        ],
        'ruta': 'https://github.com/Marco23rubio/Cursos/tree/master/Competencia%20Gerenciales'
    }
]

itemsingles = [
    {
        'escuela': 'University of Michigan',
        'fecha': 'December 2025/Present',
        'carrera': 'Neural Networks and Deep Learning',
        'descripcion': [
            'Training focused on developing AI models and neural networks oriented toward prediction and advanced analytics.',
        ],
        'ruta': 'https://github.com/Marco23rubio/Cursos/tree/master/Deep%20Learning',
    },
    {
        'escuela': 'Universidad del Valle de México',
        'fecha': 'September 2023/August 2025',
        'carrera': 'Master’s in Data Science',
        'descripcion': [
            'Specialization in statistical modeling, machine learning, and the construction of analytical pipelines to solve complex data-driven problems.',
        ],
        'ruta': 'https://github.com/Marco23rubio/Cursos/tree/master/UVM'
    },
    {
        'escuela': 'Platzi',
        'carrera': 'Foundations of Programming and Data Analysis',
        'fecha': 'July 2020/May 2022',
        'descripcion': [
            'Knowledge of basic web programming concepts and database management using Python.',
        ],
        'ruta': 'https://github.com/Marco23rubio/Cursos/tree/master/Fundamentos%20y%20Datos'
    },
    {
        'escuela': 'Universidad Tecmilenio',
        'carrera': 'Financial Administration',
        'fecha': 'June 2017/July 2021',
        'descripcion': [
            'Undergraduate program focused on financial analysis, business valuation, investment management, and data-driven corporate decision-making.',
        ],
        'ruta': 'https://github.com/Marco23rubio/Cursos/tree/master/Tecmi'
    },
    {
        'escuela': 'AMIB',
        'carrera': 'Stock Market Analysis',
        'fecha': 'May 2019/May 2020',
        'descripcion': [
            'Training in the analysis of publicly traded companies using Excel, macros, and quantitative tools, as well as the understanding and operation of financial instruments.',
        ],
        'ruta': 'https://github.com/Marco23rubio/Cursos/tree/master/Mercados%20Burs%C3%A1tiles'
    },
    {
        'escuela': 'Canacintra/Tec de Monterrey/Platzi',
        'carrera': 'Managerial Competencies',
        'fecha': 'August 2018/Present',
        'descripcion': [
            'Training in project management, leadership, and personnel administration aimed at team development and efficient execution.',
        ],
        'ruta': 'https://github.com/Marco23rubio/Cursos/tree/master/Competencia%20Gerenciales'
    }
]


  enviarAlMenu() {
    this.router.navigate(['/menu'], { queryParamsHandling: 'preserve' });
  }

  abrirCertificado(url: string) {
  if (!url) {
    return;
  }
  window.open(url, '_blank', 'noopener');
}
}
