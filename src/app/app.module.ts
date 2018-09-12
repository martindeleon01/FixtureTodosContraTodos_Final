import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { EquiposComponent } from './equipos/equipos.component';
import { FormsModule } from '@angular/forms';
import { PartidosComponent } from './partidos/partidos.component';

@NgModule({
  declarations: [
    AppComponent,
    EquiposComponent,
    PartidosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
