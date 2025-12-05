// app.config.ts
import { ApplicationConfig, APP_INITIALIZER } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { CookieService } from 'ngx-cookie-service';
import { LenguajeService } from './services/lenguaje.service';
import { TranslationService } from './services/translation.service';

function initLangFactory(langSvc: LenguajeService, i18n: TranslationService) {
  return () => {
    const lang = langSvc.getLanguage();              
    const r: any = i18n.changeLanguage(lang);         
    if (r?.then) return r as Promise<any>;           
    return Promise.resolve(true);
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
