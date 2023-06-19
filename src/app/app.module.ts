import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app/app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [AppComponent, UserProfileComponent],
  imports: [BrowserModule, FormsModule],
  providers: [
    // LoggerService, // 1. te pida LoggerService -> LoggerService
    // { provide: LoggerService, useClass: Logger2Service }, // 2. te pida LoggerService --> Logger2Service (gato por liebre)
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
