import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TranslationService } from '../services/translation.service';
import { LenguajeService } from '../services/lenguaje.service';

@Component({
    selector: 'app-experiencia',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './experiencia.component.html',
    styleUrl: './experiencia.component.css'
})
export class ExperienciaComponent {

    constructor(
        private router: Router,
        private translationService: TranslationService,
        private lenguajeService: LenguajeService,
    ) { }

    idioma: string;
    acordeonAbierto: boolean[] = [];
    acordeonInternoAbierto: boolean[][] = [];
    loading = true;
    itemsActuales = [];


  ngOnInit() {
    const lang = this.lenguajeService.getLanguage();
    this.idioma = lang;

    this.translationService.changeLanguage(lang);

    this.actualizarItems();

    this.items.forEach((item, i) => {
      this.acordeonAbierto[i] = false;
      this.acordeonInternoAbierto[i] = [];
    });
  }

  actualizarItems() {
    this.itemsActuales = this.idioma === 'es' ? this.items : this.itemsingles;
  }

  toggleAcordeon(i: number) {
    this.acordeonAbierto[i] = !this.acordeonAbierto[i];
  }

  toggleAcordeonInterno(i: number, j: number) {
    this.acordeonInternoAbierto[i][j] = !this.acordeonInternoAbierto[i][j];
  }

  changeLanguage(language: 'es' | 'en') {
    this.lenguajeService.setLanguage(language);

    this.translationService.changeLanguage(language);

    this.idioma = language;
    this.actualizarItems();
  }

    splitInternLine(p: string) {
  const parts = p.split(/\s*[-–—]\s*/); // tolera sin/ con espacios y en/em dash
  return {
    empresa: (parts[0] ?? '').trim(),
    periodo: (parts[1] ?? '').trim(),
    detalle: (parts.slice(2).join(' - ') ?? '').trim(),
  };
}

    items = [
                {
            'empresa': 'Liverpool - ',
            'fecha': 'Septiembre 2024/Noviembre 2025',
            'puesto': 'Consultor',
            'descripcion': [
                'Automatización de la obtención de datos de SAP,Páginas web y SQL además de su respectiva limpieza y transformación para su uso en el desarrollo de modelos predictivos con Python',
                'Desarrollo de una Intranet con Angular,FastAPI y GCP para la automatización de procesos financieros y de reporting con Power Bi, integrando múltiples fuentes de información y mejorando la trazabilidad de los datos',
                'Análisis de presupuestos y pronósticos financieros apoyados en Python',
                'Incremento de la retención y satisfacción del equipo mediante acciones de mejora del ambiente laboral',
            ],
            'objetivo' : ['Al obtener ahora de manera automática los datos de forma diaria, se ahorraba hasta 2 horas diarias en la obtención y limpieza de datos',
                'Al atender tantas areas diferentes, con necesidades parecidas entre ellas, el desarrollo de la intranet permitió reducir los tiempos de análisis de datos y creación de dashboards',
                'El mejorar el proceso de presupuestación permitió tener un mayor horizonte de tiempo para los cambios y ajustes necesarios en fechas criticas del año fiscal',
                'Elimiar la alta rotación del equipo de trabajo, el cual era un problema constante en el área, mejorando la comunicación y el ambiente laboral'
            ]
        },
        {
            'empresa': 'Coppel - ',
            'fecha': 'Junio 2022/Junio 2024',
            'puesto': 'Desarrollador Full Stack',
            'descripcion': [
                'Desarrollo de scripts en Python para automatización de procesos de datos y reportes en Power BI',
                'Trabajo bajo metodología Agile Scrum, con el uso de Azure Dev Ops',
                'Manipulación de datos con PostgreSQL y MySQL para asegurar la integridad y disponibilidad de la información',
                'Apoyo en la migración de sistemas legados, mejorando accesibilidad y calidad de la información con Desarrollo Web',
            ],
            'objetivo': [
    'Automatizar procesos operativos y financieros mediante scripts en Python, reduciendo tareas manuales y mejorando la eficiencia en la generación de reportes para áreas de negocio',

    'Contribuir al mantenimiento y mejora de sistemas existentes, participando en la migración parcial de aplicaciones legadas hacia soluciones web que incrementaran la accesibilidad y disponibilidad de la información',

    'Optimizar consultas y estructuras de bases de datos en PostgreSQL y MySQL mediante mejoras en funciones e indexación básica, logrando tiempos de respuesta más eficientes en procesos recurrentes',

    'Colaborar en el desarrollo y modernización de interfaces de usuario, participando en la migración de aplicaciones de escritorio desarrolladas en C++ hacia aplicaciones web con Angular y backend en Java, mejorando la usabilidad y el acceso a la información'

]
        },
        {
            'empresa': 'Prácticas/Trabajos Medio Tiempo',
            'fecha': 'Febrero 2017 / Junio 2021',
            'puesto': 'Practicante',
            'descripcion': [
                'Universidad del Bajío- Diciembre 2020/Junio 2021 - Desarrollo de material didáctico para la carrera de finanzas donde desarrolle aun más la teoría en temas contables y financieras ',
                'NexGlobal- Junio 2019/Junio 2020 - Realizaba el análisis contable de PYMES, además de investigar sobre el giro de la empresa para sugerir la mejor opción de un crédito bancario o gubernamental',
                'Grupo Vama- Enero 2019/Junio 2019 - Control de nómina y manejo de RH con empleados de la empresa',
                'Camiones Laija- Febrero 2017/Diciembre 2018 - Control de contabilidad y nómina de la empresa con el uso de EXCEL y el software BEA para el manejo de los camiones',
            ]
        }
    ]

itemsingles = [
    {
        'empresa': 'Liverpool - ',
        'fecha': 'September 2024 / November 2025',
        'puesto': 'Consultant',
        'descripcion': [
            'Automation of data extraction from SAP, websites, and SQL databases, including data cleaning and transformation for use in predictive model development with Python',
            'Development of an internal Intranet using Angular, FastAPI, and GCP to automate financial and reporting processes with Power BI, integrating multiple data sources and improving data traceability',
            'Analysis of budgets and financial forecasts supported by Python',
            'Improvement of team retention and satisfaction through initiatives focused on enhancing the work environment'
        ],
        'objetivo': [
            'By automating daily data acquisition, up to two hours per day were saved in data collection and cleaning tasks',
            'By supporting multiple areas with similar needs, the intranet development reduced data analysis time and dashboard creation efforts',
            'Improving the budgeting process provided a longer planning horizon for critical adjustments during key fiscal periods',
            'Eliminating high team turnover, which had been a recurring issue in the area, by improving communication and the overall work environment'
        ]
    },
    {
        'empresa': 'Coppel - ',
        'fecha': 'June 2022 / June 2024',
        'puesto': 'Junior Developer',
        'descripcion': [
            'Development of Python scripts to automate data processes and Power BI reporting',
            'Work under Agile Scrum methodology using Azure DevOps',
            'Data manipulation using PostgreSQL and MySQL to ensure data integrity and availability',
            'Support in the migration of legacy systems, improving information accessibility and quality through web development'
        ],
        'objetivo': [
            'Automate operational and financial processes using Python scripts, reducing manual tasks and improving efficiency in report generation for business areas',
            'Contribute to the maintenance and improvement of existing systems by participating in the partial migration of legacy applications to web-based solutions, increasing information accessibility and availability',
            'Optimize database queries and structures in PostgreSQL and MySQL through improvements in functions and basic indexing, achieving more efficient response times in recurring processes',
            'Collaborate in the development and modernization of user interfaces by participating in the migration of desktop applications developed in C++ to web applications using Angular with a Java backend, improving usability and access to information'
        ]
    },
    {
        'empresa': 'Internships / Part-Time Roles',
        'fecha': 'February 2017 / June 2021',
        'puesto': 'Intern',
        'descripcion': [
            'Universidad del Bajío – December 2020 / June 2021 – Development of educational materials for the Finance program, strengthening theoretical knowledge in accounting and financial topics',
            'NexGlobal – June 2019 / June 2020 – Performed accounting analysis for SMEs and researched business sectors to recommend the most suitable bank or government credit options',
            'Grupo Vama – January 2019 / June 2019 – Payroll control and human resources management for company employees',
            'Camiones Laija – February 2017 / December 2018 – Accounting and payroll control using Excel and BEA software for fleet management'
        ]
    }
]



    enviarAlMenu() {
        this.router.navigate(['/menu'], { queryParamsHandling: 'preserve' });
    }

}
