import { NgModule } from '@angular/core';
import { CommonModule,HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { MenuComponent } from './menu/menu.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { EducacionComponent } from './educacion/educacion.component';
import { CursosComponent } from './cursos/cursos.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { SobremiComponent } from './sobremi/sobremi.component';
import { ContactoComponent } from './contacto/contacto.component';
import { routes } from './app.routes'; // Importa las rutas

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    RouterOutlet,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    AppComponent,
    LandingComponent,
    MenuComponent,
    ExperienciaComponent,
    EducacionComponent,
    CursosComponent,
    ProyectosComponent,
    SobremiComponent,
    ContactoComponent
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ]
})
export class AppModule { }
