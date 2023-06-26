import { Component, OnDestroy, OnInit } from '@angular/core';
import { Planet } from 'src/app/domain/planet';
import { PlanetService } from 'src/app/services/planet.service';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.scss']
})
export class PlanetListComponent implements OnInit, OnDestroy {
  planets: Planet[] = [];
  error = '';
  private sub?: Subscription;
  searchText = '';

  constructor(private planetService: PlanetService) {}

  ngOnInit(): void {
    this.sub = this.planetService.getPlanets(1).subscribe({
      next: (data) => this.handleData(data),
      error: (err) => {
        this.error = err.message;
      },
      complete: () => {
        // http 1 / complete   (cierre implicito)
        // ws   N .... abierto (cierre expreso)
        console.log('Obsevable completado');
      }
    });
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
      this.sub = undefined;
    }
  }

  private handleData(planets: Planet[]): void {
    this.planets = planets;
    this.error = '';
  }
}
