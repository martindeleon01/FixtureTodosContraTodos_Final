import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Equipos } from '../equipos';
import { FixtureService } from '../fixture.service';

@Component({
  selector: 'app-partidos',
  templateUrl: './partidos.component.html',
  styleUrls: ['./partidos.component.css']
})
export class PartidosComponent implements OnInit {
  _subscription: Subscription;
  equipos: Equipos[] = [];
  fechas: string[][] = [];

  constructor(private fixtureService: FixtureService) { }

  ngOnInit() {
    this.getEquipos();
  }

  getEquipos(): void {
    this._subscription = this.fixtureService._equipos
      .subscribe((equipos: Equipos[]) => {
        this.equipos = equipos;
      });
  }

  sorteoFechas() {
    const _totalFechas = this.equipos.length - 1;
    const _cantidadEquipos = this.equipos.length;
    const _partidosXFecha = this.equipos.length / 2;
    const _equipos = this.equipos.slice();

    this.fechas = [];

    for (let j = 0; j < _totalFechas; j++) {
      this.fechas[j] = [];

      for (let i = 0; i < _partidosXFecha; i++) {
        this.fechas[j][i] = _equipos[i].name + '-' + _equipos[_cantidadEquipos - 1 - i].name;
      }

      _equipos.splice(1, 0, _equipos.pop());
    }
  }
}
