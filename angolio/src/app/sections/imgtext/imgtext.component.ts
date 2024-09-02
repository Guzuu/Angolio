import { Component, Input } from '@angular/core';
import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { ITitleText } from '../../interfaces/ITitleText';
import { ButtonComponent } from '../../elements/button/button.component';
import { IImage } from '../../interfaces/IImage';

@Component({
  selector: 'app-imgtext',
  standalone: true,
  imports: [NgIf, NgStyle, NgIf, ButtonComponent, NgClass, NgFor],
  templateUrl: './imgtext.component.html',
  styleUrl: './imgtext.component.scss',
})
export class ImgtextComponent {
  @Input() headerCentered: boolean = false;
  @Input() sectionHeader!: ITitleText;
  @Input() images!: IImage[];
  @Input() url?: string;
  @Input() buttonText?: string;
  @Input() backgroundImg = true;
  @Input() reversed = false;
  @Input() textAlign?: string;

  constructor() {}
}
