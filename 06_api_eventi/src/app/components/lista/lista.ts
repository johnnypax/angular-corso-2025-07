import { Component } from '@angular/core';
import { Evento } from '../../models/evento';
import { EventoService } from '../../services/evento-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista',
  imports: [CommonModule],
  templateUrl: './lista.html',
  styleUrl: './lista.css'
})
export class Lista {

  elenco: Evento[] = []

  constructor(private service: EventoService){

  }

  ngOnInit(){
    this.AggiornaLista();
  }

  AggiornaLista(): void{
    this.service.Lista()
    .then(ris => {
      this.elenco = ris;

      console.log(this.elenco)
    })
    .catch(err => console.log(err))
  }

}
