import { Component, Input } from '@angular/core';
import { ITitleText } from '../../interfaces/ITitleText';
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-tileselement',
  standalone: true,
  imports: [NgIf, NgFor, NgClass],
  templateUrl: './tileselement.component.html',
  styleUrl: './tileselement.component.scss'
})
export class TileselementComponent {
  @Input() tiles!: ITitleText[];
  @Input() isSubTiles = false;
}
