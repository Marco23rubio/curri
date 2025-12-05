import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TranslationService } from '../services/translation.service';
import { LenguajeService } from '../services/lenguaje.service';

@Component({
  selector: 'app-sobremi',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './sobremi.component.html',
  styleUrl: './sobremi.component.css'
})
export class SobremiComponent {

  constructor(
    private router: Router,
    private translationService: TranslationService,
    private lenguajeService: LenguajeService
  ) {}

  showModal = false;
  itemSeleccionado = null;
  idioma: 'es' | 'en';
  loading = true;
  imagesLoaded = 0;

  ngOnInit() {

    const lang = this.lenguajeService.getLanguage();
    this.idioma = lang;


    this.translationService.changeLanguage(lang);
  }

  changeLanguage(language: 'es' | 'en') {
    this.lenguajeService.setLanguage(language);

    this.translationService.changeLanguage(language);

    this.idioma = language;
  }

  enviarAlMenu() {
    this.router.navigate(['/menu'], { queryParamsHandling: 'preserve' });
  }
}
