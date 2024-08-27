import { Component, Input } from '@angular/core';
import { NgIf, NgStyle } from '@angular/common';
import { ITitleText } from '../../interfaces/ITitleText';

@Component({
  selector: 'app-imgtext',
  standalone: true,
  imports: [NgIf, NgStyle, NgIf],
  templateUrl: './imgtext.component.html',
  styleUrl: './imgtext.component.scss'
})
export class ImgtextComponent {
  @Input() headerCentered: boolean = false;
  @Input() sectionHeader!: ITitleText;
  @Input() imagePath: string | undefined;
  @Input() alt: string ="image";

  constructor() { }
}
