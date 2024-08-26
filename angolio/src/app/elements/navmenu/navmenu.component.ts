import { NgClass, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navmenu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgFor, NgClass],
  templateUrl: './navmenu.component.html',
  styleUrl: './navmenu.component.scss'
})
export class NavmenuComponent {
  @Input() vertical: boolean = false;

  navList: INavLink[] = [
    {
      id: 0,
      title: 'Home',
      endpoint: '/',
    },
    
    {
      id: 1,
      title: 'Portfolio',
      endpoint: '/portfolio',
    },
    
    {
      id: 2,
      title: 'Contact',
      endpoint: '/contact',
    },
    
    {
      id: 3,
      title: 'Technologies',
      endpoint: '/technologies',
    },
    
    {
      id: 4,
      title: 'When AFK',
      endpoint: '/when-afk',
    }
  ]

  constructor () {}
}

export interface INavLink {
  id: number;
  title: string;
  endpoint: string;
}
