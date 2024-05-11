import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent {

  constructor(
    private router: Router,
  ) {}

  itemscol1 = [
    {
      titulo:'Curso de AMIB',
      descripcion:'Certicacion del AMIB en figura 3,te valida como Asesor de Inversiones y ofrece autorización para representar cleintes en operaciones bursátiles',
      imagen:'assets/chat.png'
    },
    {
      titulo:'Carrera en Blockchain',
      descripcion:'Conocimietos para entender y contribuir en la tecnologia Blockchain para el sector financiero, además de estrategias de inversión para criptomonedas y tokens digitales',
      imagen:'assets/chat.png'
    },
    {
      titulo:'Análisis técnico de mercados financieros', 
      descripcion:'Curso especializado en el análisis tecnico de empresas y calculos estadisticos para predecir el comportamiento de las acciones en el futuro',
      imagen:'assets/chat.png'
    }
  ]

  itemscol2 = [
    {
      titulo:'Creación de Startups',
      descripcion:'Curso de AMIB',
      imagen:'assets/chat.png'
    },
    {
      titulo:'Competencias gerenciales',
      descripcion:'Otro curso',
      imagen:'assets/chat.png'
    }
  ]

  itemscol3 = [
    {
      titulo:'Carrera de bases de datos',
      descripcion:'Curso de AMIB',
      imagen:'assets/chat.png'
    },
    {
      titulo:'Fundamentos de programación',
      descripcion:'Otro curso',
      imagen:'assets/chat.png'
    },
    {
      titulo:'Excel avanzado',
      descripcion:'Otro curso',
      imagen:'assets/chat.png'
    }
  ]

}
