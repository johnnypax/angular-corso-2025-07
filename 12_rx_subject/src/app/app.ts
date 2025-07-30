import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  ngOnInit() {
    //Subject
    // const sbj = new Subject();

    // sbj.subscribe(val => console.log("Ricevuto 1: ", val));

    // sbj.next("Ciao Giovanni");
    // sbj.next("Ciao Valeria");
    // sbj.next("Ciao Mario");

    // sbj.subscribe(val => console.log("Ricevuto 2: ", val));

    //BehaviorSubject
    const bs = new BehaviorSubject<string>("Ciao Giovanni");

    bs.subscribe(val => console.log("Ricevuto 1: ", val));

    bs.next("Ciao Valeria");

    bs.subscribe(val => console.log("Ricevuto 2: ", val));
  }

}
