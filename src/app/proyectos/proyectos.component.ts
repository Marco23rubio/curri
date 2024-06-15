import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TranslationService } from '../services/translation.service';
import { LenguajeService } from '../services/lenguaje.service';

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
    private translationService: TranslationService,
    private lenguajeService: LenguajeService
  ) {}

  idioma:string;

  ngOnInit() {
    const savedLanguage = localStorage.getItem('language');

    if (savedLanguage) {
      this.idioma = savedLanguage;
    } else {
      this.idioma = this.lenguajeService.getLanguage();
    }
    this.changeLanguage(this.idioma);
  }

  changeLanguage(language) {
    this.translationService.changeLanguage(language);
    localStorage.setItem('language', language);
  }
  items = [
    {
      descripcion: 'dp',
      titulo: 'tp',
      imagen: 'https://res.cloudinary.com/dvzucfpbk/image/upload/v1717012148/curri1_aauw3o.jpg',
      link: 'https://github.com/Marco23rubio/curri'
    },
    {
      descripcion: 'dp1',
      titulo: 'tp1',
      md: 'col-span-2',
      imagen: 'https://res.cloudinary.com/dvzucfpbk/image/upload/v1717012154/paneles4_cnzedo.jpg',
      link: 'https://github.com/Marco23rubio/Solares'
    },
    {
      descripcion: 'dp2',
      titulo: 'tp2',
      md: 'col-span-2',
      imagen: 'https://res.cloudinary.com/dvzucfpbk/image/upload/v1717012151/jupyter2_swytgs.png',
      link: 'https://github.com/Marco23rubio/JupyterNotebooks'
    },
    {
      descripcion: 'dp3',
      titulo: 'tp3',
      imagen: 'https://res.cloudinary.com/dvzucfpbk/image/upload/v1717012150/hr4_yzudjs.png',
      link: 'https://github.com/Marco23rubio/HackerRank'
    },
    {
      descripcion: 'dp4',
      titulo: 'tp4',
      imagen: 'https://res.cloudinary.com/dvzucfpbk/image/upload/v1717012156/py_ybmsas.webp',
      link: 'https://github.com/Marco23rubio/Python'
    },
    {
      descripcion: 'dp5',
      titulo: 'tp5',
      md: 'col-span-2',
      imagen: 'https://res.cloudinary.com/dvzucfpbk/image/upload/v1717012155/prog3_uky7qr.jpg',
      link: 'https://github.com/Marco23rubio/fundamentos-de-programacion'
    }
  ];

  enviarAlMenu() {
    this.router.navigate(['/menu']);
  }
  
}
