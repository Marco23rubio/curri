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

  items = [
    {
      'escuela': 'Universidad del Valle de México - ',
      'fecha': 'Septiembre 2023/Actualidad',
      'descripcion': [
        'Actualmente con la maestría en Ciencia de Datos',
        'El aprendizaje se lleva a traves de la modalidad online',
        'Aprendizaje sobre matematicas para las ciencias de datos y los diseños de experimentos',
        'Utilización de bibliotecas en Python para el analisis de datos',
      ]
    },
    {
      'escuela': 'Universidad Tecmilenio - ',
      'fecha': 'Junio 2017/Julio 2021',
      'descripcion': [
        'Estudio Administración financiera',
        'Obtengo las herramientas para el análisis de empresas y la toma de decisiones con dichos analisis',
        'Gracias a un profesor me introduje en el mundo de las inversiones bursatiles',
        'Aprovecho la facilidad de obtener practicas para trabajar en diferentes empresas',
        'Me graduo con un promedio de 93',
      ],
      'acordeon': [
        {
          'titulo': '¿Porqué paso 1 año entre la Universidad y la preparatoria?',
          'texto': 'Antes de entrar a estudiar finanzas, entre antes a otra Universidad, aun si tener seguridad de que es lo que deseaba hacer, luego de un año en esta otra escuela, tome la decisión de estudiar finanzas en el TecMilenio',
        }
      ]
    },
    {
      'escuela': 'Platzi - ',
      'fecha': 'Febrero 2022/Agosto 2023',
      'descripcion': [
        'Escuela donde empiezo con mis indicios sobre analisis de datos',
        'Conocimiento del lenguaje de programación Python',
        'Cursos sobre estadística,probabilidad y matematicas aplicadas'      
      ],
    },
    {
      'escuela': 'Colegio Sinaloa Horizontes - ',
      'fecha': 'Junio 2013/Agosto 2016',
      'descripcion': [
        'Escuela donde curse la preparatoria',
        'Estudio durante dos años en la especialidad de RRHH',      
      ],
    }
  ]

  enviarAlMenu() {
    this.router.navigate(['/menu']);
  }
}
