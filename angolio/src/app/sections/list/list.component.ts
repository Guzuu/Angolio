import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TilesComponent } from '../tiles/tiles.component';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { ITitleText } from '../../interfaces/ITitleText';
import { TileselementComponent } from '../../elements/tileselement/tileselement.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    NgFor,
    NgStyle,
    NgIf,
    NgClass,
    FaIconComponent,
    TileselementComponent,
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  @Input() headerCentered: boolean = false;
  @Input() sectionHeader!: ITitleText;
  @Input() list!: ITitleText[];

  constructor() {}
}
