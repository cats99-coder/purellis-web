import { Component, EventEmitter, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  TranslateModule,
  TranslateService,
  LangChangeEvent,
} from '@ngx-translate/core';

@Component({
  selector: 'app-idioma',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './idioma.component.html',
  styleUrl: './idioma.component.scss',
})
export class IdiomaComponent implements OnInit {
  currentLang = 'es';
  currentLang$ = new EventEmitter();
  translateService = inject(TranslateService);
  constructor() {
    this.translateService.addLangs(['es', 'en']);
    this.translateService.use('es');
    this.currentLang = this.translateService.currentLang;
    this.currentLang$ = this.translateService.onLangChange;
    this.currentLang$.subscribe((value) => {
      this.currentLang = value.lang;
    });
  }
  ngOnInit(): void {}
  changeLang() {
    this.translateService.use('en');
  }
}
