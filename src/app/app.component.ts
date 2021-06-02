import { Component, VERSION } from '@angular/core';

class tempCity {
  nome: string;
  valore: string;
  constructor(nome: string, valore: string) {
    this.nome=nome;
    this.valore=valore;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title: string = 'Temperature in Angular ' + VERSION.major;
  selezione: tempCity;
  cities: Array<tempCity> = [
    new tempCity('Torino','14'),
    new tempCity('Milano','15'),
    new tempCity('Genova','18')
  ];
  seleziona(itemName: string) {
    var trovato: Array<tempCity> = this.cities.filter(
      el => ( el.nome === itemName )
    );
    this.selezione = trovato[0];
  }
  clean() {
    this.selezione = undefined;
  }
}
