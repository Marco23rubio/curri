import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TranslationService } from '../services/translation.service';
import { LenguajeService } from '../services/lenguaje.service';

@Component({
  selector: 'app-educacion',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './educacion.component.html',
  styleUrl: './educacion.component.css'
})
export class EducacionComponent {

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
        'escuela': 'UVM - ',
        'fecha': 'fec7',
        'descripcion': [
            'pd0',
            'pd1',
            'pd2',
            'pd3',
            'pd4',
        ]
    },
    {
        'escuela': 'Platzi - ',
        'fecha': 'fec8',
        'descripcion': [
            'pd5',
            'pd6',
            'pd7',
        ],
    },
    {
        'escuela': 'Universidad Tecmilenio - ',
        'fecha': 'fec9',
        'descripcion': [
            'pd8',
            'pd9',
            'pd10',
            'pd11',
            'pd12',
        ],
        'acordeon': [
            {
                'titulo': 'tedu',
                'texto': 'tedu1',
            }
        ]
    },
    {
        'escuela': 'Colegio Sinaloa Horizontes - ',
        'fecha': 'fec10',
        'descripcion': [
            'pd13',
            'pd14',
        ],
    }
]

  enviarAlMenu() {
    this.router.navigate(['/menu']);
  }
}
