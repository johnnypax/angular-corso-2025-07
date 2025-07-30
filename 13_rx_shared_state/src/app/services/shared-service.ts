import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  
  // private numeroSubject = new Subject<number>();
  private numeroSubject = new BehaviorSubject<number>(3);
  obs$ = this.numeroSubject.asObservable();

  inviaNumero(val: number){
    if(val > 0){
      this.numeroSubject.next(val)
    }
  }

}
