import { Injectable } from '@angular/core';
import { Risposta } from '../models/risposta';
import { Evento } from '../models/evento';

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  
  async Lista(): Promise<Evento[]> {
    const response = await fetch("http://127.0.0.1:4000/events");

    const body : Risposta = await response.json();

    let elenco_risultati : Evento[] = [];

    if(Array.isArray(body.data)){
      elenco_risultati = body.data;
    }

    return elenco_risultati;
  }

}
