import { Component } from '@angular/core';
import { ImgtextComponent } from '../../sections/imgtext/imgtext.component';
import { ButtonComponent } from '../../elements/button/button.component';
import { Meta, Title } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-redo',
  standalone: true,
  imports: [ImgtextComponent, ButtonComponent, TranslateModule],
  templateUrl: './redo.component.html',
  styleUrl: './redo.component.scss',
})
export class RedoComponent {
  constructor(
    private title: Title,
    private meta: Meta,
  ) {
    // Set title and description for the homepage
    this.title.setTitle('GuzuuCode - Redo game app');
    this.meta.addTag({
      name: 'description',
      content:
        'Discover a revolutionary game app that lets you set up games, play in real-time, chat with other players, and enjoy customizable dark and light themes. Join the game, set tricks, vote on attempts, and leave anytime you want.',
    });
    this.meta.addTag({
      name: 'keywords',
      content:
        'real-time game, skate game app, interactive game, chat during game, customizable themes, play and chat, skate, BMX',
    });

    // Open Graph tags for better social media integration
    this.meta.addTag({
      property: 'og:title',
      content: 'GuzuuCode - Redo game app',
    });
    this.meta.addTag({
      property: 'og:description',
      content:
        'Experience a unique real-time game app where you can set up games, interact with players, and enjoy customizable themes. Play, chat, and have fun with skaters, BMX riders, and more!',
    });
    this.meta.addTag({
      property: 'og:image',
      content: 'https://guzuucode.pl/assets/images/redo/redoBanner.png',
    });
    this.meta.addTag({
      property: 'og:url',
      content: 'https://guzuucode.pl/redo/',
    });
  }
}
