import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app/app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

import { HttpClientModule } from '@angular/common/http';
import { ResaltarDirective } from './directives/resaltar.directive';
import { CurrencyPipe } from './pipes/currency.pipe';
import { FilterPlanetPipe } from './pipes/filter-planet.pipe';
import { PlanetListComponent } from './planet/planet-list/planet-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    PlanetListComponent,
    ResaltarDirective,
    CurrencyPipe,
    FilterPlanetPipe
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [
    // LoggerService, // 1. te pida LoggerService -> LoggerService
    // { provide: LoggerService, useClass: Logger2Service },
    // 2. te pida LoggerService --> Logger2Service (gato por liebre)
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
