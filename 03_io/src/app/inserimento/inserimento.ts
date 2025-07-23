import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Prodotto } from '../models/prodotto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inserimento',
  imports: [FormsModule, CommonModule],
  templateUrl: './inserimento.html',
  styleUrl: './inserimento.css'
})
export class Inserimento {

  nome: string | undefined;
  descrizione: string | undefined;
  prezzo: number | undefined;

  elenco: Prodotto[] = [];

  salva(): void {
    let prod = new Prodotto(this.nome, this.descrizione, this.prezzo);
    this.elenco.push(prod);

    this.nome = "";
    this.descrizione = "";
    this.prezzo = 0;
  }
  
}
