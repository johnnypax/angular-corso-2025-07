import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Evento } from '../../models/evento';
import { EventoService } from '../../services/evento-service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inserisci',
  imports: [FormsModule, CommonModule],
  templateUrl: './inserisci.html',
  styleUrl: './inserisci.css'
})
export class Inserisci {
    cod?: string;
    nom?: string;
    des?: string;
    dat?: string;
    loc?: string;
    par?: number;

    successo: boolean = false;

    constructor(private service: EventoService, private router: Router){

    }

    Inserisci(): void{
      let evt : Evento = {
        codice: this.cod, 
        nome: this.nom, 
        descrizione: this.des, 
        data: this.dat, 
        location: this.loc, 
        partecipanti: this.par, 
      }

      this.service.Inserimento(evt).then(ris => {
        if(ris){
          // alert("Inserimento effettuato con successo");
          this.successo = true;

          setTimeout(() => {
            this.router.navigateByUrl("/")
          }, 3 * 1000);
        }
        else{
          alert("Errore di inserimento");
        }
      })
    }
}
