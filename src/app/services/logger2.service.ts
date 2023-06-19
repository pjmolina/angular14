import { Injectable } from '@angular/core';

/** LoggerV2 with timestamp */
@Injectable()
export class Logger2Service {
  log(msg: any) {
    const t0 = new Date().toISOString();
    const payload = `${t0} INFO:  ${msg}`;
    console.log(payload);
  }
  error(msg: any) {
    const t0 = new Date().toISOString();
    const payload = `${t0} ERROR: ${msg}`;
    console.error(payload);
  }
  warn(msg: any) {
    const t0 = new Date().toISOString();
    const payload = `${t0} WARN:  ${msg}`;
    console.warn(payload);
  }
}
