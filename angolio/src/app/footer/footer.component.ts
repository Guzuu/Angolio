import { Component } from '@angular/core';
import { SocialsComponent } from '../elements/socials/socials.component';
import { TranslateModule } from '@ngx-translate/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [SocialsComponent, TranslateModule, FaIconComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  faChevronUp = faChevronUp;

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
