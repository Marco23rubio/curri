// app.config.ts
import { ApplicationConfig, APP_INITIALIZER } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { CookieService } from 'ngx-cookie-service';
import { LenguajeService } from './services/lenguaje.service';
import { TranslationService } from './services/translation.service';

function initLangFactory(langSvc: LenguajeService, i18n: TranslationService) {
  return () => {
    const lang = langSvc.getLanguage();               // 'es' | 'en' ya resuelto (URL/cookie/LS)
    const r: any = i18n.changeLanguage(lang);         // puede ser void | Promise | Observable
    if (r?.then) return r as Promise<any>;            // Promise -> espera
    // Si devuelve Observable, podrías transformarlo a Promise con firstValueFrom
    return Promise.resolve(true);                     // void -> continúa
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    CookieService,
    {
      provide: APP_INITIALIZER,
      useFactory: initLangFactory,
      deps: [LenguajeService, TranslationService],
      multi: true,
    },
  ],
};
