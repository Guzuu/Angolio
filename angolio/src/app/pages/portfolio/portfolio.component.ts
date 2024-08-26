import { Component } from '@angular/core';
import { TilesComponent } from '../../sections/tiles/tiles.component';
import { ListComponent } from '../../sections/list/list.component';
import { ImgtextComponent } from '../../sections/imgtext/imgtext.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ImgtextComponent , TilesComponent, ListComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

}
