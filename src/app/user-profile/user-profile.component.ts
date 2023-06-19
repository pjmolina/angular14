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
import { LoggerService } from '../services/logger.service';

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
  // providers: [LoggerService],  // si inyectamos el servicio aqui -> hay uca copia de ca servcio por componente
})
export class UserProfileComponent implements OnInit, OnDestroy, OnChanges {
  @Input() firstName: string = '';
  @Input() lastName: string = '';
  @Input() role: string = '';

  @Output() selected = new EventEmitter<User>();

  constructor(private logger: LoggerService) {
    this.logger.log('userProfile. 1. constructor');
  }

  get isAdmin(): boolean {
    return this.role === Roles.Admin;
  }

  ngOnInit(): void {
    this.logger.log('userProfile. 2. ngOnInit');
  }

  ngOnDestroy(): void {
    this.logger.log('userProfile. 9. ngOnDestroy');
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.logger.log(changes);
  }

  seleccionar() {
    // const nombreCompleto = this.firstName + ' ' + this.lastName;
    const nombreCompleto = `${this.firstName} ${this.lastName}`;

    this.logger.log(nombreCompleto);

    this.selected.emit({
      name: nombreCompleto,
      role: this.role,
    });
  }
}
