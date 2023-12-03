import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-portada',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './portada.component.html',
  styleUrl: './portada.component.scss'
})
export class PortadaComponent {

}
