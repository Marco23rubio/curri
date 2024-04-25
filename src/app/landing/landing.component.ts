import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

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
    private dataService: DataService
  ) {}
  nombre: string;

  inputnombre() {
    
    if (this.nombre == null || this.nombre == undefined ||this.nombre.length == 0) {
      Swal.fire({
        title: '¿Desea avanzar sin un nombre?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si,adelante!',
        cancelButtonText: 'No,espera!',
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['/menu']);
          this.dataService.setNombre('');
        }
      });
    } else {
      this.dataService.setNombre(this.nombre);
      this.router.navigate(['/menu']);
    }
  }
}
