import { Injectable } from '@angular/core';
import { Prodotto } from '../models/prodotto';

@Injectable({
  providedIn: 'root'
})
export class ProdottoService {
  
  elenco: Prodotto[] = [];

  constructor(){
    let stringaLs = localStorage.getItem("ferramenta");

    if(!stringaLs)
      localStorage.setItem("ferramenta", JSON.stringify([]))
    else
      this.elenco = JSON.parse(stringaLs);
  }

  Insert(objProd: Prodotto): boolean {
    return true;
  }

}
