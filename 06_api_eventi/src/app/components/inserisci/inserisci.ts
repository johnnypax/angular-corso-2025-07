import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Evento } from '../../models/evento';
import { EventoService } from '../../services/evento-service';

@Component({
  selector: 'app-inserisci',
  imports: [FormsModule],
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

    constructor(private service: EventoService){

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
          alert("Inserimento effettuato con successo");
        }
        else{
          alert("Errore di inserimento");
        }
      })
    }
}
