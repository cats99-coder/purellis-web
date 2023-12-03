import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortadaComponent } from './portada/portada.component';
import { Port2Component } from './ports/port2/port2.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, PortadaComponent, Port2Component],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
