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
      imagen: "https://images.unsplash.com/photo-1487530811176-3780de880c2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
      likes: '10',
      titulo: 'Yo',
      texto: '',
    },
    {
      imagen: "assets/reading.png",
      likes: '20',
      titulo: 'Familia',
      texto: 'Uno de mis pasatiempos es estar con mi familia, o como en el caso de la imagen, con mi ahijado. Aunque llore siempre que lo cargo.',
    },
    {
      imagen: "assets/chat.png",
      likes: '30',
      titulo: 'Deporte',
      texto: 'Algo que siempre me ha gustado es el deporte, sobre todo el fútbol o últimamente también ir al gimnasio antes de empezar el día para estar con energía.',
    },
    {
      imagen: "assets/smash3.jpg",
      likes: '30',
      titulo: 'Juegos',
      texto: 'Otro de mis pasatiempos, como todo programador, es usar el tiempo libre jugando con mis amigos cosas como Smash, LOL entre otros juegos.',
    },
    {
      imagen: "assets/programacion.jpeg",
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
