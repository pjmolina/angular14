import { Injectable } from '@angular/core';

let seq = 1;

@Injectable({ providedIn: 'root' })
export class LoggerService {
  id = 0;

  constructor() {
    this.id = seq++;
  }

  log(msg: any) {
    console.log(this.id + ' ' + msg);
  }
  error(msg: any) {
    console.error(msg);
  }
  warn(msg: any) {
    console.warn(msg);
  }
}
