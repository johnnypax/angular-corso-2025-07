import { Component } from '@angular/core';
import { interval, take } from 'rxjs';

@Component({
  selector: 'app-contatore',
  imports: [],
  templateUrl: './contatore.html',
  styleUrl: './contatore.css'
})
export class Contatore {

  timer: number = 0;

  ngOnInit(){
    interval(1000)
      .pipe(
        take(5)
      )
      .subscribe(val => {
        this.timer = val;
      })
  }

}
