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

  inputname: any;

  ngOnInit() {
    this.inputname = this.dataService.getNombre();
    console.log(this.inputname);
  }

}
