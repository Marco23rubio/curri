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
    private lenguajeService: LenguajeService
  ) {}

  idioma:string;
  acordeonAbierto: boolean[] = [];
  acordeonInternoAbierto: boolean[][] = [];
  
  ngOnInit() {
    const savedLanguage = localStorage.getItem('language');

    if (savedLanguage) {
      this.idioma = savedLanguage;
    } else {
      this.idioma = this.lenguajeService.getLanguage();
    }
    this.changeLanguage(this.idioma);

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

  changeLanguage(language) {
    this.translationService.changeLanguage(language);
    localStorage.setItem('language', language);
  }

  items = [
    {
        'empresa': 'Coppel - ',
        'fecha': 'fec1',
        'descripcion': [
            'p1',
            'p2',
            'p3',
            'p4',
            'p5'
        ],
        'acordeon': [
            {
                'titulo': 'titulo1',
                'texto': 'texto1',
            },
            {
                'titulo': 'titulo2',
                'texto': 'texto2',
            },
        ]
    },
    {
        'empresa': 'Inversionista freelance - ',
        'fecha': 'fec2',
        'descripcion': [
            'p6',
            'p7',
            'p8'
        ],
        'acordeon': [
            {
                'titulo': 'titulo1',
                'texto': 'texto3',
            },
            {
                'titulo': 'titulo2',
                'texto': 'texto4',
            },
        ]
    },
    {
        'empresa': 'Universidad del Bajío - ',
        'fecha': 'fec3',
        'descripcion': [
            'p9',
            'p10',
        ],
        'acordeon': [
            {
                'titulo': 'titulo1',
                'texto': 'texto5',
            },
            {
                'titulo': 'titulo2',
                'texto': 'texto6',
            },
        ]
    },
    {
        'empresa': 'NexGlobal - ',
        'fecha': 'fec4',
        'descripcion': [
            'p11',
            'p12',
            'p13',
            'p14',
        ],
        'acordeon': [
            {
                'titulo': 'titulo1',
                'texto': 'texto7',
            },
            {
                'titulo': 'titulo2',
                'texto': 'texto8',
            },
        ]
    },
    {
        'empresa': 'Grupo Vama - ',
        'fecha': 'fec5',
        'descripcion': [
            'p15',
            'p16',
            'p17'
        ],
        'acordeon': [
            {
                'titulo': 'titulo1',
                'texto': 'texto9',
            },
            {
                'titulo': 'titulo2',
                'texto': 'texto10',
            },
        ]
    },
    {
        'empresa': 'Camiones Laija - ',
        'fecha': 'fec6',
        'descripcion': [
            'p18',
            'p19',
        ],
        'acordeon': [
            {
                'titulo': 'titulo1',
                'texto': 'texto11',
            },
            {
                'titulo': 'titulo2',
                'texto': 'texto12',
            },
        ]
    }
]


  enviarAlMenu() {
    this.router.navigate(['/menu']);
  }

}
