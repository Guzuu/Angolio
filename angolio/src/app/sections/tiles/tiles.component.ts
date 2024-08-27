import { NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { ITitleText } from '../../interfaces/ITitleText';
import { TileselementComponent } from '../../elements/tileselement/tileselement.component';


@Component({
  selector: 'app-tiles',
  standalone: true,
  imports: [NgFor, NgStyle, NgIf, FaIconComponent, TileselementComponent],
  templateUrl: './tiles.component.html',
  styleUrl: './tiles.component.scss'
})
export class TilesComponent {
  @Input() headerCentered: boolean = false;
  @Input() sectionHeader!: ITitleText;
  @Input() tiles!: ITitleText[];

  constructor() { }
}
