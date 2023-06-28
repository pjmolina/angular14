import { Component } from '@angular/core';
import { LoggerService } from '../services/logger.service';
import { User } from '../user-profile/user-profile.component';

interface Persona {
  firstName: string;
  lastName: string;
  role: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  personas: Persona[] = [
    {
      firstName: 'Jesica',
      lastName: 'Alba',
      role: 'Admin'
    },
    {
      firstName: 'Pepe',
      lastName: 'Lopez',
      role: 'Operador'
    },
    {
      firstName: 'Maria',
      lastName: 'Zamora',
      role: 'Admin'
    }
  ];

  constructor(private logger: LoggerService) {}

  onUserSelect(user: User): void {
    this.logger.log(
      `AppComponent: Se ha seleccionado el usuario ${user.name} con rol: ${user.role}`
    );
  }
}
