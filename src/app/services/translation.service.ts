import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  constructor() { }

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
          element.innerHTML = translations[element.dataset['i18n']];
        });
      });
  }

}
