import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TranslationService } from '../services/translation.service';
import { LenguajeService } from '../services/lenguaje.service';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent {

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

  itemscol1 = [
    {
        'titulo': 'tc',
        'descripcion': 'dc',
        'imagen': 'https://res.cloudinary.com/dvzucfpbk/image/upload/v1717012161/amib_zqpjpz.png',
        'ruta': 'https://github.com/Marco23rubio/Cursos/tree/master/AMIB'
    },
    {
        'titulo': 'tc1',
        'descripcion': 'dc1',
        'imagen': 'https://res.cloudinary.com/dvzucfpbk/image/upload/v1717012161/bitcoin_yfyfsi.png',
        'ruta': 'https://github.com/Marco23rubio/Cursos/tree/master/Carrera%20Blockchain'
    },
    {
        'titulo': 'tc2', 
        'descripcion': 'dc2',
        'imagen': 'https://res.cloudinary.com/dvzucfpbk/image/upload/v1717012158/stock-market_rfw9ri.png',
        'ruta': 'https://github.com/Marco23rubio/Cursos/blob/master/Analisis_tecnico.jpeg'
    }
]

itemscol2 = [
    {
        'titulo': 'tc3',
        'descripcion': 'dc3',
        'imagen': 'https://res.cloudinary.com/dvzucfpbk/image/upload/v1717012158/rocket_irq2ye.png',
        'ruta': 'https://github.com/Marco23rubio/Cursos/tree/master/Carrera%2C%20creacion%20de%20Startups'
    },
    {
        'titulo': 'tc4',
        'descripcion': 'dc4',
        'imagen': 'https://res.cloudinary.com/dvzucfpbk/image/upload/v1717012159/team-management_vxpepp.png',
        'ruta': 'https://github.com/Marco23rubio/Cursos/blob/master/Competencias_gerenciales.jpeg'
    },
    {
        'titulo': 'tc5',
        'descripcion': 'dc5',
        'imagen': 'https://res.cloudinary.com/dvzucfpbk/image/upload/v1717012156/project-management_t7kjnr.png',
        'ruta': 'https://github.com/Marco23rubio/Cursos/blob/master/Iniciaci%C3%B3n_planificacionDeProyectos.pdf'
    }
]

itemscol3 = [
    {
        'titulo': 'tc6',
        'descripcion': 'dc6',
        'imagen': 'https://res.cloudinary.com/dvzucfpbk/image/upload/v1717012148/database-storage_wxel4e.png',
        'ruta': 'https://github.com/Marco23rubio/Cursos/tree/master/Bases%20de%20datos'
    },
    {
        'titulo': 'tc7',
        'descripcion': 'dc7',
        'imagen': 'https://res.cloudinary.com/dvzucfpbk/image/upload/v1717012148/coding-language_lg6ymf.png',
        'ruta': 'https://github.com/Marco23rubio/Cursos/tree/master/Fundamentos%20de%20programaci%C3%B3n'
    },
    {
        'titulo': 'tc8',
        'descripcion': 'dc8',
        'imagen': 'https://res.cloudinary.com/dvzucfpbk/image/upload/v1717012148/excel_j2gyre.png',
        'ruta': 'https://github.com/Marco23rubio/Cursos/tree/master/Excel'
    },
    {
        'titulo': 'tc9',
        'descripcion': 'dc9',
        'imagen': 'https://res.cloudinary.com/dvzucfpbk/image/upload/v1717012148/engineering_v7scrs.png',
        'ruta': 'https://github.com/Marco23rubio/Cursos/blob/master/EngineeringProjectManagement.pdf'
    }
]

  enviarAlMenu() {
    this.router.navigate(['/menu']);
  }

}
