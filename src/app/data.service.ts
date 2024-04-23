import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  private nombre: string;

  setNombre(nombre: string) {
    this.nombre = nombre;
  }
  getNombre() {
    return this.nombre;
  }
}
