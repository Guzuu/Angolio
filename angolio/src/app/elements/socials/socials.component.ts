import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-socials',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './socials.component.html',
  styleUrl: './socials.component.scss'
})
export class SocialsComponent {
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;
  faGithub = faGithub;
}
