import { Component } from '@angular/core';
import { SharedService } from '../../services/shared-service';

@Component({
  selector: 'app-componente-b',
  imports: [],
  templateUrl: './componente-b.html',
  styleUrl: './componente-b.css'
})
export class ComponenteB {

  numero: number = 0;

  constructor(private service: SharedService){ }

  ngOnInit(){
    this.service.obs$.subscribe(val => {
      console.log(val)
      this.numero = val;
    })
  }

}
