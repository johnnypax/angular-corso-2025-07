import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProdottoService } from '../../services/prodotto-service';
import { Prodotto } from '../../models/prodotto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inserimento',
  imports: [FormsModule],
  templateUrl: './inserimento.html',
  styleUrl: './inserimento.css'
})
export class Inserimento {

  cod: string | undefined;
  nom: string | undefined;
  des: string | undefined;
  pre: number | undefined;
  qua: number | undefined;

  constructor(private service: ProdottoService, private router: Router){
    console.log("Invocato il costruttore di Inserimento");
    
  }

  salva(): void {
    let prod = new Prodotto(this.cod, this.nom, this.des, this.pre, this.qua)

    if(this.service.Insert(prod)){
      alert("OK");

      this.router.navigateByUrl("/lista")
    }
    else
      alert("Errore");
  }

}
