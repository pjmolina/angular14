/*
/  				      => appComponment
/planetas 		  =>	ListPlanetComponent
/planetas/:id   =>  PlanetDetailComponent
/acerca-de		  =>  AcercaComponent

*/

import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PlanetDetailComponent } from './planet/planet-detail/planet-detail.component';
import { PlanetListComponent } from './planet/planet-list/planet-list.component';
import { WelcomeComponent } from './welcome/welcome.component';

export const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'inicio', component: WelcomeComponent },
  { path: 'home', component: WelcomeComponent },
  { path: 'planetas', component: PlanetListComponent },
  { path: 'planetas/:id', component: PlanetDetailComponent },
  { path: 'acerca-de', component: AboutComponent },
  { path: '**', component: NotFoundComponent }
];

// export const rootRoutes = RouterModule.forRoot(routes);
