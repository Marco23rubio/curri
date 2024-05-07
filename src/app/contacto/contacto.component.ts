import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, NgForm } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { CommonModule } from '@angular/common';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [
    InputTextModule,
    FormsModule,
    InputNumberModule,
    CommonModule,
  ],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

  constructor(private router: Router) {
    this.botonselecto = "whatsapp";
  }

  nombre: string;
  apellido: string;
  email:string;
  mensaje: string;
  botonselecto:string;
  loading = false;

  ngOnInit(): void {
  }


  async enviarMensaje(form: NgForm) {
    form.control.markAllAsTouched();
    if(form.valid){
      if(this.botonselecto == "whatsapp"){
        let whatsappUrl = `https://wa.me/5216672528776?text=${encodeURIComponent('Mi nombre es '+this.nombre+' '+this.apellido +' '+ this.mensaje)}`;
        window.open(whatsappUrl, '_blank');
        Swal.fire({
          title: 'Whatsapp enviado!',
          text: 'Pronto respondere, gracias por contactarme',
          icon: 'success',
          iconColor: 'green',
          background: '#1E3A8A',
          color: 'white',
        });
        form.reset();
      }else {
        this.loading = true;
        let templateParams = {
          nombre: this.nombre,
          apellido: this.apellido,
          mensaje: this.mensaje,
          email: this.email
        };
        try {
          await emailjs.send('service_a26ggfa', 'template_2rur26h', templateParams, 'x2Jdsv2Z8pN7-PxpY');
          Swal.fire({
            title: 'Correo enviado!',
            text: 'Aparecera en tu bandeja de entrada despues de recibir respuesta, gracias por contactarme',
            icon: 'success',
            iconColor: 'green',
            background: '#1E3A8A',
            color: 'white',
          });
        } catch (error) {
          Swal.fire({
            title: 'Error!',
            text: 'Hubo un error al enviar el correo',
            icon: 'error',
          });
        } finally {
          this.loading = false;
          form.reset();
        }
      }
  }
  else{
      Swal.fire({
        title: 'UPS!',
        text: 'Favor de verificar los campos, parece que hay campos vacios o erroneos',
        icon: 'warning',
        iconColor:'yellow',
        background: '#1E3A8A',
        color: 'white',
      });
    }
    this.loading = false;
  }

  botonSeleccionado(value:string){
    this.botonselecto = value;
  }

  regresar(){
    this.router.navigate(['/menu']);
  }
}
