import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { User } from './interfaces/user';


@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  //protected readonly title = signal('Authorization page');
  user: User = {
      name: '',
      lastNmae: '',
      email: '',
      gender: 'male',
      country: 'ru',
      comment: '',
      agree: true,
  }
}
