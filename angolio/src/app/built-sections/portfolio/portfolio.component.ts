import { Component } from '@angular/core';
import { TilesComponent } from '../../sections/tiles/tiles.component';
import { ListComponent } from '../../sections/list/list.component';
import { ImgtextComponent } from '../../sections/imgtext/imgtext.component';
import { faPaintBrush, faCalculator } from '@fortawesome/free-solid-svg-icons';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ImgtextComponent , TilesComponent, ListComponent, TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  faPaintBrush = faPaintBrush;
  faCalculator = faCalculator;
}
