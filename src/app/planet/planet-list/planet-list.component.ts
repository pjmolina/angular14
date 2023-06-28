import { Component, OnDestroy, OnInit } from '@angular/core';
import { Planet } from 'src/app/domain/planet';
import { Compuesto, PlanetService } from 'src/app/services/planet.service';

import { Subscription, concatMap, map } from 'rxjs';
import { Person } from 'src/app/domain/person';
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
  objeto: Person | Planet | Compuesto | undefined | unknown = undefined;

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

  consultar1(): void {
    this.planetService.getPlanet(1).subscribe({
      next: (data) => {
        this.objeto = data;
      }
    });
  }
  consultar2(): void {
    this.planetService.getPerson(1).subscribe({
      next: (data) => {
        this.objeto = data;
      }
    });
  }
  consultar3(): void {
    let planet: Planet;

    this.planetService
      .getPlanet(1)
      .pipe(
        concatMap((p) => {
          const personasIds = p.residents.map((it) =>
            parseInt(
              it.replace('https://swapi.dev/api/people/', '').replace('/', ''),
              10
            )
          );
          planet = p;
          const persona2 = personasIds[1];

          return this.planetService.getPerson(persona2);
        }),
        map((person) => {
          return { planet: planet, person: person } as Compuesto;
        })
      )
      .subscribe({
        next: (data) => {
          this.objeto = data;
        },
        error: (err) => {
          this.objeto = { error: err };
        }
      });
  }
  consultar4(): void {
    this.planetService
      .getCompuesto(1)
      // .pipe(
      //   map((compuesto) => {
      //     return compuesto.person.name;
      //   })
      // )
      .subscribe({
        next: (data) => {
          this.objeto = data;
        },
        error: (err) => {
          this.objeto = { error: err };
        }
      });
  }
}
