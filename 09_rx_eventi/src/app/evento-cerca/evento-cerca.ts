import { Component } from '@angular/core';
import { debounceTime, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-evento-cerca',
  imports: [],
  templateUrl: './evento-cerca.html',
  styleUrl: './evento-cerca.css'
})
export class EventoCerca {

  ngAfterViewInit(){
    const sb = document.getElementById("searchBox");

    fromEvent(sb!, 'input')
      .pipe(
        debounceTime(500),
        map( (evt: any) => {
          return evt.target.value
        })
      )
      .subscribe(val => console.log(val))
  }

}
