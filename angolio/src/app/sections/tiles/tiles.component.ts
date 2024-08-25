import { NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-tiles',
  standalone: true,
  imports: [NgFor, NgStyle, NgIf],
  templateUrl: './tiles.component.html',
  styleUrl: './tiles.component.scss'
})
export class TilesComponent {
  @Input() headerCentered: boolean = false;
  @Input() sectionHeader!: ITitleText;
  @Input() tiles!: ITitleText[];

  constructor() { }
}

export interface ITitleText{
  title?: string;
  text?: string;
}
