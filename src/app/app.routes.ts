import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { MenuComponent } from './menu/menu.component';

export const routes: Routes = [
    { path: '', redirectTo: '/landing', pathMatch: 'full' },
    {path: 'landing', component: LandingComponent},
    {path: 'menu',component: MenuComponent},
];
