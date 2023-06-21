import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Planet } from 'src/app/domain/planet';
import { PlanetService } from 'src/app/services/planet.service';
import { PlanetListComponent } from './planet-list.component';

class PlanetServiceMock {
  getPlanets(): Observable<Planet[]> {
    return from([]);
  }
  getPlanet(id: number) {}
}

class HttpClientMock {
  get() {}
}

describe('PlanetListComponent', () => {
  let component: PlanetListComponent;
  let fixture: ComponentFixture<PlanetListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanetListComponent],
      providers: [
        { provide: PlanetService, useClass: PlanetServiceMock },
        { provide: HttpClient, useClass: HttpClientMock },
      ],
    });
    fixture = TestBed.createComponent(PlanetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
