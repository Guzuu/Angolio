import { Component } from '@angular/core';
import { SocialsComponent } from '../elements/socials/socials.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [SocialsComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
}
