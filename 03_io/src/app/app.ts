import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Lista } from './lista/lista';
import { Inserimento } from './inserimento/inserimento';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Inserimento],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('03_io');
}
