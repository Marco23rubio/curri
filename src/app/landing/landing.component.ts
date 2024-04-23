import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [FormsModule, InputTextModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
})
export class LandingComponent {
  nombre: string;

  holamundo() {
    if (this.nombre.length == 0) {
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
          console.log('mover a la siguiente pagina');
        }
      });
    } else {
      console.log('mover a la siguiente con nombre');
    }
  }
}
