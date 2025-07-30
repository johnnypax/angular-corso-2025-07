import { Component } from '@angular/core';
import { SharedService } from '../../services/shared-service';

@Component({
  selector: 'app-componente-a',
  imports: [],
  templateUrl: './componente-a.html',
  styleUrl: './componente-a.css'
})
export class ComponenteA {

  contatore: number = 0;

  constructor(private service: SharedService){ }

  invia(): void{
    this.contatore++;
    this.service.inviaNumero(this.contatore)
  }

}
