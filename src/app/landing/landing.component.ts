import { Component,Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { Router } from '@angular/router';
import { TranslationService } from '../services/translation.service';
import { LenguajeService } from '../services/lenguaje.service';



@Component({
    selector: 'app-landing',
    standalone: true,
    templateUrl: './landing.component.html',
    styleUrl: './landing.component.css',
    imports: [FormsModule, InputTextModule]
})
export class LandingComponent {

  showDropdown = false;
  lenguaje = 'Español'

  constructor(
    private router: Router,
    private translationService: TranslationService,
    private renderer: Renderer2,
    private lenguajeService: LenguajeService
  ) {}

  ngOnInit() {
    const savedLanguage = localStorage.getItem('language');
    
    if (savedLanguage) {
      this.changeLanguage(savedLanguage);
    }
    this.renderer.listen('window', 'click', (e: Event) => {
      if (this.showDropdown) {
        this.toggleDropdown();
      }
    });
  }

  enviarAlMenu() {
    this.router.navigate(['/menu']);
  }

  changeLanguage(language) {
    this.lenguajeService.setLanguage(language);
    this.translationService.changeLanguage(language);
    this.showDropdown = false;
    if (language === 'es') {
      this.lenguaje = 'Español';
    } else {
      this.lenguaje = 'English';
    }
    localStorage.setItem('language', language);
  }

  toggleDropdown() {
    event.stopPropagation();
    this.showDropdown = !this.showDropdown;
  }

}
