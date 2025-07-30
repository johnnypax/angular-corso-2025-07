import { Component } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-evento-pulsante',
  imports: [],
  templateUrl: './evento-pulsante.html',
  styleUrl: './evento-pulsante.css'
})
export class EventoPulsante {

  contatore: number = 0;

  ngOnInit(){

  }

  ngAfterViewInit(){
    const btn = document.getElementById("pulsante");

    if(btn){
      fromEvent(btn, 'click')
        .subscribe(() => {
          console.log("Cliccato")
          this.contatore++;
        })
    }
  }

}
