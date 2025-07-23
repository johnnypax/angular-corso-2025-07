import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
  pre: string | undefined;
  qua: string | undefined;

  salva(): void {

  }

}
