import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


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

  items = [
    {
      empresa: 'Coppel - ',
      fecha: 'Mayo 2022/Mayo 2024',
      descripcion: [
        'Desarrollo de Frontend web con Angular y TailwindCSS',
        'Desarrollo de Backend con PHP,Spring Boot',
        'Desarrollo de aplicaciones de escritorio con C++',
        'Manipulacion de datos con PostgreSQL y MySQL',
      ],
    },
    {
      empresa: 'Inversionista freelance - ',
      fecha: 'Diciembre 2020/Junio 2022',
      descripcion: [
        'Análisis de estados financieros',
        'Compra/venta de acciones en la bolsa de valores',
        'Manejo de fondos para terceros'
      ],
    },
    {
      empresa: 'Universidad del bajio - ',
      fecha: 'Diciembre 2020/Junio 2021 (prácticas)',
      descripcion: [
        'Lectura de libros de finanzas y economía',
        'Desarrollo del material didactico para la carrera de finanzas',
      ],
    },
    {
      empresa: 'NexGlobal - ',
      fecha: 'Junio 2019/Junio 2020 (prácticas)',
      descripcion: [
        'Venta de productos financieros enfocados a prestamos a pymes',
        'Análsis contable de pymes para obtencion del mejor crédito posible',
        'Manejo de cartera de clientes',
        'Desarrollo de página web para automatización del proceso de solicitud de créditos',
      ],
    },
    {
      empresa: 'Grupo Vama - ',
      fecha: 'Enero 2019/Junio 2019 (prácticas)',
      descripcion: [
        'Control de nómina y quejas de colaboradores',
        'Manejo de las necesidades de equipo de los colaboradores',
        'Contratación de personal para CEDIS'
      ],
    },
    {
      empresa: 'Camiones Laija - ',
      fecha: 'Febrero 2017/Diciembre 2018',
      descripcion: [
        'Control de contabilidad y nomina de la empresa',
        'Manejo del personal',
      ],
    }
  ]


}
