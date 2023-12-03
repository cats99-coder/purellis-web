import {
  Component,
  inject,
  AfterContentInit,
  effect,
  signal,
} from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NavItemComponent } from './nav-item/nav-item.component';
import { TranslateModule } from '@ngx-translate/core';
import { IdiomaComponent } from './idioma/idioma.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { CartComponent } from './cart/cart.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    TranslateModule,
    NavItemComponent,
    IdiomaComponent,
    MyAccountComponent,
    CartComponent,
    RouterModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  route = signal(true);
  logo = 'fixed logo logo-fixed z-50';
  router = inject(Router);
  constructor() {
    this.router.events.subscribe((value) => {
      console.log(value);
      if (value.type === 1) {
        if (value.url === '/') {
          this.route.set(true);
        } else {
          this.route.set(false);
        }
      }
    });
    effect(() => {
      if (this.route()) {
        this.logo = 'fixed logo logo-fixed z-50';
      } else {
        this.logo = 'fixed logo logo-fixed z-50 stop';
      }
    });
  }
}
