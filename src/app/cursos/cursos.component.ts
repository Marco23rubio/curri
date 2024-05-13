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
      descripcion:'Certicacion del AMIB en figura 3,te valida como Asesor de Inversiones y ofrece autorización para representar clientes en operaciones bursátiles',
      imagen:'assets/amib.png'
    },
    {
      titulo:'Carrera en Blockchain',
      descripcion:'Conocimietos para entender y contribuir en la tecnologia Blockchain para el sector financiero, además de estrategias de inversión para criptomonedas y tokens digitales',
      imagen:'assets/bitcoin.png'
    },
    {
      titulo:'Análisis técnico de mercados financieros', 
      descripcion:'Certificación especializada en el análisis tecnico de empresas y calculos estadisticos para predecir el comportamiento de las acciones en el futuro',
      imagen:'assets/stock-market.png'
    }
  ]

  itemscol2 = [
    {
      titulo:'Creación de Startups',
      descripcion:'Cursos enfocados en la creación de empresas emergentes asi como en la administración de las mismas',
      imagen:'assets/rocket.png'
    },
    {
      titulo:'Competencias gerenciales',
      descripcion:'Curso especializado en ofrecer las herramientas para liderar equipos de trabajo y tomar decisiones en situaciones de crisis',
      imagen:'assets/team-management.png'
    }
  ]

  itemscol3 = [
    {
      titulo:'Carrera de bases de datos',
      descripcion:'Conjunto de cursos enfocados al manejo de BD, la interpretación de datos y la toma de decisiones más óptimas en base a estos mismos',
      imagen:'assets/database-storage.png'
    },
    {
      titulo:'Fundamentos de programación',
      descripcion:'Itinerario enfocado en las bases de la programación y creación de algoritmos para la resolución de problemas',
      imagen:'assets/coding-language.png'
    },
    {
      titulo:'Excel avanzado',
      descripcion:'Cursos enfocados en el uso de Excel para el análisis de datos y financiero',
      imagen:'assets/excel.png'
    }
  ]

  enviarAlMenu() {
    this.router.navigate(['/menu']);
  }

}
