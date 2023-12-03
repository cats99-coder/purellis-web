import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { TranslateModule } from "@ngx-translate/core";
@Component({
  selector: 'app-my-account',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, TranslateModule],
  templateUrl: './my-account.component.html',
  styleUrl: './my-account.component.scss'
})
export class MyAccountComponent {

}
