import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app/app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { routes } from './app.routing';
import { ResaltarDirective } from './directives/resaltar.directive';
import { NotFoundComponent } from './not-found/not-found.component';
import { CurrencyPipe } from './pipes/currency.pipe';
import { FilterPlanetPipe } from './pipes/filter-planet.pipe';
import { PlanetDetailComponent } from './planet/planet-detail/planet-detail.component';
import { PlanetListComponent } from './planet/planet-list/planet-list.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    PlanetListComponent,
    ResaltarDirective,
    CurrencyPipe,
    FilterPlanetPipe,
    PlanetDetailComponent,
    AboutComponent,
    NotFoundComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    // LoggerService, // 1. te pida LoggerService -> LoggerService
    // { provide: LoggerService, useClass: Logger2Service },
    // 2. te pida LoggerService --> Logger2Service (gato por liebre)
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
