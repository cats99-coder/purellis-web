import { Routes } from '@angular/router';
import { HomeComponent } from '../../home/home.component';
import { AboutUsComponent } from '../../about-us/about-us.component';
import { ProductosComponent } from '../../tienda/productos/productos.component';

export const routes: Routes = [
  {
    path: 'about',
    component: AboutUsComponent,
  },
  {
    path: 'shop',
    component: ProductosComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
];
