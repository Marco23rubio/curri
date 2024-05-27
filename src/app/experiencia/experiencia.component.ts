import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

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
  ) {}

  acordeonAbierto: boolean[] = [];
  acordeonInternoAbierto: boolean[][] = [];
  
  ngOnInit() {
    this.items.forEach((item, i) => {
      this.acordeonAbierto[i] = false;
      this.acordeonInternoAbierto[i] = [];
      item.acordeon.forEach((_, j) => {
        this.acordeonInternoAbierto[i][j] = false;
      });
    });
  }

  toggleAcordeon(i: number) {
    this.acordeonAbierto[i] = !this.acordeonAbierto[i];
  }

  toggleAcordeonInterno(i: number, j: number) {
    this.acordeonInternoAbierto[i][j] = !this.acordeonInternoAbierto[i][j];
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
            'Uso de metodologías ágiles como Scrum',
        ],
        'acordeon': [
            {
                'titulo': 'Fortalezas que obtuve de esta experiencia',
                'texto': 'Entre las fortalezas que obtuve en este puesto se encuentra la capacidad de encontrar diferentes maneras de resolver un problema, desde el uso de la lógica hasta la investigación de documentación. De igual manera, mi capacidad de adaptación se vio aumentada, ya que no solo era el habituarse a diferentes tecnologías, sino que al llegar con casi nulo conocimiento en programación, me vi en la necesidad de aprender de forma acelerada para el cumplimiento de las tareas.',
            },
            {
                'titulo': 'Causa de desvinculación',
                'texto': 'Los motivos por los que decidí finalizar con mis labores aquí fueron que, en mi búsqueda de empezar a desarrollarme como científico de datos, pese a haber obtenido una posición en la empresa, el cambio de área se vio finalizado debido a situaciones internas que afectaron de manera grave a la compañía. Por lo tanto, decidí buscar nuevas oportunidades de crecimiento en otras empresas.',
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
        'fecha': 'Febrero 2017/Diciembre 2018',
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


  enviarAlMenu() {
    this.router.navigate(['/menu']);
  }

}
