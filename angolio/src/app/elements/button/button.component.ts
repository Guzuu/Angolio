import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  private _url: string = "/";
  private _buttonText: string = "more";
  
  @Input()
  set url(value: string | undefined) {
    this._url = value ?? "/";
  }
  get url(): string {
    return this._url;
  }

  @Input()
  set buttonText(value: string | undefined) {
    this._buttonText = value ?? "more";
  }
  get buttonText(): string {
    return this._buttonText;
  }

constructor() {}
}
