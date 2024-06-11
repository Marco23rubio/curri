import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { Router } from '@angular/router';


@Component({
    selector: 'app-landing',
    standalone: true,
    templateUrl: './landing.component.html',
    styleUrl: './landing.component.css',
    imports: [FormsModule, InputTextModule]
})
export class LandingComponent {

  constructor(
    private router: Router,
  ) {}

  enviarAlMenu() {
    this.router.navigate(['/menu']);
  }

  changeLanguage(language) {
    console.log(`Changing language to ${language}`);
    fetch(`assets/${language}.json`)
      .then(response => {
        console.log(`Fetched assets/${language}.json`, response);
        return response.json();
      })
      .then(translations => {
        console.log(`Translations:`, translations);
        document.querySelectorAll('[data-i18n]').forEach((element: HTMLElement) => {
          console.log(`Updating element:`, element);
          element.textContent = translations[element.dataset['i18n']];
        });
      });
  }
}
