import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, Subscription, concatMap, of } from 'rxjs';
import { Planet } from 'src/app/domain/planet';
import { PlanetService } from 'src/app/services/planet.service';
@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.scss']
})
export class PlanetDetailComponent implements OnInit, OnDestroy {
  planet?: Planet = undefined;
  sub?: Subscription;

  constructor(
    private planetService: PlanetService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log('Init');

    this.sub = this.route.paramMap
      .pipe(
        concatMap((pm) => {
          return this.getPlanetById(pm);
        })
      )
      .subscribe((planet) => {
        this.planet = planet;
        console.log('Actualizado el planeta a ', planet);
      });
  }
  ngOnDestroy(): void {
    console.log('Destroy');

    if (this.sub) {
      this.sub.unsubscribe();
      this.sub = undefined;
    }
  }

  private getPlanetById(paramMap: ParamMap): Observable<Planet | undefined> {
    const id = paramMap.get('id');
    if (id === null) {
      return of(undefined);
    } else {
      return this.planetService.getPlanet(+id);
    }
  }
}
