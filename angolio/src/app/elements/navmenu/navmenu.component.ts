import { NgClass, NgFor } from '@angular/common';
import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-navmenu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgFor, NgClass, TranslateModule],
  templateUrl: './navmenu.component.html',
  styleUrl: './navmenu.component.scss',
})
export class NavmenuComponent implements AfterViewInit {
  @Input() vertical: boolean = false;
  @Output() navItemClicked = new EventEmitter<void>();

  navList: INavLink[] = [
    {
      id: 0,
      key: 'NAV.WELCOME',
      sectionId: 'welcome',
    },

    {
      id: 1,
      key: 'NAV.PORTFOLIO',
      sectionId: 'portfolio',
    },

    {
      id: 2,
      key: 'NAV.TECHNOLOGIES',
      sectionId: 'technologies',
    },

    {
      id: 3,
      key: 'NAV.EDUCATION',
      sectionId: 'education',
    },

    {
      id: 4,
      key: 'NAV.CONTACT',
      sectionId: 'contact',
    },

    {
      id: 5,
      key: 'NAV.WHEN_AFK',
      sectionId: 'when-afk',
    },
  ];

  currentFragment: string = '';

  constructor(private router: Router) {}

  ngAfterViewInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.handleFragmentNavigation();
      }
    });
  }

  navigateToSection(sectionId: string) {
    if (this.router.url !== '/') {
      this.router.navigate(['/'], { fragment: sectionId });
    } else {
      this.router.navigate([], { fragment: sectionId });
    }

    this.navItemClicked.emit(); // Emit event when a nav item is clicked
  }

  private handleFragmentNavigation() {
    const fragment = this.router.url.split('#')[1];
    this.currentFragment = fragment || '';
    if (fragment) {
      setTimeout(() => {
        const element = document.getElementById(fragment);
        if (element) {
          // Calculate the top position with an offset
          const offset = 80; // Adjust this value to increase or decrease the space
          const elementPosition =
            element.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - offset;

          // Scroll to the calculated position
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      }, 0);
    }
  }
}

export interface INavLink {
  id: number;
  key: string;
  sectionId: string;
}
