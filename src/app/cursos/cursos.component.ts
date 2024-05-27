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
        'titulo': 'Curso de AMIB',
        'descripcion': 'Certificación del AMIB en figura 3, te valida como Asesor de Inversiones y ofrece autorización para representar clientes en operaciones bursátiles',
        'imagen': 'assets/amib.png',
        'ruta': 'https://github.com/Marco23rubio/Cursos/tree/master/AMIB'
    },
    {
        'titulo': 'Carrera en Blockchain',
        'descripcion': 'Conocimientos para entender y contribuir en la tecnología Blockchain para el sector financiero, además de estrategias de inversión para criptomonedas y tokens digitales',
        'imagen': 'assets/bitcoin.png',
        'ruta': 'https://github.com/Marco23rubio/Cursos/tree/master/Carrera%20Blockchain'
    },
    {
        'titulo': 'Análisis técnico de mercados financieros', 
        'descripcion': 'Certificación especializada en el análisis técnico de empresas y cálculos estadísticos para predecir el comportamiento de las acciones en el futuro',
        'imagen': 'assets/stock-market.png',
        'ruta': 'https://github.com/Marco23rubio/Cursos/blob/master/Analisis_tecnico.jpeg'
    }
]

itemscol2 = [
    {
        'titulo': 'Creación de Startups',
        'descripcion': 'Cursos enfocados en la creación de empresas emergentes así como en la administración de las mismas',
        'imagen': 'assets/rocket.png',
        'ruta': 'https://github.com/Marco23rubio/Cursos/tree/master/Carrera%2C%20creacion%20de%20Startups'
    },
    {
        'titulo': 'Competencias gerenciales',
        'descripcion': 'Curso especializado en ofrecer las herramientas para liderar equipos de trabajo y tomar decisiones en situaciones de crisis',
        'imagen': 'assets/team-management.png',
        'ruta': 'https://github.com/Marco23rubio/Cursos/blob/master/Competencias_gerenciales.jpeg'
    },
    {
        'titulo': 'Iniciación y Planificación de Proyectos',
        'descripcion': 'Materia con los principios fundamentales de la gestión de proyectos, sobre todo en la parte inicial de los mismos',
        'imagen': 'assets/project-management.png',
        'ruta': 'https://github.com/Marco23rubio/Cursos/blob/master/Iniciaci%C3%B3n_planificacionDeProyectos.pdf'
    }
]

itemscol3 = [
    {
        'titulo': 'Carrera de bases de datos',
        'descripcion': 'Conjunto de cursos enfocados al manejo de BD, la interpretación de datos y la toma de decisiones más óptimas en base a estos mismos',
        'imagen': 'assets/database-storage.png',
        'ruta': 'https://github.com/Marco23rubio/Cursos/tree/master/Bases%20de%20datos'
    },
    {
        'titulo': 'Fundamentos de programación',
        'descripcion': 'Itinerario enfocado en las bases de la programación y creación de algoritmos para la resolución de problemas',
        'imagen': 'assets/coding-language.png',
        'ruta': 'https://github.com/Marco23rubio/Cursos/tree/master/Fundamentos%20de%20programaci%C3%B3n'
    },
    {
        'titulo': 'Excel avanzado',
        'descripcion': 'Cursos enfocados en el uso de Excel para el análisis de datos y financiero',
        'imagen': 'assets/excel.png',
        'ruta': 'https://github.com/Marco23rubio/Cursos/tree/master/Excel'
    },
    {
        'titulo': 'Engineering Project Management',
        'descripcion': 'Enfocado en la correcta administración de proyectos de ingeniería, como administrar riesgos, recursos, control de calidad y tiempos de entrega',
        'imagen': 'assets/engineering.png',
        'ruta': 'https://github.com/Marco23rubio/Cursos/blob/master/EngineeringProjectManagement.pdf'
    }
]

  enviarAlMenu() {
    this.router.navigate(['/menu']);
  }

}
