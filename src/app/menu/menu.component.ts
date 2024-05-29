import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  constructor(
  ) {}

  items = [
    {
      titulo: 'Experiencia laboral',
      imagen: 'https://res.cloudinary.com/dvzucfpbk/image/upload/v1717012159/training_sa4c51.png',
      alt: 'Experiencia laboral',
      link: 'experiencia',
      hover:'hover:border-green-500/10 hover:shadow-green-500'
    },
    {
      titulo: 'Educación',
      imagen: 'https://res.cloudinary.com/dvzucfpbk/image/upload/v1717012157/reading_delwlq.png',
      alt: 'Educación',
      link: 'educacion',
      hover:'hover:border-yellow-500/10 hover:shadow-yellow-500'
    },
    {
      titulo: 'Cursos y certificaciones',
      imagen: 'https://res.cloudinary.com/dvzucfpbk/image/upload/v1717012147/certificate_ez94z4.png',
      alt: 'Cursos y certificaciones',
      link: 'cursos',
      hover:'hover:border-pink-500/10 hover:shadow-pink-500'
    },
    {
      titulo: 'Proyectos personales',
      imagen: 'https://res.cloudinary.com/dvzucfpbk/image/upload/v1717012160/web-programming_vixtdx.png',
      alt: 'Proyectos personales',
      link: 'proyectos',
      hover:'hover:border-red-500/10 hover:shadow-red-500'
    },
    {
      titulo: 'Acerca de mí',
      imagen: 'https://res.cloudinary.com/dvzucfpbk/image/upload/v1717012160/young-man_wmt5wr.png',
      alt:'Acerca de mí',
      link: 'sobremi',
      hover:'hover:border-orange-500/10 hover:shadow-orange-500'
    },
    {
      titulo: 'Contacto',
      imagen: 'https://res.cloudinary.com/dvzucfpbk/image/upload/v1717012147/chat_ec0e9z.png',
      alt: 'Contacto',
      link: 'contacto',
      hover:'hover:border-gray-500/10 hover:shadow-gray-500'
    }
  ]

  ngOnInit() {
  }

  descargarCV(downloadLink: HTMLAnchorElement) {
    try {
      downloadLink.click();
      Swal.fire({
        title: 'Gracias por tu interés, descarga finalizada.',
        icon: 'success',
        iconColor: 'white',
        background: '#1E3A8A',
        color: 'white',
      });
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: 'Ocurrió un error al descargar el CV.',
        icon: 'error',
        iconColor:'red',
        background: '#1E3A8A',
        color: 'white',
      });
    }
  }
}
