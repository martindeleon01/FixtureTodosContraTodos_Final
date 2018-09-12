import { Component, OnInit, OnDestroy } from '@angular/core';
import { Equipos } from '../equipos';
import { Subscription } from 'rxjs';
import { FixtureService } from '../fixture.service';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit, OnDestroy {

  equipos: Equipos[];
  nombreEquipo = '';
  _subscription: Subscription;
  _indexEquipo = -1;

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

  addEquipo() {
    if (this.nombreEquipo && this.nombreEquipo.trim().length) {
      this.fixtureService.addEquipo(new Equipos(this.nombreEquipo));
    }

    this.nombreEquipo = '';
  }

  deleteEquipo(index: number): void {
    this._indexEquipo = index > -1 ? index : this._indexEquipo;
    this.fixtureService.deleteEquipo(this._indexEquipo);
    this.getEquipos();
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }
}
