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
  timer: number | undefined;

  constructor(private service: ProdottoService){
    console.log("Invocato costruttore Lista"); 
  }

  ngOnInit(): void {
    this.timer = setInterval(() => {
      this.elenco = this.service.GetAll();
      console.log("Invocato interval");
      
    }, 1000);

    console.log("Invocato ngOnInit");
  }

  ngOnDestroy(): void {
    console.log("Invocato onDestroy di Lista");
    clearInterval(this.timer)
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
