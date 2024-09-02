import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-language-switch',
  standalone: true,
  imports: [NgFor, NgClass, NgIf, FaIconComponent],
  templateUrl: './language-switch.component.html',
  styleUrls: ['./language-switch.component.scss'],
})
export class LanguageSwitchComponent {
  languages = ['en', 'pl']; // Supported languages
  isDropdownOpen = false; // Tracks if dropdown is open
  selectedLanguage = this.getStoredLanguage() || 'en'; // Default to 'en'
  faLanguage = faLanguage;

  constructor(private translate: TranslateService) {}

  switchLanguage(language: string) {
    if (this.languages.includes(language)) {
      this.translate.use(language);
      this.selectedLanguage = language;
      localStorage.setItem('selectedLanguage', language); // Save language to localStorage
    }
    this.isDropdownOpen = false;
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  private getStoredLanguage(): string | null {
    return localStorage.getItem('selectedLanguage');
  }

  getSelectedLanguage(): string {
    return this.selectedLanguage;
  }
}
