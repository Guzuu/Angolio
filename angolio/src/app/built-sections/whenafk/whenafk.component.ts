import { Component } from '@angular/core';
import { ImgtextComponent } from '../../sections/imgtext/imgtext.component';
import { ListComponent } from '../../sections/list/list.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-whenafk',
  standalone: true,
  imports: [ImgtextComponent, ListComponent, TranslateModule],
  templateUrl: './whenafk.component.html',
  styleUrl: './whenafk.component.scss'
})
export class WhenafkComponent {

}
