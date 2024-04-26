import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  constructor(
    private dataService: DataService
  ) {}

  inputname: string;
  nameaAmostrar:string;

  ngOnInit() {
    this.inputname = this.dataService.getNombre();
    if (this.inputname == null || this.inputname == undefined || this.inputname.length == 0) {
      this.nameaAmostrar = 'Desconocido';
    } else {
      this.nameaAmostrar = this.inputname;
    }
    console.log(this.inputname);
  }

}
