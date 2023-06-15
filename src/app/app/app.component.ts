import { Component, OnInit } from '@angular/core';
import { User } from '../user-profile/user-profile.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'mi aplicacion 23';

  constructor() {
    console.log('1. appcomponent constructor');
  }

  ngOnInit(): void {
    console.log('2. appcomponent onInit');
  }

  onUserSelect(user: User): void {
    console.log(
      `AppComponent: Se ha seleccionado el usuario ${user.name} con rol: ${user.role}`
    );
  }
}
