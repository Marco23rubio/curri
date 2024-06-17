import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, NgForm } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { CommonModule } from '@angular/common';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
import { LenguajeService } from '../services/lenguaje.service';
import { TranslationService } from '../services/translation.service';

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

  constructor(private router: Router,
    private translationService: TranslationService,
    private lenguajeService: LenguajeService
  ) {
    this.botonselecto = "whatsapp";
  }

  nombre: string;
  apellido: string;
  email:string;
  mensaje: string;
  botonselecto:string;
  loading = false;
  idioma:string;

  ngOnInit(): void {
    const savedLanguage = localStorage.getItem('language');

    if (savedLanguage) {
      this.idioma = savedLanguage;
    } else {
      this.idioma = this.lenguajeService.getLanguage();
    }
    this.changeLanguage(this.idioma);
  }

  changeLanguage(language) {
    this.translationService.changeLanguage(language);
    localStorage.setItem('language', language);
  }
  
  async enviarMensaje(form: NgForm) {
    let titlew = '';
    let textw = '';
    let titlec = '';
    let textc = '';
    let texte = '';
    let textf = '';
    if(this.idioma == 'es'){
      titlew = 'Whatsapp enviado!';
      textw = 'Pronto respondere, gracias por contactarme';
      titlec = 'Correo enviado!';
      textc = 'Aparecera en tu bandeja de entrada despues de recibir respuesta, gracias por contactarme';
      texte = 'Hubo un error al enviar el correo';
      textf = 'Favor de verificar los campos, parece que hay campos vacios o erroneos';
    }
    else{
      titlew = 'Whatsapp sent!';
      textw = 'I will respond soon, thank you for contacting me';
      titlec = 'Email sent!';
      textc = 'It will appear in your inbox after receiving a response, thank you for contacting me';
      texte = 'There was an error sending the email';
      textf = 'Please check the fields, it seems that there are empty or incorrect fields';
    }
    form.control.markAllAsTouched();
    if(form.valid){
      if(this.botonselecto == "whatsapp"){
        let whatsappUrl = `https://wa.me/5216672528776?text=${encodeURIComponent('Mi nombre es '+this.nombre+' '+this.apellido +' '+ this.mensaje)}`;
        window.open(whatsappUrl, '_blank');
        Swal.fire({
          title: titlew,
          text: textw,
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
            title: titlec,
            text: textc,
            icon: 'success',
            iconColor: 'green',
            background: '#1E3A8A',
            color: 'white',
          });
        } catch (error) {
          Swal.fire({
            title: 'Error!',
            text: texte,
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
        text: textf,
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
