import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sobremi',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './sobremi.component.html',
  styleUrl: './sobremi.component.css'
})
export class SobremiComponent {

  constructor(
    private router: Router,
  ) {}

  showModal=false;
  itemSeleccionado = null;

  items = [
    {
      imagen: "https://res.cloudinary.com/dvzucfpbk/image/upload/v1717364472/canva1_zltvrb.jpg",
      likes: '10',
      titulo: 'Yo',
      texto: 'Soy Marco Rubio, tengo 26 años, vivo en Culiacán,Sinaloa,me gusta la programación y las finanzas bursátiles',
    },
    {
      imagen: "https://res.cloudinary.com/dvzucfpbk/image/upload/c_scale,h_800,w_800/v1717193583/ruben_xgg1jz.jpg",
      likes: '20',
      titulo: 'Familia',
      texto: 'Uno de mis pasatiempos es estar con mi familia, o como en el caso de la imagen, con mi ahijado. Aunque llora siempre que lo cargo.',
    },
    {
      imagen: "https://res.cloudinary.com/dvzucfpbk/image/upload/c_scale,h_800,w_800/v1717440260/futbol_cblbaa.jpg",
      likes: '30',
      titulo: 'Deporte',
      texto: 'Algo que siempre me ha gustado es el deporte, sobre todo el fútbol o últimamente también ir al gimnasio antes de empezar el día para estar con energía.',
    },
    {
      imagen: "https://res.cloudinary.com/dvzucfpbk/image/upload/c_scale,h_800,w_800/v1717012158/smash3_h58nic.jpg",
      likes: '30',
      titulo: 'Juegos',
      texto: 'Otro de mis pasatiempos, como todo programador, es usar el tiempo libre jugando con mis amigos cosas como Smash, LOL, entre otros juegos.',
    },
    {
      imagen: "https://res.cloudinary.com/dvzucfpbk/image/upload/c_scale,h_800,w_800/v1717012156/programacion_unfvua.jpg",
      likes: '30',
      titulo: 'Programación y finanzas',
      texto: 'En términos laborales, siempre he tenido gusto por los temas de aquí, buscando un punto medio entre ambos, el cual se podría decir que encontré con el análisis de datos.',
    },
  ];


  abrirModal(item){
    this.showModal = true;
    this.itemSeleccionado = item;
  }

  enviarAlMenu() {
    this.router.navigate(['/menu']);
  }
}
