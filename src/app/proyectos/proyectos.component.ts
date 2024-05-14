import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent {


  constructor(
    private router: Router,
  ) {}

  items = [
    {
      descripcion: 'Texto prueba chiquito',
      titulo: 'Proyecto 1',
      imagen: 'assets/mailbox.png',
      link: 'https://github.com/Marco23rubio/Cursos'
    },
    {
      descripcion: 'Texto prueba',
      titulo: 'Proyecto 2',
      md :'col-span-2',
      imagen: 'assets/excel.png',
      link: 'https://github.com/Marco23rubio/Cursos'
    },
    {
      descripcion: 'Texto prueba',
      titulo: 'Proyecto 3',
      md :'col-span-2',
      imagen: 'assets/excel.png',
      link: 'https://github.com/Marco23rubio/Cursos'
    },
    {
      descripcion: 'Texto prueba chiquito',
      titulo: 'Proyecto 4',
      imagen: 'assets/mailbox.png',
      link: 'https://github.com/Marco23rubio/Cursos'
    },
    {
      descripcion: 'Texto prueba chiquito',
      titulo: 'Proyecto 5',
      imagen: 'assets/mailbox.png',
      link: 'https://github.com/Marco23rubio/Cursos'
    },
    {
      descripcion: 'Texto prueba',
      titulo: 'Proyecto 6',
      md :'col-span-2',
      imagen: 'assets/excel.png',
      link: 'https://github.com/Marco23rubio/Cursos'
    },
  ]

  enviarAlMenu() {
    this.router.navigate(['/menu']);
  }
  
}
