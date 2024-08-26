import { Component } from '@angular/core';
import { ImgtextComponent } from '../../sections/imgtext/imgtext.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ImgtextComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
