import { Component, Input } from '@angular/core';
import { NgIf, NgStyle } from '@angular/common';
import { ITitleText } from '../../interfaces/ITitleText';
import { ButtonComponent } from '../../elements/button/button.component';

@Component({
  selector: 'app-imgtext',
  standalone: true,
  imports: [NgIf, NgStyle, NgIf, ButtonComponent],
  templateUrl: './imgtext.component.html',
  styleUrl: './imgtext.component.scss'
})
export class ImgtextComponent {
  @Input() headerCentered: boolean = false;
  @Input() sectionHeader!: ITitleText;
  @Input() imagePath: string | undefined;
  @Input() alt: string ="image";
  @Input() url?: string;
  @Input() buttonText?: string;

  constructor() { }
}
