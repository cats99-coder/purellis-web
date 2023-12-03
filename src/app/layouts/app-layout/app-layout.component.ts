import { Component, signal, inject, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../header/header.component';
import { HomeComponent } from '../../home/home.component';
import { FooterComponent } from '../../footer/footer.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-app-layout',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    RouterModule,
  ],
  templateUrl: './app-layout.component.html',
  styleUrl: './app-layout.component.scss',
})
export class AppLayoutComponent {
  
  
}
