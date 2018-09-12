import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Equipos } from '../app/equipos';

@Injectable({
  providedIn: 'root'
})
export class FixtureService {
  _equipos = new Subject<Equipos[]>();
  private equipos: Equipos[] = [];

  constructor() { }
  addEquipo(_equipo: Equipos): void {
    this.equipos.push(_equipo);
    this._equipos.next(this.equipos.slice());
  }

  deleteEquipo(index: number): void {
    this.equipos.splice(index, 1);
    this._equipos.next(this.equipos.slice());
  }
}
