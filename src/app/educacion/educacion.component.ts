import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

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
  ) {}

  ngOnInit() {
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
            'Cursos sobre estadística, probabilidad y matemáticas aplicadas'
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

  enviarAlMenu() {
    this.router.navigate(['/menu']);
  }
}
