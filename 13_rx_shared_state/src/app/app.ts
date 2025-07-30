import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponenteA } from './components/componente-a/componente-a';
import { ComponenteB } from './components/componente-b/componente-b';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ComponenteA, ComponenteB],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('13_rx_shared_state');
}
