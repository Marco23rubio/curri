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
  nombre: string;

  enviarAlMenu() {
    this.router.navigate(['/menu']);
  }
}
