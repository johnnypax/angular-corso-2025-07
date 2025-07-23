import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  //Chiamata ad API
  getUser(){
    return { id: 1, nome: "Giovanni Pace" }
  }

}
