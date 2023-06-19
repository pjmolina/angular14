import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../services/logger.service';
import { User } from '../user-profile/user-profile.component';

interface Persona {
  firstName: string;
  lastName: string;
  role: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'mi aplicacion 23';

  personas: Persona[] = [
    {
      firstName: 'Jesica',
      lastName: 'Alba',
      role: 'Admin',
    },
    {
      firstName: 'Pepe',
      lastName: 'Lopez',
      role: 'Operador',
    },
    {
      firstName: 'Maria',
      lastName: 'Zamora',
      role: 'Admin',
    },
  ];

  constructor(private logger: LoggerService) {
    this.logger.log('1. appcomponent constructor');
  }

  ngOnInit(): void {
    this.logger.log('2. appcomponent onInit');
  }

  onUserSelect(user: User): void {
    this.logger.log(
      `AppComponent: Se ha seleccionado el usuario ${user.name} con rol: ${user.role}`
    );
  }
}
