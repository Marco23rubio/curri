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
        const savedLanguage = localStorage.getItem('language');

        if (savedLanguage) {
            this.idioma = savedLanguage;
        } else {
            this.idioma = this.lenguajeService.getLanguage();
        }
        this.changeLanguage(this.idioma);
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

    changeLanguage(language) {
        this.translationService.changeLanguage(language);
        localStorage.setItem('language', language);
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
            'puesto': 'Consultor Sr.',
            'descripcion': [
                'Automatización de la obtención de datos de SAP y Páginas web además de su respectiva limpieza y transformación para su uso en el desarrollo de modelos predictivos',
                'Desarrollo de una Intranet con Angular y FastAPI para la automatización de procesos financieros y de reporting, integrando múltiples fuentes de información y mejorando la trazabilidad de los datos',
                'Desarrollo de presupuestos enfocado en asegurar una asignación óptima de recursos entre áreas y mejorar la efectividad del gasto anual para una mejor planeación con los inversionistas',
                'Incremento de la retención y satisfacción del equipo mediante acciones de mejora del ambiente laboral',
            ],
            'objetivo' : ['Al obtener ahora de manera automática los datos de forma diaria, se ahorraba hasta 2 horas diarias en la obtención y limpieza de datos',
                'Al atender tantas areas diferentes, con necesidades parecidas entre ellas, el desarrollo de la intranet permitió reducir los tiempos de análisis de datos y creación de dashboards en un 50%',
                'El mejorar el proceso de presupuestación permitió tener un mayor horizonte de tiempo para los cambios y ajustes necesarios en fechas criticas del año fiscal',
                'Elimiar la alta rotación del equipo de trabajo, el cual era un problema constante en el área, mejorando la comunicación y el ambiente laboral'
            ]
        },
        {
            'empresa': 'Coppel - ',
            'fecha': 'Junio 2022/Junio 2024',
            'puesto': 'Desarrollador Jr',
            'descripcion': [
                'Desarrollo de Frontend con Angular y TailwindCSS, para una mejor experiencia de usuario y el uso de PHP Y Spring Boot en el Backend para una mayor eficiencia en el manejo de datos',
                'Desarrollo y mantenimiento de aplicaciones de escritorio con C++',
                'Manipulación de datos con PostgreSQL y MySQL para asegurar la integridad y disponibilidad de la información',
                'Uso de metodologías ágiles como Scrum, asegurando entregas continuas y adaptabilidad a cambios en los requisitos del cliente',
            ],
            'objetivo' : ['Migrar programas legados a aplicaciones web modernas para mejorar la accesibilidad y experiencia del usuario,como cuando realice la migración del sistema del pago de nómina a una aplicación para una conectividad más rapidad y sencilla al banco encargado de los pagos con la API proporcionada por ellos',
                'Mantener procesos financieros críticos funcionando sin interrupciones mediante aplicaciones de escritorio robustas que no necesitaban una opción web,esto involucro el mantenimiento de la opción de consulta de créditos para los empleados de Coppel',
                'Una desarrollo eficiente de las funciones de la base de datos , además de la indexación adecuada de las tablas, permitió mejorar los tiempos de respuesta de las consultas en un 20%',
                'El uso de Scrum permitió una mejor comunicación entre los miembros del equipo y una mayor adaptabilidad a los cambios en los requisitos del proyecto, resultando en una mayor satisfacción del cliente, medible en encuestas posteriores al proyecto'
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
    'puesto': 'Senior Consultant',
    'descripcion': [
      'Automation of data extraction from SAP and web sources, including data cleaning and transformation for use in predictive modeling projects',
      'Development of an Intranet using Angular and FastAPI for the automation of financial and reporting processes, integrating multiple data sources and improving data traceability',
      'Budget development focused on ensuring optimal resource allocation across departments and improving annual spending efficiency for better planning with stakeholders',
      'Increase in team retention and satisfaction through workplace environment improvement initiatives'
    ],
    'objetivo': [
      'By automating daily data extraction, up to 2 hours per day previously spent on data gathering and cleaning were saved',
      'Serving multiple departments with similar needs, the intranet reduced data analysis and dashboard creation time by 50%',
      'Improving the budgeting process provided a longer horizon to make adjustments during critical fiscal dates',
      'Reducing the high turnover rate in the team by improving communication and workplace environment'
    ]
  },
  {
    'empresa': 'Coppel - ',
    'fecha': 'June 2022 / June 2024',
    'puesto': 'Junior Developer',
    'descripcion': [
      'Frontend development with Angular and TailwindCSS for improved user experience, and PHP and Spring Boot on the backend for better data processing efficiency',
      'Development and maintenance of desktop applications using C++',
      'Data manipulation with PostgreSQL and MySQL to ensure data integrity and availability',
      'Use of agile methodologies such as Scrum, ensuring continuous delivery and adaptability to changing client requirements'
    ],
    'objetivo': [
      'Migrate legacy systems to modern web applications to improve accessibility and user experience, such as migrating the payroll payment system to a web application for faster and simpler connectivity to the bank API handling disbursements',
      'Maintain critical financial processes running without interruption through robust desktop applications where a web version was not required, including the employee credit consultation system',
      'Efficient development of database functions and proper table indexing improved query response times by 20%',
      'Using Scrum improved team communication and adaptability to changing requirements, resulting in higher client satisfaction measured through post-project surveys'
    ]
  },
  {
    'empresa': 'Internships / Part-Time Jobs',
    'fecha': 'February 2017 / June 2021',
    'puesto': 'Intern',
    'descripcion': [
      'Universidad del Bajío - December 2020 / June 2021 - Development of educational material for the finance program, deepening accounting and financial theory',
      'NexGlobal - June 2019 / June 2020 - Conducted accounting analysis for small businesses and researched their industry to recommend the best financial option through bank or government programs',
      'Grupo Vama - January 2019 / June 2019 - Payroll management and HR operations for company employees',
      'Camiones Laija - February 2017 / December 2018 - Accounting and payroll control using Excel and BEA software for fleet management'
    ]
  }
];


    enviarAlMenu() {
        this.router.navigate(['/menu'], { queryParamsHandling: 'preserve' });
    }

}
