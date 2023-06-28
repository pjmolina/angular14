import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
  provincias = ['Sevilla', 'Cordoba', 'Huelva', 'Malaga', 'Cadiz'];
  municipios = [
    {
      name: 'Sevilla',
      provincia: 'Sevilla'
    },
    {
      name: 'Bormujos',
      provincia: 'Sevilla'
    },
    {
      name: 'San Roque',
      provincia: 'Cadiz'
    },
    {
      name: 'Jerez',
      provincia: 'Cadiz'
    }
  ];

  estado = {
    provinciaSeleccionada: null,
    poblacionSeleccionada: null
  };

  get poblaciones(): string[] {
    const prov = this.estado.provinciaSeleccionada;
    if (!prov) {
      return [];
    }
    return this.municipios
      .filter((m) => m.provincia === prov)
      .map((m) => m.name);
  }
}
