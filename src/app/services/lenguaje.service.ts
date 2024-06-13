import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LenguajeService {

  private currentLanguage: string;

  constructor() { }

  setLanguage(language: string) {
    this.currentLanguage = language;
  }

  getLanguage() {
    return this.currentLanguage;
  }

}
