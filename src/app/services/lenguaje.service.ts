// src/app/services/lenguaje.service.ts
import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { DOCUMENT } from '@angular/common';

type Lang = 'es' | 'en';

@Injectable({ providedIn: 'root' })
export class LenguajeService {
  private readonly COOKIE_KEY = 'language';
  private readonly LOCAL_KEY = 'language';
  private readonly DEFAULT: Lang = 'es';

  private languageSubject: BehaviorSubject<Lang>;

  /** Observable opcional para que otros componentes reaccionen a cambios */
  public language$;

  constructor(
    private cookie: CookieService,
    @Inject(DOCUMENT) private document: Document
  ) {
    const initial = this.initLanguage();
    this.languageSubject = new BehaviorSubject<Lang>(initial);
    this.language$ = this.languageSubject.asObservable();

    // Si la URL no trae ?lang, lo agregamos con el valor inicial (sin recargar)
    this.syncUrlParam(initial, true);
  }

  /** Cambia y persiste el idioma */
  setLanguage(language: Lang): void {
    this.languageSubject.next(language);
    this.persist(language);
    this.updateHtmlLang(language);
    // Actualiza/impone ?lang en la URL (sin recargar)
    this.syncUrlParam(language);
  }

  /** Obtiene el idioma actual (siempre 'es' | 'en') */
  getLanguage(): Lang {
    return this.languageSubject.value;
  }

  // ----------------- Privados -----------------

  /** Orden: URL (?lang) -> Cookie -> localStorage -> navegador -> DEFAULT */
  private initLanguage(): Lang {
    const urlLang = this.getLangFromUrl();
    if (urlLang) {
      // Persistimos en microtarea para no bloquear la construcción
      queueMicrotask(() => this.persist(urlLang));
      this.updateHtmlLang(urlLang);
      return urlLang;
    }

    const fromCookie = this.cookie.get(this.COOKIE_KEY);
    if (this.isLang(fromCookie)) {
      this.updateHtmlLang(fromCookie);
      return fromCookie;
    }

    const fromLocal = this.safeLocalGet(this.LOCAL_KEY);
    if (this.isLang(fromLocal)) {
      this.updateHtmlLang(fromLocal);
      return fromLocal;
    }

    const nav = (navigator.language || '').toLowerCase();
    const guess: Lang = nav.startsWith('es') ? 'es' : 'en';
    this.updateHtmlLang(guess);
    return guess ?? this.DEFAULT;
  }

  private persist(lang: Lang): void {
    // localStorage (defensivo)
    this.safeLocalSet(this.LOCAL_KEY, lang);

    // Cookie 1 año; Secure solo en HTTPS; SameSite Lax por defecto
    const isHttps = this.document?.location?.protocol === 'https:';
    this.cookie.set(this.COOKIE_KEY, lang, 365, '/', undefined, isHttps, 'Lax');
  }

  private updateHtmlLang(lang: Lang): void {
    try { this.document.documentElement.setAttribute('lang', lang); } catch {}
  }

  private getLangFromUrl(): Lang | null {
    try {
      const params = new URLSearchParams(window.location.search);
      const q = params.get('lang');
      return this.isLang(q) ? q : null;
    } catch {
      return null;
    }
  }

  /** Mantiene el query param ?lang=es|en en la URL sin recargar */
  private syncUrlParam(lang: Lang, onlyIfMissing = false) {
    try {
      const href = this.document?.location?.href ?? window.location.href;
      const url = new URL(href);
      if (onlyIfMissing && url.searchParams.has('lang')) return;
      url.searchParams.set('lang', lang);
      history.replaceState(null, '', url.toString());
    } catch {
      // no-op
    }
  }

  private isLang(v: unknown): v is Lang {
    return v === 'es' || v === 'en';
  }

  private safeLocalSet(k: string, v: string): void {
    try { localStorage.setItem(k, v); } catch {}
  }

  private safeLocalGet(k: string): string | null {
    try { return localStorage.getItem(k); } catch { return null; }
  }
}
