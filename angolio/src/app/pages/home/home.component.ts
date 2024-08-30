import { Component } from '@angular/core';
import { WelcomeComponent } from '../../built-sections/welcome/welcome.component';
import { PortfolioComponent } from '../../built-sections/portfolio/portfolio.component';
import { TechnologiesComponent } from '../../built-sections/technologies/technologies.component';
import { ContactComponent } from '../../built-sections/contact/contact.component';
import { WhenafkComponent } from '../../built-sections/whenafk/whenafk.component';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [WelcomeComponent, PortfolioComponent, TechnologiesComponent, ContactComponent, WhenafkComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
}) 
export class HomeComponent {
  constructor(private title: Title, private meta: Meta) {
    // Set title and description for the homepage
    this.title.setTitle('GuzuuCode - Portfolio and Projects');
    this.meta.addTag({ name: 'description', content: 'Welcome to GuzuuCode. Explore my projects, technologies, and contact me. I design and code, websites, apps, apis.' });
    this.meta.addTag({ name: 'keywords', content: 'portfolio, projects, technologies, contact, GuzuuCode' });

    // Open Graph tags for better social media integration
    this.meta.addTag({ property: 'og:title', content: 'GuzuuCode - Portfolio and Projects' });
    this.meta.addTag({ property: 'og:description', content: 'Welcome to GuzuuCode. Explore my projects, technologies, and contact me.' });
    this.meta.addTag({ property: 'og:image', content: 'https://guzuucode.pl/assets/images/GuzuuCodeSmall.png' });
    this.meta.addTag({ property: 'og:url', content: 'https://guzuucode.pl/' });
  }
}
