import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TranslationService } from '../services/translation.service';
import { LenguajeService } from '../services/lenguaje.service';

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
    private translationService: TranslationService,
    private lenguajeService: LenguajeService
  ) {}

  showModal=false;
  itemSeleccionado = null;
  idioma:string;

  ngOnInit() {
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

  items = [
    {
      imagen: "https://res.cloudinary.com/dvzucfpbk/image/upload/v1717364472/canva1_zltvrb.jpg",
      likes: '10',
      titulo: 'Yo',
      texto: 'Soy Marco Rubio, tengo 26 años, vivo en Culiacán,Sinaloa,me gusta la programación y las finanzas bursátiles',
      tituloi:'Me',
      textoi:"I'm Marco Rubio, I'm 26 years old, I live in Culiacán, Sinaloa, I like programming and stock market finances"
    },
    {
      imagen: "https://res.cloudinary.com/dvzucfpbk/image/upload/c_scale,h_800,w_800/v1717193583/ruben_xgg1jz.jpg",
      likes: '20',
      titulo: 'Familia',
      texto: 'Uno de mis pasatiempos es estar con mi familia, o como en el caso de la imagen, con mi ahijado. Aunque llora siempre que lo cargo.',
      tituloi:'Family',
      textoi:"One of my hobbies is being with my family, or as in the case of the image, with my godson. Although he always cries when I carry him."
    },
    {
      imagen: "https://res.cloudinary.com/dvzucfpbk/image/upload/c_scale,h_800,w_800/v1717440260/futbol_cblbaa.jpg",
      likes: '30',
      titulo: 'Deporte',
      texto: 'Algo que siempre me ha gustado es el deporte, sobre todo el fútbol o últimamente también ir al gimnasio antes de empezar el día para estar con energía.',
      tituloi:'Sports',
      textoi:"Something I've always liked is sports, especially soccer or lately also going to the gym before starting the day to be energetic."
    },
    {
      imagen: "https://res.cloudinary.com/dvzucfpbk/image/upload/c_scale,h_800,w_800/v1717012158/smash3_h58nic.jpg",
      likes: '30',
      titulo: 'Juegos',
      texto: 'Otro de mis pasatiempos, como todo programador, es usar el tiempo libre jugando con mis amigos cosas como Smash, LOL, entre otros juegos.',
      tituloi:'Games',
      textoi:"Another of my hobbies, like every programmer, is to use free time playing with my friends things like Smash, LOL, among other games."
    },
    {
      imagen: "https://res.cloudinary.com/dvzucfpbk/image/upload/c_scale,h_800,w_800/v1717012156/programacion_unfvua.jpg",
      likes: '30',
      titulo: 'Programación y finanzas',
      texto: 'En términos laborales, siempre he tenido gusto por los temas de aquí, buscando un punto medio entre ambos, el cual se podría decir que encontré con el análisis de datos.',
      tituloi:'Programming and finances',
      textoi:"In terms of work, I've always had a taste for the topics here, looking for a middle ground between the two, which could be said to have found with data analysis."
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
