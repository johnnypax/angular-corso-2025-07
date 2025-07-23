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
    console.log("Invocato costruttore"); 
  }

  ngOnInit(): void {
    this.elenco = this.service.GetAll();
    console.log("Invocato ngOnInit");
  }

  elimina(cod: string | undefined): void{
    if(!cod){
      alert("ERRORE")
      return;
    }

    if(this.service.Delete(cod)){
      this.elenco = this.service.GetAll();
      alert("OK")
    }
    else
      alert("ERRORE")
  }

}
