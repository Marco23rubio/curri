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
      imagen:"https://images.unsplash.com/photo-1487530811176-3780de880c2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
      likes:'10',
      titulo:'Titulo 1',
      texto:'Texto 1',
    },
    {
      imagen:"assets/reading.png",
      likes:'20',
      titulo:'Titulo 2',
      texto:'Texto 2',
    },
    {
      imagen:"assets/chat.png",
      likes:'30',
      titulo:'Titulo 3',
      texto:'Texto 3',
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
