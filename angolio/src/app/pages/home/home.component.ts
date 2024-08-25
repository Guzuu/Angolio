import { Component } from '@angular/core';
import {ImgtextComponent} from '../../sections/imgtext/imgtext.component'
import { TilesComponent } from '../../sections/tiles/tiles.component';
import { ListComponent } from '../../sections/list/list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ImgtextComponent , TilesComponent, ListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
}
