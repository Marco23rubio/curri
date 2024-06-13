import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  constructor() { }

  changeLanguage(language) {
    fetch(`assets/${language}.json`)
      .then(response => {
        return response.json();
      })
      .then(translations => {
        document.querySelectorAll('[data-i18n]').forEach((element: HTMLElement) => {
          element.innerHTML = translations[element.dataset['i18n']];
        });
      });
  }

}
