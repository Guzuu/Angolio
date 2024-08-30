import { NgClass, NgFor } from '@angular/common';
import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { SocialsComponent } from '../elements/socials/socials.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { NavmenuComponent } from '../elements/navmenu/navmenu.component';
import { LanguageSwitchComponent } from '../elements/language-switch/language-switch.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgFor, SocialsComponent, NgClass, FontAwesomeModule, NavmenuComponent, LanguageSwitchComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() toggleMenu = new EventEmitter<void>();
  faBars = faBars;

  _toggleMenu(){
    this.toggleMenu.emit();
  }
}
