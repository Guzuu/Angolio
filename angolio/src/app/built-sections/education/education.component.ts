import { Component } from '@angular/core';
import { ListComponent } from '../../sections/list/list.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [ListComponent, TranslateModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
})
export class EducationComponent {}
