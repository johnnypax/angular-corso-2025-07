import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Prodotto } from '../models/prodotto';

@Component({
  selector: 'app-lista',
  imports: [CommonModule],
  templateUrl: './lista.html',
  styleUrl: './lista.css'
})
export class Lista {

  elenco: string[] = ["Lamborghini", "Maserati", "BMW", "FIAT"]

  elenco_studenti: any = [
    { nome: "Giovanni", cognome: "Pace", matr: "AB12345"},
    { nome: "Valeria", cognome: "Verdi", matr: "AB12346"},
    { nome: "Marika", cognome: "Mariko", matr: "AB12347"},
  ]

  elenco_prodotti: Prodotto[] = [
    new Prodotto("Vite", "Avvitata", 1.2),
    new Prodotto("Cacciavite", "Torque", 12.2),
  ]

}
