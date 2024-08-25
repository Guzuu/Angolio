import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { SocialsComponent } from '../elements/socials/socials.component';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgFor, SocialsComponent, NgClass, RouterLink, FontAwesomeModule, MatSidenavModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  faBars = faBars;
  isMenuOpen: boolean = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  navList: INavLink[] = [
    {
      id: 0,
      title: 'Home',
      endpoint: '/',
      active: true,
    },
    
    {
      id: 1,
      title: 'Portfolio',
      endpoint: '/portfolio',
      active: false,
    },
    
    {
      id: 2,
      title: 'Contact',
      endpoint: '/contact',
      active: false,
    },
    
    {
      id: 3,
      title: 'Technologies',
      endpoint: '/technologies',
      active: false,
    },
    
    {
      id: 4,
      title: 'When AFK',
      endpoint: '/when-afk',
      active: false,
    }
  ]
}

export interface INavLink {
  id: number;
  title: string;
  endpoint: string;
  active: boolean;
}
