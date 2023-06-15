import { Component } from '@angular/core';
import { User } from '../user-profile/user-profile.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mi aplicacion 23';

  onUserSelect(user: User): void {
    console.log(
      `AppComponent: Se ha seleccionado el usuario ${user.name} con rol: ${user.role}`
    );
  }
}
