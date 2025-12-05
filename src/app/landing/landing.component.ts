import { Component, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { Router } from '@angular/router';
import { TranslationService } from '../services/translation.service';
import { LenguajeService } from '../services/lenguaje.service';
import { CommonModule } from '@angular/common';

type Lang = 'es' | 'en';

@Component({
  selector: 'app-landing',
  standalone: true,
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
  imports: [FormsModule, InputTextModule,CommonModule]
})
export class LandingComponent {
  showDropdown = false;
  lenguaje = 'Español';

 
  bgUrl  = 'https://res.cloudinary.com/dvzucfpbk/image/upload/v1717012149/header_g8mhsv.png';
  heroUrl = 'https://res.cloudinary.com/dvzucfpbk/image/upload/v1717011997/imagenlanding_sahffw.webp';


  isReady = false;

  constructor(
    private router: Router,
    private translationService: TranslationService,
    private renderer: Renderer2,
    private lenguajeService: LenguajeService
  ) {}

  ngOnInit() {

    const lang = this.lenguajeService.getLanguage();
    this.applyLanguage(lang);


    this.renderer.listen('document', 'click', (e: Event) => {
      if (this.showDropdown) this.showDropdown = false;
    });


    Promise.all([this.preload(this.bgUrl), this.preload(this.heroUrl)])
      .then(() => { this.isReady = true; });
  }

  private preload(src: string): Promise<void> {
    return new Promise<void>((resolve) => {
      const img = new Image();
      img.onload = () => resolve();
      img.onerror = () => resolve(); 
      img.src = src;
    });
  }

  enviarAlMenu() {
    const lang = this.lenguajeService.getLanguage();
    this.router.navigate(['/menu'], {
      queryParams: { lang },
      queryParamsHandling: 'merge'
    });
  }

  changeLanguage(language: Lang, event?: Event) {
    event?.stopPropagation();
    this.lenguajeService.setLanguage(language);
    this.applyLanguage(language);
    this.showDropdown = false;
  }

  private applyLanguage(language: Lang) {
    this.translationService.changeLanguage(language);
    this.lenguaje = language === 'es' ? 'Español' : 'English';
  }

  toggleDropdown() {
    event.stopPropagation();
    this.showDropdown = !this.showDropdown;
  }
}
