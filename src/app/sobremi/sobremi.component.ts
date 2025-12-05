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

  showModal=false;
  itemSeleccionado = null;
  idioma:string;
  loading = true;
  imagesLoaded: number = 0;

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


  enviarAlMenu() {
    this.router.navigate(['/menu'], { queryParamsHandling: 'preserve' });
  }
}
