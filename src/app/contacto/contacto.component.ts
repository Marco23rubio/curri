import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, NgForm } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { CommonModule } from '@angular/common';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2'

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

  constructor() {
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


  enviarWhatsapp(form: NgForm) {
    form.control.markAllAsTouched();
    if(form.valid){
      if(this.botonselecto == "whatsapp"){
        this.loading = true;
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
        this.loading = false;
      }else {
        let templateParams = {
          nombre: this.nombre,
          apellido: this.apellido,
          mensaje: this.mensaje,
          email: this.email
        };
        this.loading = true;
        emailjs.send('service_a26ggfa', 'template_2rur26h', templateParams, 'x2Jdsv2Z8pN7-PxpY')
          .then((response) => {
            Swal.fire({
              title: 'Correo enviado!',
              text: 'Aparecera en tu bandeja de entrada despues de recibir respuesta, gracias por contactarme',
              icon: 'success',
              iconColor: 'green',
              background: '#1E3A8A',
              color: 'white',
            });
            this.loading = false;
          })
          .catch((error) => {
            Swal.fire({
              title: 'Error!',
              text: 'Hubo un error al enviar el correo',
              icon: 'error',
              iconColor:'red',
              background: '#1E3A8A',
              color: 'white',
            });
          });
      }
    }else{
      Swal.fire({
        title: 'UPS!',
        text: 'Favor de verificar los campos, parece haber un error',
        icon: 'warning',
        iconColor:'yellow',
        background: '#1E3A8A',
        color: 'white',
      });
    }
    form.reset();
  }

  botonSeleccionado(value:string){
    this.botonselecto = value;
  }
}
