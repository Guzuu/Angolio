import { IconDefinition } from "@fortawesome/angular-fontawesome";

export interface ITitleText{
    icon?: IconDefinition;
    imagePath?: string;
    alt?: string;
    title?: string;
    text?: string;
    children?: ITitleText[];
  }