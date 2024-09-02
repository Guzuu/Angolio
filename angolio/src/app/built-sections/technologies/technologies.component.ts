import { Component } from '@angular/core';
import { TilesComponent } from '../../sections/tiles/tiles.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [TilesComponent, TranslateModule],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.scss',
})
export class TechnologiesComponent {}
