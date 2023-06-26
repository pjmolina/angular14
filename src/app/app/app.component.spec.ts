import { TestBed } from '@angular/core/testing';
import { FilterPlanetPipe } from '../pipes/filter-planet.pipe';
import { PlanetListComponent } from '../planet/planet-list/planet-list.component';
import { PlanetService } from '../services/planet.service';
import { AppComponent } from './app.component';

class PlanetServiceMock {}

describe('AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [AppComponent, PlanetListComponent, FilterPlanetPipe],
      providers: [{ provide: PlanetService, useClass: PlanetServiceMock }]
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'mi aplicacion 23'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('mi aplicacion 23');
  });
});
