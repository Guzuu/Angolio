import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgFor],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  navList: NavLink[] = [
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

export class NavLink {
  id = 0;
  title = 'Link';
  endpoint = '/';
  active = false;
}
