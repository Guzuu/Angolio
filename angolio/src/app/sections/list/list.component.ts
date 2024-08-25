import { NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ITitleText } from '../tiles/tiles.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [NgFor, NgStyle, NgIf],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  @Input() headerCentered: boolean = false;
  @Input() sectionHeader!: ITitleText;
  @Input() list!: ITitleText[];

  constructor() { }
}
