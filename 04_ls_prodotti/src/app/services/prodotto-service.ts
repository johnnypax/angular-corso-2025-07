import { Injectable } from '@angular/core';
import { Prodotto } from '../models/prodotto';

@Injectable({
  providedIn: 'root'
})
export class ProdottoService {
  
  elenco: Prodotto[] = [];

  constructor(){
    console.log("ProdottService costruttore invocato!")

    let stringaLs = localStorage.getItem("ferramenta");

    if(!stringaLs)
      localStorage.setItem("ferramenta", JSON.stringify([]))
    else
      this.elenco = JSON.parse(stringaLs);
  }

  Insert(objProd: Prodotto): boolean {
    this.elenco.push(objProd);
    localStorage.setItem("ferramenta", JSON.stringify(this.elenco))
    return true;
  }

  GetAll(): Prodotto[] {
    let stringaLs = localStorage.getItem("ferramenta");
    return stringaLs ? JSON.parse(stringaLs) : []
  }

  Delete(cod: string): boolean {
    let stringaLs = localStorage.getItem("ferramenta");

    if(stringaLs)
      this.elenco = JSON.parse(stringaLs);

    for(let [index, item] of this.elenco.entries()){
      if(item.codice === cod){
        this.elenco.splice(index, 1)
        localStorage.setItem("ferramenta", JSON.stringify(this.elenco))
        return true;
      }
    }

    return false;
  }

}
