import { Component, OnInit } from '@angular/core';
import { concatMap, map } from 'rxjs';
import { Person } from '../domain/person';
import { Planet } from '../domain/planet';
import { LoggerService } from '../services/logger.service';
import { Compuesto, PlanetService } from '../services/planet.service';
import { User } from '../user-profile/user-profile.component';

interface Persona {
  firstName: string;
  lastName: string;
  role: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mi aplicacion 23';
  objeto: Person | Planet | Compuesto | undefined | unknown = undefined;
  dinero = 12345.678;

  personas: Persona[] = [
    {
      firstName: 'Jesica',
      lastName: 'Alba',
      role: 'Admin'
    },
    {
      firstName: 'Pepe',
      lastName: 'Lopez',
      role: 'Operador'
    },
    {
      firstName: 'Maria',
      lastName: 'Zamora',
      role: 'Admin'
    }
  ];

  constructor(
    private logger: LoggerService,
    private planetService: PlanetService
  ) {
    this.logger.log('1. appcomponent constructor');
  }

  ngOnInit(): void {
    this.logger.log('2. appcomponent onInit');
  }

  onUserSelect(user: User): void {
    this.logger.log(
      `AppComponent: Se ha seleccionado el usuario ${user.name} con rol: ${user.role}`
    );
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
/*
    Observable >
      getPlanet()
      concatMap. -> getPerson()
      concatMap. -> getPerson()

      --> .subscribe


    Antipatron:
    Observable > getPlanet().subscribe
                  -> getPerson().subscribe
                      -> getPerson().subscribe

*/
