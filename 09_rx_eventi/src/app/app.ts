import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EventoPulsante } from './evento-pulsante/evento-pulsante';
import { EventoCerca } from './evento-cerca/evento-cerca';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EventoPulsante, EventoCerca],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('09_rx_eventi');
}
