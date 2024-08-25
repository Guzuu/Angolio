import { Component, Input } from '@angular/core';
import { ITitleText } from '../tiles/tiles.component';
import { NgIf, NgStyle } from '@angular/common';

@Component({
  selector: 'app-imgtext',
  standalone: true,
  imports: [NgIf, NgStyle],
  templateUrl: './imgtext.component.html',
  styleUrl: './imgtext.component.scss'
})
export class ImgtextComponent {
  @Input() headerCentered: boolean = false;
  @Input() sectionHeader!: ITitleText;
  @Input() imagePath: string ="/assets/images/GuzuuCodeSmall.png";
  @Input() alt: string ="image";

  constructor() { }
}
