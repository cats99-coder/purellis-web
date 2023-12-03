import { Component, signal } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MenuCartComponent } from './menu-cart/menu-cart.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, TranslateModule, MenuCartComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  open = signal(false);
  openMenu() {
    this.open.update((value) => !value);
  }
}
