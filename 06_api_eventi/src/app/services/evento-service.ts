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

  async Inserimento(evt: Evento): Promise<boolean>{
    try{
      const response = await fetch("http://127.0.0.1:4000/events", {
        method: "POST",
        body: JSON.stringify(evt),
        headers: {
          "Content-Type": "application/json"
        }
      })

      if(!response.ok){
        console.log("Errore della richiesta", response.status)
        return false;
      }

      return true;
    } catch (error){
      console.log(error)
      return false;
    }
  }

}
