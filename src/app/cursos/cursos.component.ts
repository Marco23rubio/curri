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
      descripcion:'Curso de AMIB',
      imagen:'assets/chat.png'
    },
    {
      titulo:'Carrera en Blockchain',
      descripcion:'Otro curso',
      imagen:'assets/chat.png'
    },
    {
      titulo:'Análisis técnico de mercados financieros', 
      descripcion:'Otro curso',
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
