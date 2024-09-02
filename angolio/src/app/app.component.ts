import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {
  MatSidenav,
  MatSidenavContainer,
  MatSidenavContent,
} from '@angular/material/sidenav';
import { NavmenuComponent } from './elements/navmenu/navmenu.component';
import { SocialsComponent } from './elements/socials/socials.component';
import { TranslateService } from '@ngx-translate/core';
import { LanguageSwitchComponent } from './elements/language-switch/language-switch.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    MatSidenavContainer,
    MatSidenavContent,
    MatSidenav,
    NavmenuComponent,
    SocialsComponent,
    LanguageSwitchComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('sidenav', { static: false }) sidenav!: MatSidenav;
  isMenuOpen: boolean = false;

  constructor(private translate: TranslateService) {
    // Get the saved language from localStorage or use browser default
    const savedLanguage = localStorage.getItem('selectedLanguage');
    const browserLang = this.translate.getBrowserLang();

    if (savedLanguage) {
      this.translate.use(savedLanguage);
    } else if (browserLang && /en|pl/.test(browserLang)) {
      this.translate.setDefaultLang(browserLang);
      this.translate.use(browserLang);
    } else {
      this.translate.setDefaultLang('en'); // Fallback language
      this.translate.use('en');
    }
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeSidenav() {
    this.sidenav.close();
  }

  switchLanguage(language: string) {
    if (language === 'en' || language === 'pl') {
      this.translate.use(language);
      localStorage.setItem('selectedLanguage', language); // Save language to localStorage
    }
  }
}
