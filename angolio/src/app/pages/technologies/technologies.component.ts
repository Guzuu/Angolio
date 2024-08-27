import { Component } from '@angular/core';
import { TilesComponent } from '../../sections/tiles/tiles.component';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [TilesComponent],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.scss'
})
export class TechnologiesComponent {

}
