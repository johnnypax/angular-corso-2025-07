import { Component } from '@angular/core';
import { ProdottoService } from '../../services/prodotto-service';
import { Prodotto } from '../../models/prodotto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista',
  imports: [CommonModule],
  templateUrl: './lista.html',
  styleUrl: './lista.css'
})
export class Lista {

  elenco: Prodotto[] = [];

  constructor(private service: ProdottoService){

  }

}
