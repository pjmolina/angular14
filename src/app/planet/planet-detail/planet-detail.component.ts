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
  sub2?: Subscription;
  loading = false;

  constructor(
    private planetService: PlanetService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log('Init');

    const pm = this.route.snapshot.paramMap;
    console.log('paramMap snapshot ', JSON.stringify(pm, null, 2));

    this.sub2 = this.route.queryParamMap.subscribe((queryParam) => {
      console.log('queryparam: ', JSON.stringify(queryParam, null, 2));
    });

    this.sub = this.route.paramMap
      .pipe(
        concatMap((pm) => {
          this.loading = true;
          return this.getPlanetById(pm);
        })
        // delay(5000)
      )
      .subscribe((planet) => {
        this.planet = planet;
        console.log('Actualizado el planeta a ', planet);
        this.loading = false;
      });
  }
  ngOnDestroy(): void {
    console.log('Destroy');

    if (this.sub) {
      this.sub.unsubscribe();
      this.sub = undefined;
    }
    if (this.sub2) {
      this.sub2.unsubscribe();
      this.sub2 = undefined;
    }
  }

  private getPlanetById(paramMap: ParamMap): Observable<Planet | undefined> {
    const id = paramMap.get('id');
    const color = paramMap.get('color');

    console.log('id', id);
    console.log('color', color);

    if (id === null) {
      return of(undefined);
    } else {
      return this.planetService.getPlanet(+id);
    }
  }
}
