import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

export interface User {
  name: string;
  role: string;
}

export enum Roles {
  Admin = 'Admin',
  Operador = 'Operador',
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit, OnDestroy, OnChanges {
  @Input() firstName: string = '';
  @Input() lastName: string = '';
  @Input() role: string = '';

  @Output() selected = new EventEmitter<User>();

  constructor() {
    console.log('userProfile. 1. constructor');
  }

  get isAdmin(): boolean {
    return this.role === Roles.Admin;
  }

  ngOnInit(): void {
    console.log('userProfile. 2. ngOnInit');
  }

  ngOnDestroy(): void {
    console.log('userProfile. 9. ngOnDestroy');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

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
