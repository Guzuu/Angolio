import { IconDefinition } from '@fortawesome/angular-fontawesome';
import { IImage } from './IImage';

export interface ITitleText {
  icon?: IconDefinition;
  image?: IImage;
  title?: string;
  text?: string;
  children?: ITitleText[];
  url?: string;
}
