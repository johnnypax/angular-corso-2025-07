import { Component } from '@angular/core';
import { Evento } from '../../models/evento';

@Component({
  selector: 'app-lista',
  imports: [],
  templateUrl: './lista.html',
  styleUrl: './lista.css'
})
export class Lista {

  elenco: Evento[] = []

}
