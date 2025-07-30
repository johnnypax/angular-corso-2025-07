import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Contatore } from './contatore/contatore';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Contatore],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  ngOnInit(){
    // debugger;
    // const obs$ = of("Ciao", "Giovanni", "Come stai?");
    // obs$.subscribe(val => {
    //   console.log(val)
    // })

    // of("Ciao", "Giovanni", "Come stai?").subscribe(val => {
    //   console.log(val)
    // })

    const stream$ = from(fetch("https://jsonplaceholder.typicode.com/posts"))
    stream$.subscribe(response => {
      console.log(response)
    })
  }

}
