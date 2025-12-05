import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { MenuComponent } from './menu/menu.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { EducacionComponent } from './educacion/educacion.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { SobremiComponent } from './sobremi/sobremi.component';
import { ContactoComponent } from './contacto/contacto.component';

export const routes: Routes = [
    {path:'', redirectTo: '/landing', pathMatch: 'full' },
    {path:'landing', component: LandingComponent},
    {path:'menu',component: MenuComponent},
    {path:'experiencia',component:ExperienciaComponent},
    {path:'educacion',component:EducacionComponent},
    {path:'proyectos',component:ProyectosComponent},
    {path:'sobremi',component:SobremiComponent},
    {path:'contacto',component:ContactoComponent},
    {path:'**', redirectTo: '/menu' }
];
