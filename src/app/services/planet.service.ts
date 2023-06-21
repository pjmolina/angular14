import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, concatMap, map } from 'rxjs';
import { DataPage } from '../domain/data-page';
import { Person, PersonDto } from '../domain/person';
import { Planet, PlanetDto } from '../domain/planet';

@Injectable({
  providedIn: 'root',
})
export class PlanetService {
  constructor(private http: HttpClient) {}

  /** Devuelve una listado de planetas (pagina N) */
  getPlanets(n = 1): Observable<Planet[]> {
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

  getPlanet(id: number): Observable<Planet> {
    const url = `https://swapi.dev/api/planets/${id}`;

    return this.http
      .get<PlanetDto>(url, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .pipe(
        map((resp) => {
          return toPlanet(resp);
        })
      );
  }
  getPerson(id: number): Observable<Person> {
    const url = `https://swapi.dev/api/people/${id}`;

    return this.http
      .get<PersonDto>(url, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .pipe(
        map((resp) => {
          return toPerson(resp);
        })
      );
  }

  getCompuesto(planeId: number): Observable<Compuesto> {
    let planet: Planet;

    return this.getPlanet(planeId).pipe(
      concatMap((p) => {
        const personasIds = p.residents.map((it) =>
          parseInt(
            it.replace('https://swapi.dev/api/people/', '').replace('/', ''),
            10
          )
        );
        planet = p;
        const persona2 = personasIds[1];

        return this.getPerson(persona2);
      }),
      map((person) => {
        return { planet: planet, person: person } as Compuesto;
      })
    );
  }

  //  HTTP   ---A--|
  //   WS    --A-B----c---D----|
}

export interface Compuesto {
  planet: Planet;
  person: Person;
}

function toPerson(dto: PersonDto): Person {
  return {
    name: dto.name,
    hairColor: dto.hair_color,
    height: parseInt(dto.height, 10),
    mass: parseInt(dto.mass, 10),
  } as Person;
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

     getPlanets().concatMap(p =>   getPerson()).concatMap().getSpaceship().

     subscribe(next: (data) => p, p, n)

*/
