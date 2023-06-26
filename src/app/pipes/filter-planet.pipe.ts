import { Pipe, PipeTransform } from '@angular/core';
import { Planet } from '../domain/planet';

@Pipe({
  name: 'filterPlanet'
})
export class FilterPlanetPipe implements PipeTransform {
  transform(planets: Planet[], searchString: string): Planet[] {
    if (!planets) {
      return [];
    }
    searchString = searchString.toLowerCase().trim();
    if (!searchString) {
      return planets;
    }
    return planets.filter((p) => p.name.toLowerCase().includes(searchString));
  }
}
