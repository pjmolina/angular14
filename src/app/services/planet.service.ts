import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { DataPage } from '../domain/data-page';
import { Planet, PlanetDto } from '../domain/planet';

@Injectable({
  providedIn: 'root',
})
export class PlanetService {
  constructor(private http: HttpClient) {}

  /** Devuelve una listado de planetas (pagina N) */
  getPlanets(n: number = 1): Observable<Planet[]> {
    const url = `https://swapi.dev/api/planets/?page=${n}`;

    return this.http
      .get<DataPage<PlanetDto>>(url, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .pipe(
        map((resp) => {
          return resp.results.map((dto) => toPlanet(dto));
        })
      );
  }
  //  HTTP   ---A--|
  //   WS    --A-B----c---D----|
}

function toPlanet(dto: PlanetDto): Planet {
  return {
    name: dto.name,
    climate: dto.climate,
    terrain: dto.terrain,
    residents: dto.residents,
    films: dto.films,
    url: dto.url,
    population: parseInt(dto.population, 10),
    rotationPeriod: parseInt(dto.rotation_period, 10),
    orbitalPeriod: parseInt(dto.orbital_period, 10),
    diameter: parseInt(dto.diameter, 10),
    gravity: parseInt(dto.gravity, 10),
    surfaceWater: parseInt(dto.surface_water, 10),
    created: new Date(dto.created),
    edited: new Date(dto.edited),
  } as Planet;
}

/*
  async
  callback
  Promesas.then().catch()
  Observable
    .pipe()     // productor     cat f | sort | lest |
    .subscribe(datos, error, done)  // consumidor

  iterador / subscriptor / programacion funcional
*/

/*
    getPlanets() : Observable(Planet[])
      getPerson()     Observable(Person[])
         getSpaceship()  Observable(Spaceship[])

     getPlanets().concatMap(p =>   getPerson()).concatMap().getPerson().

     subscribe(next: (data) => p, p, n)

*/
