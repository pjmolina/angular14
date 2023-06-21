/* eslint-disable @typescript-eslint/no-empty-function */
import { TestBed } from '@angular/core/testing';

import { HttpClient } from '@angular/common/http';
import { PlanetService } from './planet.service';

class HttpClientMock {
  get() {}
}

describe('PlanetService', () => {
  let service: PlanetService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: HttpClient, useClass: HttpClientMock }]
    });
    service = TestBed.inject(PlanetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
