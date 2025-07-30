import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { filter, map, of, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  ngOnInit() {

    //Map
    // of(1,2,3,4,5,6,7,8,9)
    //   .pipe(
    //     map(x => {
    //       return x * 10
    //     }),
    //     map(z => z + 2)
    //   )
    //   .subscribe(val => console.log(val))

    //Filter
    // of(1,2,3,4,5,6,7,8,9)
    //   .pipe(
    //     filter(x => x > 3),
    //     filter(x => x < 8),
    //   )
    //   .subscribe(val => console.log(val))

    //Tap
    of(1, 2, 3, 4, 5, 6, 7, 8, 9)
      .pipe(
        tap(v =>  console.log("Valore TAP 1:", v)),
        map(x => x * 10),
        tap(v =>  console.log("Valore TAP 2:", v)),
        map(z => z + 2),
        tap(v =>  console.log("Valore TAP 3:", v)),
      )
      .subscribe(val => console.log("Valore finale", val))



  }

}
