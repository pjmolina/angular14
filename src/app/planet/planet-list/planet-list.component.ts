import { Component, OnInit } from '@angular/core';
import { Planet } from 'src/app/domain/planet';
import { PlanetService } from 'src/app/services/planet.service';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.scss'],
})
export class PlanetListComponent implements OnInit {
  planets: Planet[] = [];
  error = '';

  constructor(private planetService: PlanetService) {}

  ngOnInit(): void {
    this.planetService.getPlanets(1).subscribe({
      next: (data) => this.handleData(data),
      error: (err) => {
        this.error = err.message;
      },
      complete: () => {
        // http 1
        // ws   N
        console.log('Obsevable completado');
      },
    });
  }

  private handleData(planets: Planet[]): void {
    this.planets = planets;
    this.error = '';
  }
}
