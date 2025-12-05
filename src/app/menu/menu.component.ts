import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { TranslationService } from '../services/translation.service';
import { LenguajeService } from '../services/lenguaje.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {

  idioma: 'es' | 'en' = 'es';
  ready = false;

  imagenesCargadas = 0;
  totalImagenes = 0;

  items = [
    {
      titulo: 'Sobre Mi',
      tituloIngles: 'About Me',
      imagen: 'https://res.cloudinary.com/dvzucfpbk/image/upload/v1717012160/young-man_wmt5wr.png',
      alt: 'Acerca de mí',
      link: '/sobremi',
      hover: 'hover:border-orange-500/10 hover:shadow-orange-500',
      descripcionEs: 'Aqui conocerás más sobre mis habilidades y objetivos que me impulsan en mi carrera profesional.',
      descripcionEn: 'Here you will learn more about my skills and goals that drive me in my professional career.'
    },
    {
      titulo: 'Experiencia Laboral',
      tituloIngles: 'Work Experience',
      imagen: 'https://res.cloudinary.com/dvzucfpbk/image/upload/v1717012159/training_sa4c51.png',
      alt: 'Experiencia laboral',
      link: '/experiencia',
      hover: 'hover:border-green-500/10 hover:shadow-green-500',
      descripcionEs: 'Explora esta sección para ver más detalles y ejemplos concretos de mi trabajo.',
      descripcionEn: 'Explore this section to see more details and concrete examples of my work.'
    },
    {
      titulo: 'Educación',
      tituloIngles: 'Education',
      imagen: 'https://res.cloudinary.com/dvzucfpbk/image/upload/v1717012157/reading_delwlq.png',
      alt: 'Educación',
      link: '/educacion',
      hover: 'hover:border-yellow-500/10 hover:shadow-yellow-500',
      descripcionEs: 'Aqui se encuentran mis logros académicos y formativos que respaldan mi desarrollo profesional.',
      descripcionEn: 'Here you will find my academic and training achievements that support my professional development.'
    },
    // {
    //   titulo: 'Cursos y certificaciones',
    //   tituloIngles: 'Courses and certifications',
    //   imagen: 'https://res.cloudinary.com/dvzucfpbk/image/upload/v1717012147/certificate_ez94z4.png',
    //   alt: 'Cursos y certificaciones',
    //   link: '/cursos',
    //   hover: 'hover:border-pink-500/10 hover:shadow-pink-500'
    // },
    {
      titulo: 'Proyectos',
      tituloIngles: 'Personal projects',
      imagen: 'https://res.cloudinary.com/dvzucfpbk/image/upload/v1717012160/web-programming_vixtdx.png',
      alt: 'Proyectos personales',
      link: '/proyectos',
      hover: 'hover:border-red-500/10 hover:shadow-red-500',
      descripcionEs: 'Aqui observarás mis proyectos que demuestran mis habilidades prácticas y creatividad.',
      descripcionEn: 'Here you will see my projects that demonstrate my practical skills and creativity.'
    },

    {
      titulo: 'Contacto',
      tituloIngles: 'Contact',
      imagen: 'https://res.cloudinary.com/dvzucfpbk/image/upload/v1717012147/chat_ec0e9z.png',
      alt: 'Contacto',
      link: '/contacto',
      hover: 'hover:border-gray-500/10 hover:shadow-gray-500',
      descripcionEs: 'Entra aqui para ponerte comunicarte conmigo.',
      descripcionEn: 'Enter here to get in touch with me.'
    }
  ];

  constructor(
    private router: Router,
    private translationService: TranslationService,
    private lenguajeService: LenguajeService
  ) {
    this.totalImagenes = this.items.length;
  }

  ngOnInit() {
    const lang = this.lenguajeService.getLanguage();
    this.translationService.changeLanguage(lang);
    this.idioma = lang;

  }

  onImageLoad() {
    this.imagenesCargadas++;
    if (this.imagenesCargadas >= this.totalImagenes) {
      this.ready = true;
    }
  }

  onImageLoadError() {
    
    this.imagenesCargadas++;
    if (this.imagenesCargadas >= this.totalImagenes) {
      this.ready = true;
    }
  }

  enviarAexp(link: string) {
    this.router.navigate([link], { queryParamsHandling: 'preserve' });
  }

  descargarCV(downloadLink: HTMLAnchorElement, downloadLink2: HTMLAnchorElement) {
    try {
      let title = '';
      if (this.idioma === 'es') {
        title = 'Gracias por tu interés, descarga finalizada.';
        downloadLink.click();
      } else {
        title = 'Thanks for your interest, download finished.';
        downloadLink2.click();
      }
      Swal.fire({
        title: title,
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
        iconColor: 'red',
        background: '#1E3A8A',
        color: 'white',
      });
    }
  }

  changeLanguage(language: 'es' | 'en') {
    this.lenguajeService.setLanguage(language);
    this.translationService.changeLanguage(language);
    this.idioma = language;
  }
}
