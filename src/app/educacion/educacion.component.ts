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
    const savedLanguage = localStorage.getItem('language');

    if (savedLanguage) {
      this.idioma = savedLanguage;
    } else {
      this.idioma = this.lenguajeService.getLanguage();
    }
    this.changeLanguage(this.idioma);
    this.actualizarItems();
    
  }

  actualizarItems() {
    this.itemsActuales = this.idioma === 'es' ? this.items : this.itemsingles;
  }

  changeLanguage(language) {
    this.translationService.changeLanguage(language);
    localStorage.setItem('language', language);
  }

  items = [
    {
        'escuela': 'UVM - ',
        'fecha': 'Septiembre 2023/Actualidad',
        'descripcion': [
            'Universidad del Valle de México',
            'Actualmente cursando la maestría en Ciencia de Datos',
            'El aprendizaje se lleva a cabo a través de la modalidad online',
            'Aprendizaje sobre matemáticas para las ciencias de datos y los diseños de experimentos',
            'Utilización de bibliotecas en Python para el análisis de datos',
        ]
    },
    {
        'escuela': 'Platzi - ',
        'fecha': 'Febrero 2022/Agosto 2023',
        'descripcion': [
            'Escuela donde empecé con mis primeros pasos en análisis de datos',
            'Conocimiento del lenguaje de programación Python',
            'Cursos sobre estadística, probabilidad y matemáticas aplicadas',
        ],
    },
    {
        'escuela': 'Universidad Tecmilenio - ',
        'fecha': 'Junio 2017/Julio 2021',
        'descripcion': [
            'Estudio Administración Financiera',
            'Obtuve las herramientas para el análisis de empresas',
            'Gracias a un profesor me introduje en el mundo de las inversiones bursátiles',
            'Aproveché la facilidad de obtener prácticas para trabajar en diferentes empresas',
            'Me gradué con un promedio de 93',
        ],
        'acordeon': [
            {
                'titulo': '¿Por qué paso 1 año entre la universidad y la preparatoria?',
                'texto': 'Antes de entrar a estudiar finanzas, asistí a otra universidad sin tener seguridad de lo que deseaba hacer. Luego de un año en esta otra escuela, tomé la decisión de estudiar finanzas en TecMilenio.',
            }
        ]
    },
    {
        'escuela': 'Colegio Sinaloa Horizontes - ',
        'fecha': 'Junio 2013/Agosto 2016',
        'descripcion': [
            'Escuela donde cursé la preparatoria',
            'Estudié durante dos años en la especialidad de RRHH',
        ],
    }
]

itemsingles = [
  {
      'escuela': 'UVM - ',
      'fecha': 'September 2023/Present',
      'descripcion': [
          'Universidad del Valle de México',
          'Currently pursuing a Master’s degree in Data Science',
          'Learning is conducted online',
          'Learning about mathematics for data science and experimental design',
          'Using Python libraries for data analysis'
      ]
  },
  {
      'escuela': 'Platzi - ',
      'fecha': 'February 2022/August 2023',
      'descripcion': [
          'School where I took my first steps in data analysis',
          'Knowledge of the Python programming language',
          'Courses on statistics, probability, and applied mathematics'
      ]
  },
  {
      'escuela': 'Universidad Tecmilenio - ',
      'fecha': 'June 2017/July 2021',
      'descripcion': [
          'Studied Financial Management',
          'Acquired tools for company analysis',
          'Introduced to the world of stock market investments by a professor',
          'Took advantage of internship opportunities to work in different companies',
          'Graduated with a GPA of 93'
      ],
      'acordeon': [
          {
              'titulo': 'Why did I take a year off between university and high school?',
              'texto': 'Before studying finance, I attended another university without being sure of what I wanted to do. After a year at this other school, I decided to study finance at TecMilenio.'
          }
      ]
  },
  {
      'escuela': 'Colegio Sinaloa Horizontes - ',
      'fecha': 'June 2013/August 2016',
      'descripcion': [
          'School where I attended high school',
          'Studied for two years with a specialization in HR'
      ]
  }
]
  enviarAlMenu() {
    this.router.navigate(['/menu']);
  }
}
