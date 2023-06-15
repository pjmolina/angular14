import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface User {
  name: string;
  role: string;
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent {
  @Input() firstName: string = '';
  @Input() lastName: string = '';
  @Input() role: string = '';

  @Output() selected = new EventEmitter<User>();

  seleccionar() {
    // const nombreCompleto = this.firstName + ' ' + this.lastName;
    const nombreCompleto = `${this.firstName} ${this.lastName}`;

    console.log(nombreCompleto);

    this.selected.emit({
      name: nombreCompleto,
      role: this.role,
    });
  }
}
