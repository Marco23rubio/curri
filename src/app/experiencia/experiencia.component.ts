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
  ) {}

  idioma:string;
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
      item.acordeon.forEach((_, j) => {
        this.acordeonInternoAbierto[i][j] = false;
      });
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

  items = [
    {
        'empresa': 'Coppel - ',
        'fecha': 'Junio 2022/Mayo 2024',
        'descripcion': [
            'Desarrollo de Frontend web con Angular y TailwindCSS',
            'Desarrollo de Backend con PHP, Spring Boot',
            'Desarrollo de aplicaciones de escritorio con C++',
            'Manipulación de datos con PostgreSQL y MySQL',
            'Uso de metodologías ágiles como Scrum'
        ],
        'acordeon': [
            {
                'titulo': 'Fortalezas que obtuve de esta experiencia',
                'texto': 'Entre las fortalezas que obtuve en este puesto se encuentra la capacidad de encontrar diferentes maneras de resolver un problema, desde el uso de la lógica hasta la investigación de documentación. De igual manera, mi capacidad de adaptación se vio aumentada, ya que no solo era el habituarse a diferentes tecnologías, sino que al llegar con casi nulo conocimiento en programación, me vi en la necesidad de aprender de forma acelerada para el cumplimiento de las tareas.',
            },
            {
                'titulo': 'Causa de desvinculación',
                'texto': 'Los motivos por los que decidí finalizar con mis labores aquí fueron que, en mi búsqueda de empezar a desarrollarme como científico de datos, pese a haber obtenido una posición en la empresa, el cambio de área se vio finalizado debido a situaciones internas que afectaron de manera grave a la compañía por lo que se vio suspendido mi cambio de área. Por lo tanto, decidí buscar nuevas oportunidades en el area de analítica de datos en una ciudad más grande',
            },
        ]
    },
    {
        'empresa': 'Inversionista freelance - ',
        'fecha': 'Diciembre 2020/Junio 2022',
        'descripcion': [
            'Análisis de estados financieros',
            'Compra/venta de acciones en la bolsa de valores',
            'Manejo de fondos para terceros'
        ],
        'acordeon': [
            {
                'titulo': 'Fortalezas que obtuve de esta experiencia',
                'texto': 'Durante mi aventura como emprendedor en el área de inversiones, además de tener la oportunidad de aplicar la mayoría de conceptos aprendidos en la carrera sobre el análisis de empresas, también pude desarrollar una habilidad para las ventas al contar con una propia cartera de clientes. De igual manera, mi capacidad de negociación se vio incrementada al tener que tratar con diferentes tipos de personas y sus necesidades de manera diaria, pero lo más primordial fue el manejo de las emociones, sobre todo bajo presión, a la hora de realizar compras o ventas de acciones.',
            },
            {
                'titulo': 'Causa de desvinculación',
                'texto': 'El motivo por el que decidí pausar esta actividad, al menos por la parte del manejo de fondos a terceros, fue que encontré el área de ciencia de datos, en la cual, si lograba desarrollarme, podría en un futuro combinar las finanzas con la tecnología. Por lo tanto, decidí enfocarme en esta nueva área de oportunidad, pero de igual manera sigo invirtiendo de manera personal en la bolsa de valores.',
            },
        ]
    },
    {
        'empresa': 'Universidad del Bajío - ',
        'fecha': 'Diciembre 2020/Junio 2021 (prácticas)',
        'descripcion': [
            'Lectura de libros de finanzas y economía',
            'Desarrollo del material didáctico para la carrera de finanzas',
        ],
        'acordeon': [
            {
                'titulo': 'Fortalezas que obtuve de esta experiencia',
                'texto': 'La mayor fortaleza que logré aquí fue obtener el hábito de la lectura, el cual tuve la suerte de desarrollar gracias a la cantidad de libros que tuve que leer para el desarrollo del material didáctico. De igual manera, mi capacidad de organización se vio incrementada al tener que cumplir con los tiempos de entrega de los materiales al ser un trabajo home office.',
            },
            {
                'titulo': 'Causa de desvinculación',
                'texto': 'La razón por la que finalicé con mis labores fue que me encontraba bajo contrato temporal. Al finalizar el periodo, la universidad aún se encontraba en desarrollo, por lo que no se me pudo ofrecer un puesto fijo, así que decidí buscar nuevas oportunidades.',
            },
        ]
    },
    {
        'empresa': 'NexGlobal - ',
        'fecha': 'Junio 2019/Junio 2020 (prácticas)',
        'descripcion': [
            'Venta de productos financieros enfocados a préstamos a pymes',
            'Análisis contable de pymes para obtención del mejor crédito posible',
            'Manejo de cartera de clientes',
            'Desarrollo de página web para automatización del proceso de solicitud de créditos',
        ],
        'acordeon': [
            {
                'titulo': 'Fortalezas que obtuve de esta experiencia',
                'texto': 'Las dos mayores fortalezas que obtuve aquí fueron, en primer lugar, experimentar el manejo de una cartera de clientes, creando estrategias de venta para lograr que se pudieran ofrecer los créditos a las pymes. En segundo lugar, el desarrollo de la página web, ya que fue mi primer acercamiento al desarrollo web, lo cual me abrió las puertas a la programación.',
            },
            {
                'titulo': 'Causa de desvinculación',
                'texto': 'El motivo por el que finalicé las labores fue que, debido a la pandemia, la empresa se vio en la necesidad de cesar operaciones debido a una fuerte inversión que se hizo antes de la cuarentena.',
            },
        ]
    },
    {
        'empresa': 'Grupo Vama - ',
        'fecha': 'Enero 2019/Junio 2019 (prácticas)',
        'descripcion': [
            'Control de nómina y quejas de colaboradores',
            'Manejo de las necesidades de equipo de los colaboradores',
            'Contratación de personal para CEDIS'
        ],
        'acordeon': [
            {
                'titulo': 'Fortalezas que obtuve de esta experiencia',
                'texto': 'La mayor fortaleza que obtuve de trabajar en el área de RRHH fue desarrollar la empatía, ya que al tener que tratar con las necesidades de los colaboradores, me vi en la necesidad de ponerme en su lugar para poder ofrecerles la mejor solución a sus problemas.',
            },
            {
                'titulo': 'Causa de desvinculación',
                'texto': 'El motivo por el que finalicé mis prácticas aquí fue que durante esa temporada de la carrera, me encontraba en la búsqueda de una empresa en la cual pudiera desarrollar mis habilidades en el área de finanzas, por lo que decidí buscar nuevas oportunidades en otras empresas.',
            },
        ]
    },
    {
        'empresa': 'Camiones Laija - ',
        'fecha': 'Febrero 2017/Diciembre 2018 (prácticas)',
        'descripcion': [
            'Control de contabilidad y nómina de la empresa',
            'Manejo del personal',
        ],
        'acordeon': [
            {
                'titulo': 'Fortalezas que obtuve de esta experiencia',
                'texto': 'Durante mi primera experiencia laboral, la mayor fortaleza que obtuve fue la de la responsabilidad, ya que al ser mi primer trabajo formal, me vi en la necesidad de cumplir con los horarios y las tareas asignadas. De igual manera, el manejo del personal me ayudó a desarrollar mis habilidades de comunicación, eliminando la timidez que tenía al hablar con personas desconocidas. Asimismo, el manejo de la contabilidad me ayudó a desarrollar habilidades de organización y manejo de números.',
            },
            {
                'titulo': 'Causa de desvinculación',
                'texto': 'La causa por la que terminé con mi primera experiencia laboral se debió a un tema estudiantil, esto debido a que en mi carrera empecé con las clases en la tarde, chocando con el horario de trabajo.',
            },
        ]
    }
]

    itemsingles = [
        {
            'empresa': 'Coppel - ',
            'fecha': 'June 2022/May 2024',
            'descripcion': [
                'Frontend web development with Angular and TailwindCSS',
                'Backend development with PHP, Spring Boot',
                'Desktop application development with C++',
                'Data manipulation with PostgreSQL and MySQL',
                'Use of agile methodologies like Scrum'
            ],
            'acordeon': [
                {
                    'titulo': 'Strengths I gained from this experience',
                    'texto': 'Among the strengths I gained in this position is the ability to find different ways to solve a problem, from using logic to researching documentation. Similarly, my adaptability increased, as I had to get used to different technologies and learn programming skills rapidly to fulfill tasks, starting with almost no prior knowledge.'
                },
                {
                    'titulo': 'Reason for leaving',
                    'texto': 'The reasons I decided to end my work here were due to my goal of starting a career as a data scientist. Despite obtaining a position in the company, internal issues significantly affected the company, suspending my department change. Therefore, I decided to seek new opportunities in the field of data analytics in a larger city.'
                }
            ]
        },
        {
            'empresa': 'Freelance Investor - ',
            'fecha': 'December 2020/June 2022',
            'descripcion': [
                'Financial statement analysis',
                'Buying/selling stocks on the stock market',
                'Managing funds for third parties'
            ],
            'acordeon': [
                {
                    'titulo': 'Strengths I gained from this experience',
                    'texto': 'During my journey as an entrepreneur in the investment field, I applied most of the concepts learned during my studies on company analysis. I also developed sales skills by managing my own client portfolio and improved my negotiation skills by dealing with different types of people and their needs daily. The most crucial skill I developed was emotional management, especially under pressure when buying or selling stocks.'
                },
                {
                    'titulo': 'Reason for leaving',
                    'texto': 'I decided to pause this activity, at least regarding managing third-party funds, because I found the field of data science. If I could develop my skills in this field, I could combine finance and technology in the future. Therefore, I decided to focus on this new opportunity while still investing personally in the stock market.'
                }
            ]
        },
        {
            'empresa': 'Universidad del Bajío - ',
            'fecha': 'December 2020/June 2021 (internship)',
            'descripcion': [
                'Reading finance and economics books',
                'Developing teaching materials for the finance program'
            ],
            'acordeon': [
                {
                    'titulo': 'Strengths I gained from this experience',
                    'texto': 'The greatest strength I gained here was developing the habit of reading, thanks to the many books I had to read for developing teaching materials. My organizational skills also improved by meeting deadlines for delivering materials while working from home.'
                },
                {
                    'titulo': 'Reason for leaving',
                    'texto': 'I ended my work here because it was a temporary contract. When the period ended, the university was still developing, and they couldn’t offer me a permanent position, so I decided to seek new opportunities.'
                }
            ]
        },
        {
            'empresa': 'NexGlobal - ',
            'fecha': 'June 2019/June 2020 (internship)',
            'descripcion': [
                'Selling financial products focused on loans to SMEs',
                'Accounting analysis of SMEs to obtain the best possible credit',
                'Managing client portfolios',
                'Developing a website to automate the loan application process'
            ],
            'acordeon': [
                {
                    'titulo': 'Strengths I gained from this experience',
                    'texto': 'The two greatest strengths I gained here were, first, managing a client portfolio and creating sales strategies to offer loans to SMEs. Second, developing the website, which was my first experience in web development and opened the doors to programming.'
                },
                {
                    'titulo': 'Reason for leaving',
                    'texto': 'I ended my work here because, due to the pandemic, the company had to cease operations after a significant investment made before the quarantine.'
                }
            ]
        },
        {
            'empresa': 'Grupo Vama - ',
            'fecha': 'January 2019/June 2019 (internship)',
            'descripcion': [
                'Payroll and employee complaint management',
                'Managing the equipment needs of employees',
                'Hiring personnel for CEDIS'
            ],
            'acordeon': [
                {
                    'titulo': 'Strengths I gained from this experience',
                    'texto': 'The greatest strength I gained from working in HR was developing empathy. By addressing employees’ needs, I had to put myself in their shoes to offer the best solutions to their problems.'
                },
                {
                    'titulo': 'Reason for leaving',
                    'texto': 'I ended my internship here because I was looking for a company where I could develop my skills in finance, so I decided to seek new opportunities in other companies.'
                }
            ]
        },
        {
            'empresa': 'Camiones Laija - ',
            'fecha': 'February 2017/December 2018 (internship)',
            'descripcion': [
                'Managing the company’s accounting and payroll',
                'Managing personnel'
            ],
            'acordeon': [
                {
                    'titulo': 'Strengths I gained from this experience',
                    'texto': 'During my first work experience, the greatest strength I gained was responsibility. Being my first formal job, I had to adhere to schedules and assigned tasks. Managing personnel helped me develop communication skills, overcoming shyness when speaking with strangers. Also, handling accounting helped me develop organizational and numerical skills.'
                },
                {
                    'titulo': 'Reason for leaving',
                    'texto': 'I ended my first work experience due to a study-related issue. My classes started in the afternoon, conflicting with my work schedule.'
                }
            ]
        }
]

  enviarAlMenu() {
    this.router.navigate(['/menu']);
  }

}
