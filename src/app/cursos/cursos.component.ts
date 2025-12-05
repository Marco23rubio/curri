import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TranslationService } from '../services/translation.service';
import { LenguajeService } from '../services/lenguaje.service';

type Lang = 'es' | 'en';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent {

  constructor(
    private router: Router,
    private translationService: TranslationService,
    private lenguajeService: LenguajeService
  ) {}

  idioma: Lang;

  ngOnInit() {
    const lang = this.lenguajeService.getLanguage();  
    this.translationService.changeLanguage(lang);       
    this.idioma = lang;
  }

  changeLanguage(language: Lang) {
    this.lenguajeService.setLanguage(language);        
    this.translationService.changeLanguage(language);
    this.idioma = language;
  }

  enviarAlMenu() {
    this.router.navigate(['/menu'], {
      queryParams: { lang: this.lenguajeService.getLanguage() },
      queryParamsHandling: 'merge'
    });
  }


  itemscol1 = [
    {
      'titulo': 'Curso de AMIB',
      'tituloingles': 'AMIB course',
      'descripcion': 'Certificación del AMIB en figura 3, te valida como Asesor de Inversiones y ofrece autorización para representar clientes en operaciones bursátiles',
      'descripcioningles': 'AMIB certification in figure 3, validates you as an Investment Advisor and offers authorization to represent clients in stock operations',
      'imagen': 'https://res.cloudinary.com/dvzucfpbk/image/upload/v1717012161/amib_zqpjpz.png',
      'ruta': 'https://github.com/Marco23rubio/Cursos/tree/master/AMIB'
    },
    {
      'titulo': 'Carrera en Blockchain',
      'tituloingles': 'Blockchain career',
      'descripcion': 'Conocimientos para entender y contribuir en la tecnología Blockchain para el sector financiero, además de estrategias de inversión para criptomonedas y tokens digitales',
      'descripcioningles': 'Knowledge to understand and contribute to Blockchain technology for the financial sector, as well as investment strategies for cryptocurrencies and digital tokens',
      'imagen': 'https://res.cloudinary.com/dvzucfpbk/image/upload/v1717012161/bitcoin_yfyfsi.png',
      'ruta': 'https://github.com/Marco23rubio/Cursos/tree/master/Carrera%20Blockchain'
    },
    {
      'titulo': 'Análisis técnico de mercados financieros',
      'tituloingles': 'Technical analysis of financial markets',
      'descripcion': 'Certificación especializada en el análisis técnico de empresas y cálculos estadísticos para predecir el comportamiento de las acciones en el futuro',
      'descripcioningles': 'Specialized certification in the technical analysis of companies and statistical calculations to predict the behavior of stocks in the future',
      'imagen': 'https://res.cloudinary.com/dvzucfpbk/image/upload/v1717012158/stock-market_rfw9ri.png',
      'ruta': 'https://github.com/Marco23rubio/Cursos/blob/master/Analisis_tecnico.jpeg'
    }
  ];

  itemscol2 = [
    {
      'titulo': 'Creación de Startups',
      'tituloingles': 'Startup creation',
      'descripcion': 'Cursos enfocados en la creación de empresas emergentes así como en la administración de las mismas',
      'descripcioningles': 'Courses focused on the creation of emerging companies as well as their administration',
      'imagen': 'https://res.cloudinary.com/dvzucfpbk/image/upload/v1717012158/rocket_irq2ye.png',
      'ruta': 'https://github.com/Marco23rubio/Cursos/tree/master/Carrera%2C%20creacion%20de%20Startups'
    },
    {
      'titulo': 'Competencias gerenciales',
      'tituloingles': 'Management skills',
      'descripcioningles': 'Specialized course in offering the tools to lead work teams and make decisions in crisis situations',
      'descripcion': 'Curso especializado en ofrecer las herramientas para liderar equipos de trabajo y tomar decisiones en situaciones de crisis',
      'imagen': 'https://res.cloudinary.com/dvzucfpbk/image/upload/v1717012159/team-management_vxpepp.png',
      'ruta': 'https://github.com/Marco23rubio/Cursos/blob/master/Competencias_gerenciales.jpeg'
    },
    {
      'titulo': 'Iniciación y Planificación de Proyectos',
      'tituloingles': 'Project Management',
      'descripcion': 'Materia con los principios fundamentales de la gestión de proyectos, sobre todo en la parte inicial de los mismos',
      'descripcioningles': 'Subject with the fundamental principles of project management, especially in the initial part of them',
      'imagen': 'https://res.cloudinary.com/dvzucfpbk/image/upload/v1717012156/project-management_t7kjnr.png',
      'ruta': 'https://github.com/Marco23rubio/Cursos/blob/master/Iniciaci%C3%B3n_planificacionDeProyectos.pdf'
    }
  ];

  itemscol3 = [
    {
      'titulo': 'Carrera de bases de datos',
      'tituloingles': 'Database career',
      'descripcion': 'Conjunto de cursos enfocados al manejo de BD, la interpretación de datos y la toma de decisiones más óptimas en base a estos mismos',
      'descripcioningles': 'Set of courses focused on DB management, data interpretation and making more optimal decisions based on them',
      'imagen': 'https://res.cloudinary.com/dvzucfpbk/image/upload/v1717012148/database-storage_wxel4e.png',
      'ruta': 'https://github.com/Marco23rubio/Cursos/tree/master/Bases%20de%20datos'
    },
    {
      'titulo': 'Fundamentos de programación',
      'tituloingles': 'Programming basics',
      'descripcion': 'Itinerario enfocado en las bases de la programación y creación de algoritmos para la resolución de problemas',
      'descripcioningles': 'Itinerary focused on the basics of programming and creating algorithms for problem solving',
      'imagen': 'https://res.cloudinary.com/dvzucfpbk/image/upload/v1717012148/coding-language_lg6ymf.png',
      'ruta': 'https://github.com/Marco23rubio/Cursos/tree/master/Fundamentos%20de%20programaci%C3%B3n'
    },
        {
      'titulo': 'Engineering Project Management',
      'tituloingles': 'Engineering Project Management',
      'descripcion': 'Enfocado en la correcta administración de proyectos de ingeniería, como administrar riesgos, recursos, control de calidad y tiempos de entrega',
      'descripcioningles': 'Focused on the correct administration of engineering projects, such as managing risks, resources, quality control and delivery',
      'imagen': 'https://res.cloudinary.com/dvzucfpbk/image/upload/v1717012148/engineering_v7scrs.png',
      'ruta': 'https://github.com/Marco23rubio/Cursos/blob/master/EngineeringProjectManagement.pdf'
    },
    {
      'titulo': 'Excel avanzado',
      'tituloingles': 'Advanced Excel',
      'descripcion': 'Cursos enfocados en el uso de Excel para el análisis de datos y financiero',
      'descripcioningles': 'Courses focused on the use of Excel for data and financial analysis',
      'imagen': 'https://res.cloudinary.com/dvzucfpbk/image/upload/v1717012148/excel_j2gyre.png',
      'ruta': 'https://github.com/Marco23rubio/Cursos/tree/master/Excel'
    }

  ];

  
  get items(): any[] {
    return this.interleave([this.itemscol1, this.itemscol2, this.itemscol3]);
  }

  private interleave(lists: any[][]): any[] {
    const out: any[] = [];
    let i = 0;
    while (lists.some(arr => i < arr.length)) {
      for (const arr of lists) {
        if (i < arr.length) out.push(arr[i]);
      }
      i++;
    }
    return out;
  }
}
