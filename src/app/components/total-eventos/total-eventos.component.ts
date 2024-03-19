import { Component } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { PrimeIcons, MenuItem } from 'primeng/api';

@Component({
  selector: 'app-total-eventos',
  templateUrl: './total-eventos.component.html',
  styleUrl: './total-eventos.component.css'
})
export class TotalEventosComponent {
  
  items: MenuItem[] = [];

  visible: boolean = false;

    showDialog() {
        this.visible = true;

}}
