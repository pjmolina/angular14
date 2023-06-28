import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../services/logger.service';
import { PlanetService } from '../services/planet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mi aplicacion 23';

  dinero = 12345.678;

  constructor(
    private logger: LoggerService,
    private planetService: PlanetService
  ) {
    this.logger.log('1. appcomponent constructor');
  }

  ngOnInit(): void {
    this.logger.log('2. appcomponent onInit');
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
